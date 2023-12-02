import {Component,OnInit,inject} from "@angular/core";
import {HttpErrorResponse} from "@angular/common/http";
import {HttpRequestService} from "../../services/httprequest.service";
import {CompleteTodoService} from "../../services/completetodo.service";
import {DialogManagerService} from "../../services/dialogmanager.service";
import {ToDoModel} from "../../models/todo.model";
import {environment} from "../../../environments/environment";

@Component({
  selector: "app-content",
  templateUrl: "./content.component.html",
  styleUrl: "./content.component.css"
})

export class ContentComponent implements OnInit{
  private _list:ToDoModel[];
  private httprequest:HttpRequestService;
  private dialogmanager:DialogManagerService;
  private completetodo:CompleteTodoService;

  constructor(){
    this._list = [];
    this.httprequest = inject(HttpRequestService);
    this.dialogmanager = inject(DialogManagerService);
    this.completetodo = inject(CompleteTodoService);
  }

  public get list():ToDoModel[]{
    return this._list;
  }

  public ngOnInit():void{
    this.httprequest.httpGetRequest(environment.serverUrl + "app").subscribe({
      next: (response:any) => {
        for(let i = 0;i < response.result.length;i++){
          const todo:ToDoModel = new ToDoModel();
          todo.text = response.result[i].text;
          todo.completed = response.result[i].completed;
          todo.id = response.result[i]._id;
          todo.v = response.result[i].__v;
          this._list.push(todo);
          this.completetodo.addTodo(todo.id,todo.completed);
        }
        this.dialogmanager.openDialog(response.message);
      },
      error: (error:HttpErrorResponse) => {
        const errorMessage:string = error.statusText + " (" + error.status + ")";
        this.dialogmanager.openDialog(errorMessage);
      }
    });
  }

  public createCard(event:ToDoModel):void{
    this._list.push(event);
    this.completetodo.addTodo(event.id,event.completed);
  }

  public updateContent(event:ToDoModel):void{
    this.httprequest.httpPutRequest(environment.serverUrl + "app/" + event.id,{text:event.text,completed:!event.completed}).subscribe({
      next: (response:any) => {
        let i:number = 0;
        while(i < this._list.length && this._list[i].id !== event.id){
          i++;
        }
        if(i < this._list.length){
          this._list[i].completed = !this._list[i].completed;
          this.completetodo.setState(this._list[i].id,this._list[i].completed);
        }
        this.dialogmanager.openDialog(response.message);
      },
      error: (error:HttpErrorResponse) => {
        const errorMessage:string = error.statusText + " (" + error.status + ")";
        this.dialogmanager.openDialog(errorMessage);
      }
    });
  }

  public deleteContent(event:string):void{
    this.httprequest.httpDeleteRequest(environment.serverUrl + "app/" + event,{}).subscribe({
      next: (response:any) => {
        let i:number = 0;
        while(i < this._list.length && this._list[i].id !== event){
          i++;
        }
        if(i < this._list.length){
          this._list.splice(i,1);
          this.completetodo.deleteTodo(event);
        }
        this.dialogmanager.openDialog(response.message);
      },
      error: (error:HttpErrorResponse) => {
        const errorMessage:string = error.statusText + " (" + error.status + ")";
        this.dialogmanager.openDialog(errorMessage);
      }
    });
  }
}

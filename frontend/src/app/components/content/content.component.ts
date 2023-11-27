import {Component,OnInit,inject} from "@angular/core";
import {HttpErrorResponse} from "@angular/common/http";
import {HttpRequestService} from "../../services/httprequest.service";
import {DialogManagerService} from "../../services/dialogmanager.service";
import {ToDoModel} from "../../models/todo";
import {environment} from "../../../environments/environment";

@Component({
  selector: "app-content",
  templateUrl: "./content.component.html",
  styleUrl: "./content.component.css"
})

export class ContentComponent implements OnInit{
  private list:ToDoModel[];
  private httprequest:HttpRequestService;
  private dialogmanager:DialogManagerService;

  constructor(){
    this.list = [];
    this.httprequest = inject(HttpRequestService);
    this.dialogmanager = inject(DialogManagerService);
  }

  public ngOnInit():void{
    this.httprequest.httpGetRequest(environment.serverUrl + "app").subscribe({
      next: (response:any) => {
        for(let i = 0;i < response.result.length;i++){
          const todo:ToDoModel = new ToDoModel();
          todo.setText(response.result[i].text);
          todo.setCompleted(response.result[i].completed);
          todo.setId(response.result[i]._id);
          todo.setV(response.result[i].__v);
          this.list.push(todo);
        }
        this.dialogmanager.openDialog(response.message);
      },
      error: (error:HttpErrorResponse) => {
        const errorMessage:string = error.statusText + " (" + error.status + ")";
        this.dialogmanager.openDialog(errorMessage);
      }
    });
  }

  public getList():ToDoModel[]{
    return this.list;
  }

  public createCard(event:ToDoModel):void{
    this.list.push(event);
  }

  public updateContent(event:ToDoModel){
    this.httprequest.httpPutRequest(environment.serverUrl + "app/" + event.getId(),{text:event.getText(),completed:!event.getCompleted()}).subscribe({
      next: (response:any) => {
        let i:number = 0;
        while(i < this.list.length && this.list[i].getId() !== event.getId()){
          i++;
        }
        if(i < this.list.length){
          this.list[i].setCompleted(!this.list[i].getCompleted());
        }
        this.dialogmanager.openDialog(response.message);
      },
      error: (error:HttpErrorResponse) => {
        const errorMessage:string = error.statusText + " (" + error.status + ")";
        this.dialogmanager.openDialog(errorMessage);
      }
    });
  }

  public deleteContent(event:string){
    this.httprequest.httpDeleteRequest(environment.serverUrl + "app/" + event,{}).subscribe({
      next: (response:any) => {
        let i:number = 0;
        while(i < this.list.length && this.list[i].getId() !== event){
          i++;
        }
        if(i < this.list.length){
          this.list.splice(i,1);
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

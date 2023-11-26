import {Component,OnInit} from "@angular/core";
import {HttpErrorResponse} from "@angular/common/http";
import {HttpRequestService} from "../../services/httprequest.service";
import {environment} from "../../../environments/environment";
import {ToDoModel} from "../../models/todo";

@Component({
  selector: "app-content",
  templateUrl: "./content.component.html",
  styleUrl: "./content.component.css"
})

export class ContentComponent implements OnInit{
  private list:ToDoModel[] = [];

  constructor(private httprequest:HttpRequestService){}

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
        console.log(response.message);
      },
      error: (error:HttpErrorResponse) => {
        const errorMessage:string = error.statusText + " (" + error.status + ")";
        console.error(errorMessage);
      }
    });
  }

  public getList():ToDoModel[]{
    return this.list;
  }

  public managerCreation(event:ToDoModel):void{
    this.list.push(event);
  }
}

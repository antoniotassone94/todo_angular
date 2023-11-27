import {Component,EventEmitter,OnInit,Output,inject} from "@angular/core";
import {HttpErrorResponse} from "@angular/common/http";
import {NgForm} from "@angular/forms";
import {HttpRequestService} from "../../services/httprequest.service";
import {environment} from "../../../environments/environment";
import {ToDoModel} from "../../models/todo";

@Component({
  selector: "app-create",
  templateUrl: "./create.component.html",
  styleUrl: "./create.component.css"
})

export class CreateComponent implements OnInit{
  @Output() todoCreated:EventEmitter<ToDoModel>;
  private httprequest:HttpRequestService;

  constructor(){
    this.todoCreated = new EventEmitter<ToDoModel>();
    this.httprequest = inject(HttpRequestService);
  }

  public ngOnInit():void{}

  public createnow(form:NgForm){
    if(form.valid){
      this.httprequest.httpPostRequest(environment.serverUrl + "app",{text:form.value.text,completed:false}).subscribe({
        next: (response:any) => {
          const todo:ToDoModel = new ToDoModel();
          todo.setText(response.result.text);
          todo.setCompleted(response.result.completed);
          todo.setId(response.result._id);
          todo.setV(response.result.__v);
          this.todoCreated.emit(todo);
          console.log(response.message);
        },
        error: (error:HttpErrorResponse) => {
          const errorMessage:string = error.statusText + " (" + error.status + ")";
          console.error(errorMessage);
        }
      });
    }
  }
}

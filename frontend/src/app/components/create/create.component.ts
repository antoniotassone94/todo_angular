import {Component,EventEmitter,OnInit,Output,inject} from "@angular/core";
import {HttpErrorResponse} from "@angular/common/http";
import {NgForm} from "@angular/forms";
import {HttpRequestService} from "../../services/httprequest.service";
import {DialogManagerService} from "../../services/dialogmanager.service";
import {ToDoModel} from "../../models/todo.model";
import {environment} from "../../../environments/environment";

@Component({
  selector: "app-create",
  templateUrl: "./create.component.html",
  styleUrl: "./create.component.css"
})

export class CreateComponent implements OnInit{
  @Output() todoCreated:EventEmitter<ToDoModel>;
  private httprequest:HttpRequestService;
  private dialogmanager:DialogManagerService;

  constructor(){
    this.todoCreated = new EventEmitter<ToDoModel>();
    this.httprequest = inject(HttpRequestService);
    this.dialogmanager = inject(DialogManagerService);
  }

  public ngOnInit():void{}

  public createnow(form:NgForm):void{
    if(form.valid){
      this.httprequest.httpPostRequest(environment.serverUrl + "app",{text:form.value.text,completed:false}).subscribe({
        next: (response:any) => {
          const todo:ToDoModel = new ToDoModel();
          todo.text = response.result.text;
          todo.completed = response.result.completed;
          todo.id = response.result._id;
          todo.v = response.result.__v;
          this.todoCreated.emit(todo);
          this.dialogmanager.openDialog(response.message);
        },
        error: (error:HttpErrorResponse) => {
          const errorMessage:string = error.statusText + " (" + error.status + ")";
          this.dialogmanager.openDialog(errorMessage);
        }
      });
    }
  }
}

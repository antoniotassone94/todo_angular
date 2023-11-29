import {Component,EventEmitter,Input,Output,OnInit, ViewChild, ElementRef} from "@angular/core";
import {MatIconRegistry} from "@angular/material/icon";
import {DomSanitizer,SafeResourceUrl} from "@angular/platform-browser";
import {ToDoModel} from "../../models/todo";

@Component({
  selector: "app-card",
  templateUrl: "./card.component.html",
  styleUrl: "./card.component.css"
})

export class CardComponent implements OnInit{
  @Input() todo:ToDoModel = new ToDoModel();
  @Output() update:EventEmitter<ToDoModel>;
  @Output() delete:EventEmitter<string>;

  constructor(private registryIcon:MatIconRegistry,private dom:DomSanitizer){
    this.update = new EventEmitter<ToDoModel>();
    this.delete = new EventEmitter<string>();
    const urlSafe:SafeResourceUrl = this.dom.bypassSecurityTrustResourceUrl("assets/images/trashIcon.svg");
    this.registryIcon.addSvgIcon("trash",urlSafe);
  }

  public getIdentifierCheckbox():string{
    return "completed_" + this.todo.getId();
  }

  public ngOnInit():void{}

  public updateTodo():void{
    this.update.emit(this.todo);
  }

  public deleteTodo():void{
    this.delete.emit(this.todo.getId());
  }

  public setBackground():boolean{
    return this.todo.getCompleted();
  }
}

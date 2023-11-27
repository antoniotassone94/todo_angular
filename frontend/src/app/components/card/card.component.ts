import {Component,EventEmitter,Input,Output,OnInit} from "@angular/core";
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

  constructor(){
    this.update = new EventEmitter<ToDoModel>();
    this.delete = new EventEmitter<string>();
  }

  public ngOnInit():void{}

  public updateTodo():void{
    this.update.emit(this.todo);
  }

  public deleteTodo():void{
    this.delete.emit(this.todo.getId());
  }
}

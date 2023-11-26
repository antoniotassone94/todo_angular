import {Component,Input,OnInit} from "@angular/core";
import {NgForm} from "@angular/forms";
import {ToDoModel} from "../../models/todo";

@Component({
  selector: "app-card",
  templateUrl: "./card.component.html",
  styleUrl: "./card.component.css"
})

export class CardComponent implements OnInit{
  @Input() todo:ToDoModel = new ToDoModel();

  constructor(){}

  public ngOnInit():void{}

  public completeTodo(form:NgForm):void{
    console.log(form);
  }
}

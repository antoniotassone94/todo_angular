import {Component,EventEmitter,OnInit,Output} from "@angular/core";
import {NgForm} from "@angular/forms";

@Component({
  selector: "app-create",
  templateUrl: "./create.component.html",
  styleUrls: ["./create.component.css"]
})

export class CreateComponent implements OnInit{
  @Output() message:EventEmitter<string> = new EventEmitter<string>();

  constructor(){}

  public ngOnInit():void{}

  public createnow(form:NgForm){
    const message:string = form.value.message;
    this.message.emit(message);
  }
}

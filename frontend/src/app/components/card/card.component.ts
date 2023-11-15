import {Component,Input,OnInit} from "@angular/core";

@Component({
  selector: "app-card",
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.css"]
})

export class CardComponent implements OnInit{
  @Input() message:string = "";

  constructor(){}

  public ngOnInit():void{}
}

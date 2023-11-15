import {Component,OnInit} from "@angular/core";

@Component({
  selector: "app-content",
  templateUrl: "./content.component.html",
  styleUrls: ["./content.component.css"]
})

export class ContentComponent implements OnInit{
  private list:string[] = [];

  constructor(){}

  public ngOnInit():void{
    this.list.push("prova1");
    this.list.push("prova2");
    this.list.push("prova3");
    this.list.push("prova4");
    this.list.push("prova5");
  }

  public getList():string[]{
    return this.list;
  }

  public managerCreation(event:string):void{
    this.list.push(event);
  }
}

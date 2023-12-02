import {Component,Inject,OnInit} from "@angular/core";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {MatIconRegistry} from "@angular/material/icon";
import {DomSanitizer,SafeResourceUrl} from "@angular/platform-browser";
import {MessageType} from "../../models/servermessage.model";

@Component({
  selector: "app-modalmessage",
  templateUrl: "./modalmessage.component.html",
  styleUrl: "./modalmessage.component.css"
})

export class ModalMessageComponent implements OnInit{
  private _message:MessageType;

  constructor(@Inject(MAT_DIALOG_DATA) data:MessageType,private registryIcon:MatIconRegistry,private dom:DomSanitizer){
    this._message = data;
    const urlSafe:SafeResourceUrl = this.dom.bypassSecurityTrustResourceUrl("assets/images/closeIcon.svg");
    this.registryIcon.addSvgIcon("close",urlSafe);
  }

  public get message():string{
    return this._message.textMessage;
  }

  public ngOnInit():void{}
}

import {Directive,ElementRef,HostListener,Input,OnInit} from "@angular/core";

@Directive({
  selector:"[appCardBackground]"
})

export class CardBackgroundDirective implements OnInit{
  @Input() appCardBackground:boolean = false;

  constructor(private htmlElement:ElementRef){}

  public ngOnInit():void{
    if(this.appCardBackground === true){
      this.htmlElement.nativeElement.style.backgroundColor = "red";
    }else{
      this.htmlElement.nativeElement.style.backgroundColor = "green";
    }
  }

  /*@HostListener("click")
  public managerStyle():void{
    if(this.appCardBackground === true){
      this.htmlElement.nativeElement.style.backgroundColor = "red";
    }else{
      this.htmlElement.nativeElement.style.backgroundColor = "green";
    }
  }*/
}

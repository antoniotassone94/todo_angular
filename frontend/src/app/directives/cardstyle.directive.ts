import {Directive,ElementRef,Input,OnInit,inject} from "@angular/core";
import {CompleteTodoService} from "../services/completetodo.service";

@Directive({
  selector:"[appCardStyle]"
})

export class CardStyleDirective implements OnInit{
  @Input() appCardStyle:boolean = false;
  @Input() todoId:string = "";
  private completetodo:CompleteTodoService;

  constructor(private htmlElement:ElementRef){
    this.completetodo = inject(CompleteTodoService);
  }

  public ngOnInit():void{
    this.updateStyle();
    this.completetodo.getState(this.todoId).subscribe({
      next: (state:boolean) => {
        this.appCardStyle = state;
        this.updateStyle();
      }
    })
  }

  private updateStyle():void{
    if(this.appCardStyle === true){
      this.htmlElement.nativeElement.style.textDecoration = "line-through";
    }else{
      this.htmlElement.nativeElement.style.textDecoration = "";
    }
  }
}

import {Injectable} from "@angular/core";
import {BehaviorSubject,Observable} from "rxjs";

@Injectable({
  providedIn:"root"
})

export class CompleteTodoService{
  private todoId:string[];
  private todoState:BehaviorSubject<boolean>[];
  private todoObservable:Observable<boolean>[];

  constructor(){
    this.todoId = [];
    this.todoState = [];
    this.todoObservable = [];
  }

  public getState(actualtodo:string):Observable<boolean>{
    let i:number = 0;
    while(i < this.todoId.length && this.todoId[i] !== actualtodo){
      i++;
    }
    return this.todoObservable[i];
  }

  public setState(actualtodo:string,state:boolean):void{
    let i:number = 0;
    while(i < this.todoId.length && this.todoId[i] !== actualtodo){
      i++;
    }
    this.todoState[i].next(state);
  }

  public addTodo(todoId:string,initialState:boolean){
    this.todoId.push(todoId);
    this.todoState.push(new BehaviorSubject<boolean>(initialState));
    this.todoObservable.push(this.todoState[this.todoState.length - 1].asObservable());
  }

  public deleteTodo(actualtodo:string){
    let i:number = 0;
    while(i < this.todoId.length && this.todoId[i] !== actualtodo){
      i++;
    }
    if(i < this.todoId.length){
      this.todoId.splice(i,1);
      this.todoState.splice(i,1);
      this.todoObservable.splice(i,1);
    }
  }
}

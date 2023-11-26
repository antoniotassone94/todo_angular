export class ToDoModel{
  private text:string;
  private completed:boolean;
  private _id:string;
  private __v:number;

  constructor(){
    this.text = "";
    this.completed = false;
    this._id = "";
    this.__v = 0;
  }

  public getText():string{
    return this.text;
  }

  public setText(text:string):void{
    this.text = text;
  }

  public getCompleted():boolean{
    return this.completed;
  }

  public setCompleted(completed:boolean):void{
    this.completed = completed;
  }

  public getId():string{
    return this._id;
  }

  public setId(_id:string):void{
    this._id = _id;
  }

  public getV():number{
    return this.__v;
  }

  public setV(__v:number):void{
    this.__v = __v;
  }
}

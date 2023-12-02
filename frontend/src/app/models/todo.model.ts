export class ToDoModel{
  private _text:string;
  private _completed:boolean;
  private _id:string;
  private _v:number;

  constructor(){
    this._text = "";
    this._completed = false;
    this._id = "";
    this._v = 0;
  }

  public get text():string{
    return this._text;
  }

  public set text(text:string){
    this._text = text;
  }

  public get completed():boolean{
    return this._completed;
  }

  public set completed(completed:boolean){
    this._completed = completed;
  }

  public get id():string{
    return this._id;
  }

  public set id(id:string){
    this._id = id;
  }

  public get v():number{
    return this._v;
  }

  public set v(v:number){
    this._v = v;
  }
}

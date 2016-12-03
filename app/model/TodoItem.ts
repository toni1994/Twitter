export default class TodoItem {
  public text: string;
  public done: boolean;
  
  constructor(text: string, done: boolean = false){
    this.text = text;
    this.done = done;
  }
}
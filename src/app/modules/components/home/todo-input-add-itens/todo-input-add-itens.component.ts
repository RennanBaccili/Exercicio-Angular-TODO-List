import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-todo-input-add-itens',
  templateUrl: './todo-input-add-itens.component.html',
  styleUrls: ['./todo-input-add-itens.component.scss']
})
export class TodoInputAddItensComponent {

    @Output()
    public emmitItemTaskList = new EventEmitter();

    // string que sera adicionada
    public addItemTaskList:string ="";

    public submitItemTaskList(){
      this.addItemTaskList = this.addItemTaskList.trim();// trim para retirar os espaços antes e depois
      if(this.addItemTaskList){
        this.emmitItemTaskList.emit(this.addItemTaskList);
        this.addItemTaskList="";
      }

    }
}

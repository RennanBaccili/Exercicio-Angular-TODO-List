import { Component, DoCheck } from '@angular/core';
//interface taskList como boa pratica
import { TaskList } from '../model/task-list';
import { last } from 'rxjs';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements DoCheck {

   //Tipamos o objeto                     verifica se é objeto e transforma em array
   public taskList:Array<TaskList> = JSON.parse(localStorage.getItem("list")||"[]");

  ngDoCheck(): void {
      this.setLocalStorage();
  }

  //deleção item
  public deletemItemTesk(event:number){
    this.taskList.splice(event,1)
  }
  //area de confirmação
  public deleteAllList(){
    const confirme = window.confirm("Voce deseja realmente deletar tudo")
    if(confirme){
      this.taskList = [];
    }
  }
  public addItemList(event:string){
    this.taskList.push({task:event,checked:false});
  }

  public setLocalStorage(){
    //para organizar lista checados e não chacados
    if(this.taskList){
      this.taskList.sort((first,last)=>Number(first.checked) - Number(last.checked));
      //para salvar itens no localStorage
      localStorage.setItem("list", JSON.stringify(this.taskList))
    }
  }
}

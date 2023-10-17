import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms'


//componenets
import { HeaderComponent } from './home/header/header.component';
import { TodoButtonDeleteAllComponent } from './home/todo-button-delete-all/todo-button-delete-all.component';
import { TodoInputAddItensComponent } from './home/todo-input-add-itens/todo-input-add-itens.component';
import { TodoListComponent } from './home/todo-list/todo-list.component';

//pages
import { HomeComponent } from '../pages/home/home.component';

@NgModule({
  declarations: [
    HeaderComponent,
    TodoButtonDeleteAllComponent,
    TodoInputAddItensComponent,
    TodoListComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class HomeModule { }

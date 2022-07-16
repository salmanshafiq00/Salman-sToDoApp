import { identifierName } from '@angular/compiler';
import { Component } from '@angular/core';
import {Model, TodoItem} from "./model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TODO';
  model = new Model();
  todoText="";
  Button = "Add";
  myArray = [];
  currentIndex : number;


  constructor() {
    this.getToDoItems();

  }
  getName(){
    return this.model.user;
  }

  getToDoItems(){
    // this.model.items.push(JSON.parse(localStorage.getItem("ToDo")));
    if(this.model.items.length ==0){
      this.model.items = JSON.parse(localStorage.getItem("ToDo"))
      return this.model.items;
    }
    else{
      return this.model.items;
    }
  }

  addItem(newItem){
    if (this.Button=="Add" && newItem != "") {
      this.model.items.push(new TodoItem(newItem, false));
      localStorage.setItem("ToDo", JSON.stringify(this.model.items));
      this.todoText = "";
    }
    else{
      this.model.items[this.currentIndex].action=newItem;
      localStorage.setItem("ToDo", JSON.stringify(this.model.items));
      this.todoText = "";
    }
  }
  PopulateItem(index){

    this.todoText = this.model.items[index].action;
    this.Button = "Update";
    this.currentIndex = index;
  }

  DeleteItem(index){
    this.model.items.splice(index, 1);
    localStorage.setItem("ToDo", JSON.stringify(this.model.items));
  }
  
}

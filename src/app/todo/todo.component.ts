import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit 
{

  constructor() { }

  ngOnInit(): void 
  {
  }
  
  todo=[];
  
  newItem:string;
  add()
  {
	this.todo.push(this.newItem);
  }

  remove(itemToRemove:string)
  {
	this.todo=this.todo.filter(elem => elem!=itemToRemove);
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {
 todo:any[]=[]
 task:string=""

  constructor() {
   
 }
 
 
  ngOnInit(): void {
  }
  addtask(event:any){
    this.task=(event.target as HTMLInputElement).value
 }
add(){
  this.todo.push(this.task)
  console.log(this.task)
}
removearray(){
  this.todo.splice(-1)
}
}
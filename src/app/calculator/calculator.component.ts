import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
 //value1=""
 //value2=""
 //value3=this.value1+this.value2
   add1(){
  console.log("") 
 }
  value1:string=""
  value2:string=""
  result:string=""
  operator:string=""
  setoperator(opr:any){
    if (opr=="+"){
    this.operator='+'
     }
    if (opr=="-"){
    this.operator='-'
     }
    if(opr=="*"){
    this.operator='*'
    }
    if(opr=="/"){
    this.operator='/'
    }
  }

 
 
  constructor() { }

  ngOnInit(): void {
  }
  add(){
    console.log("number addition")

  }
  setvalue1(event:any){
    this.value1=(event.target as HTMLInputElement).value
   // console.log("function invoked....")
  }
   setvalue2(event:any){
  this.value2=(event.target as HTMLInputElement).value
}

}

import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

export type Order ={
id: number;
name: string;
discription: string;
}

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

  public title:string = "Order Details"
  public order : Order = {
    id:23,
    name: "Prakesh",
    discription: "Order discription",
  };
  public display:string="none";
  public display2:string="none";
  public display3:string = "block"

  constructor(private route:Router) { }

  
  ngOnInit(): void {
  }
  
  recieveData(data:any){
    this.order = data;
    console.log(this.order);
    this.display="none";
    this.display2="block";
    this.display3 ="none";
  }
  save(){
this.display2 = "block";
this.display = "none";
this.display3 = "none";
}

  edit(){
    this.display = "block";
    this.display2 = "none";
    this.display3 = "none";
  }

  back(){
    this.display3 = "block";
    this.display2 = "none";
  }

  
}

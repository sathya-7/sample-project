import { Component, OnChanges, OnInit, Output, Input, SimpleChange, EventEmitter, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.scss']
})
export class OrderDetailsComponent implements OnInit, OnChanges, OnDestroy {

  constructor(private router : Router) {

  }
  @Input() title: any;
  @Input() order: any;
  @Output() sendData = new EventEmitter;

  // if component gets entered into DOM ngOnChange,ngOnInit, triggered.
  ngOnInit(): void {
    console.log("component Initialized")
  }
  ngOnChanges(data: any) {
    console.log(data);
    console.log("component changed");
  }
  // if i change navigation to home or product ,ngOnDestroy triggred.
  ngOnDestroy() {
    console.log("component Destroyed")
  }
  updateData() {
    this.sendData.emit(this.order);
  }

}

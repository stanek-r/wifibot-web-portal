import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-touchpad',
  templateUrl: './touchpad.component.html',
  styleUrls: ['./touchpad.component.scss']
})
export class TouchpadComponent implements OnInit {

  mouseDown = false;
  startX?: number;
  startY?: number;

  constructor() { }

  ngOnInit(): void {
  }

  onClick(e : MouseEvent): void {
    console.log("x: " + e.offsetX + ";y: " + e.offsetY);
  }

  onMouseDown(e : MouseEvent): void {
    this.mouseDown = true;
    this.startX = e.offsetX;
    this.startY = e.offsetY;
    console.log(this.mouseDown);
    
  }

  onMouseUp(e : MouseEvent): void {
    this.mouseDown = false;
    console.log(this.mouseDown);
  }

  onMouseMove(e : MouseEvent): void{
    if(this.mouseDown)
      console.log(e.offsetX +" "+ e.offsetY);

  }

}

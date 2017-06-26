import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  private time: string;
  interval;
  lastNumber = 0;
  @Output() intervalFired = new EventEmitter<string>();
  @Output() newNumberFired = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  onStart(){
    this.interval = setInterval(()=>{
      var d = new Date();
      var t = d.toLocaleTimeString();
      this.intervalFired.emit(t);
      this.newNumberFired.emit(this.lastNumber);
      this.lastNumber++;
    },1000);
  }

  onStop(){
    clearInterval(this.interval);
  }

}

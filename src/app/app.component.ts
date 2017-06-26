import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  time;
  number;

  evenNumbers:number[] = [];
  oddNumbers:number[] = [];

  onIntervalFired(time){
    this.time = time;
  }

  onNewNumberFired(number){
    if(number % 2 === 0){
      this.evenNumbers.push(number);
    }
    else{
      this.oddNumbers.push(number);
    }
  }
}

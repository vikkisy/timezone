import { Component } from '@angular/core';
import { Timeouts } from 'selenium-webdriver';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  d:Date = new Date();
  localTime = this.d.getTime();
  localOffset = this.d.getTimezoneOffset() * 60000;
  utc = this.localTime + this.localOffset;
  time;
  timeZone=null;
  pstDate() {
    this.time = new Date();
    this.timeZone = "PST";
  }
  mstDate() {
    this.time = new Date(this.utc + (3600000 * -7));
    this.timeZone = "MST";
  }
  cstDate() {
    this.time = new Date(this.utc + (3600000 * -6));
    this.timeZone = "CST";
  }
  estDate() {
    this.time = new Date(this.utc + (3600000 * -5));
    this.timeZone = "EST";
  }
  clearDate() {
    this.time = 0;
    this.timeZone = 0;
  }

  


}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  time;
  timeZone=null;
  pstDate() {
    var d = new Date();
    var localTime = d.getTime();
    var localOffset = d.getTimezoneOffset() * 60000;
    var utc = localTime + localOffset;
    var pst = utc + (3600000 * -8);
    this.time = new Date(pst);
    this.timeZone = "PST";
  }
  mstDate() {
    var d = new Date();
    var localTime = d.getTime();
    var localOffset = d.getTimezoneOffset() * 60000;
    var utc = localTime + localOffset;
    var pst = utc + (3600000 * -7);
    this.time = new Date(pst);
    var color:boolean = true;
    this.timeZone = "MST";
  }
  cstDate() {
    var d = new Date();
    var localTime = d.getTime();
    var localOffset = d.getTimezoneOffset() * 60000;
    var utc = localTime + localOffset;
    var pst = utc + (3600000 * -6);
    this.time = new Date(pst);
    this.timeZone = "CST";
  }
  estDate() {
    var d = new Date();
    var localTime = d.getTime();
    var localOffset = d.getTimezoneOffset() * 60000;
    var utc = localTime + localOffset;
    var pst = utc + (3600000 * -5);
    this.time = new Date(pst);
    this.timeZone = "EST";
  }
  clearDate() {
    this.time = 0;
    this.timeZone = 0;
  }

  


}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.scss']
})
export class ClockComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.settime;
  }
  hour= document.getElementById("hour");
  min= document.getElementById("min");
  sec= document.getElementById("sec");
  body= document.getElementById("body");
  clock= document.getElementById("clock");
  

  clockSet():void{
    var now = new Date();
    var secT = (now.getSeconds() * 360) / 60;
    var minT = (now.getMinutes() * 360) / 60;
    var hourT = (now.getHours() * 360) / 12;
    this.hour!.style.transform = `rotate(${hourT + 90}deg)`;
    this.min!.style.transform = `rotate(${minT + 90}deg)`;
    this.sec!.style.transform = `rotate(${secT + 90}deg)`;
    if (now.getHours() <= 17 && now.getHours() >= 6) {
      this.body!.style.backgroundColor = "#a2d2ff";
      this.clock!.style.border = "5px solid #a2d2ff";
      this.clock!.style.boxShadow = `5px 5px 10px #7193b3,
      -5px -5px 10px #d3ffff,inset 5px 5px 10px #7193b3,
      inset -5px -5px 10px #d3ffff`;
    } else {
      this.body!.style.backgroundColor = "#2e4c6d";
      this.clock!.style.border = "5px solid #2e4c6d";
      this.clock!.style.boxShadow = `5px 5px 10px #20354c, -5px -5px 10px #3c638e,
      inset 5px 5px 10px #20354c, inset -5px -5px 10px #3c638e`;
    }
  }

settime=setInterval(this.clockSet, 1000);
ngOnDestroy(){
    clearInterval(this.settime);
}
}

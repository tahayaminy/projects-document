import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer-stopwatch',
  templateUrl: './timer-stopwatch.component.html',
  styleUrls: ['./timer-stopwatch.component.scss']
})
export class TimerStopwatchComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  $(el:string):any{
    return document.getElementById(el)!;
  }
  hourglassT:any;
  waves:any = document.getElementsByTagName("img");
  
  hourglassStart(){
    let H = eval(this.$("min").value)* 60 + eval(this.$("sec").value);
    if (H != 0) {
      let h = H;
      for (let wave of this.waves) {
        wave.style.opacity = 1;
      }
  
      this.$("backwave").style.height = "100%";
  
      this.hourglassT = setInterval(() => {
        h -= 1;
        this.$("backwave").style.height = (h * 100) / H + "%";
        if (h == 0) {
          this.hourglassEnd();
          for (let wave of this.waves) {
            wave.style.opacity = 0;
          }
        }
      }, 1000);
  
      this.$("hourglass-start").style.display="none";
      this.$("hourglass-end").style.display="inline-block";
    }
  };
  hourglassEnd(){
    clearInterval(this.hourglassT);
    this.$("hourglass-start").style.display="inline-block";
    this.$("hourglass-end").style.display="none";
  };
  
  hourglass:any = document.getElementsByClassName("hourglass");
  stopwatch:any = document.getElementsByClassName("stopwatch");
  change(srv:boolean) {
    if (srv == true) {
      for (let ex of this.stopwatch) {
        ex.style.display = "none";
      }
      for (let ex of this.hourglass) {
        ex.style.display = "block";
      }
    } else if (srv == false) {
      for (let ex of this.stopwatch) {
        ex.style.display = "block";
      }
      for (let ex of this.hourglass) {
        ex.style.display = "none";
      }
    }
  }
  arr = [0, 0, 0, 0, 0];
  stopwatchT:any;
  state:boolean = true;
  SE = () => {
    if (this.state) {
      this.state = false;
      this.stopwatchT = setInterval(() => {
        if (this.arr[4] == 9) {
          this.arr[4] = 0;
          this.$("s01").innerText = this.arr[4];
          this.$("s10").innerText = ++this.arr[3];
          if (this.arr[3] == 6) {
            this.arr[3] = 0;
            this.$("s10").innerText = this.arr[3];
            this.$("m01").innerText = ++this.arr[2];
            if (this.arr[2] == 9) {
              this.arr[2] = 0;
              this.$("m01").innerText = this.arr[2];
              this.$("m10").innerText = ++this.arr[1];
              if (this.arr[1] == 6) {
                this.arr[1] = 0;
                this.$("m10").innerText = this.arr[1];
                this.$("h").innerText = ++this.arr[0];
              }
            }
          }
        } else {
          this.$("s01").innerText = ++this.arr[4];
        }
      }, 1000);
    } else {
      clearInterval(this.stopwatchT);
      this.arr = [0, 0, 0, 0, 0];
      this.$("s01").innerText = 0;
      this.$("s10").innerText = 0;
      this.$("m01").innerText = 0;
      this.$("m10").innerText = 0;
      this.$("h").innerText = 0;
      this.state = true;
    }
  };
  
}

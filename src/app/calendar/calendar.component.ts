import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.calendar(true);
  }

   date = new Date();
 readableDate=new Date();
 originMonth=this.date.getMonth();
 QS(Q){return document.querySelector(Q)};
 prevWeek=this.date.getDay();
 uptodate=false;

 calendar(uptodate){
    const Months=["January","February","March","April","May","June","July","August","September","October","November","December"];
    const getLastDay= new Date(this.date.getFullYear(), this.date.getMonth()+1, 0);
    const lastDay= getLastDay.getDate();
    const getOriginDay=new Date(this.date.getFullYear(), this.date.getMonth(), 1);
    const originDay=getOriginDay.getDay();

    this.QS('#header p:first-child').innerText=Months[this.date.getMonth()];
    this.QS('#header p:last-child').innerText=this.date.toDateString();

    if(this.date.getMonth()==0){
        this.QS('.fa-angle-left').style=`opacity:.2;cursor:default;`
    }else if(this.date.getMonth()==11){
        this.QS('.fa-angle-right').style=`opacity:.2;cursor:default;`
    }

    for(let count=originDay;count>0;count--){
        this.QS('.days').innerHTML+=`<div style="cursor:default;"></div>`;
    }
    for(let count=1;count<=lastDay;count++){
        if(uptodate){
            this.QS('.days').innerHTML+=`<div ${(count==this.date.getDate()) ? "class='today'": "" }>${count}</div>`;
        }else{
            this.QS('.days').innerHTML+=`<div>${count}</div>`;
        }
    }
    this.QS('.week').children[this.prevWeek].classList.remove('today');
    if(uptodate){this.QS('.week').children[this.date.getDay()].classList.add('today');}
    this.prevWeek=this.date.getDay();

}


prevMonth(btn){
  var btn=btn.srcElement;
    this.uptodate=false;
    this.date.setMonth((this.originMonth==0)? (0):(--this.originMonth));
    if(this.originMonth==0){
        btn.style=`opacity:.2;cursor:default;`;
    }    
    if(this.readableDate.getMonth()==this.originMonth){
        this.uptodate=true;
    }
    this.QS('.fa-angle-right').style=`opacity:1;cursor:cursor;`;
    this.QS('.days').innerHTML='';
    this.calendar(this.uptodate);
}
nextMonth(btn){
  var btn=btn.srcElement;
    this.uptodate=false;
    this.date.setMonth((this.originMonth==11)? (11):(++this.originMonth));
    if(this.originMonth==0){
        btn.style=`opacity=.2;cursor:default;`;
    }
    if(this.readableDate.getMonth()==this.originMonth){
        this.uptodate=true;
    }
    this.QS('.fa-angle-left').style=`opacity:1;cursor:cursor;`;
    this.QS('.days').innerHTML='';
    this.calendar(this.uptodate);
}

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.scss']
})
export class ScoreComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  far=document.getElementsByClassName("far");
  fas=document.getElementsByClassName("fas");
  span:any=document.getElementsByClassName("span")!;
  state=true;
  num:any=0;

  hover(el:number){
      if(this.state){
          for(let i=0;i<=el;i++){
              this.span[i].children[0].setAttribute("style","opacity:0;");
              this.num=i+1;
          }
          
      }
  }
  out(el:number){
    if(this.state){
        for(let i=0;i<=el;i++){
            this.span[i].children[0].setAttribute("style","opacity:1;");
            this.num='';
        }
        
    }
  }
   score(el:number){
    if(this.state){
        for(let i=0;i<=el;i++){
            this.span[i].children[0].setAttribute("style","opacity:0;");
            this.num=i+1;
        }
        this.state=false;
        for(let i=0;i<this.span.length;i++){
            this.span[i].style.cursor="default";
        }
    }
    
  }
}

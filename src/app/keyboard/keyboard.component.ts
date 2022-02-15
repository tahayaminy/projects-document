import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-keyboard',
  templateUrl: './keyboard.component.html',
  styleUrls: ['./keyboard.component.scss']
})
export class KeyboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  $(el:string):any{ return document.getElementById(el)!}
  divs=document.getElementsByClassName('div') as HTMLCollectionOf<HTMLDivElement>;
  statekeys:boolean=true;
  num(N:string){
    this.$('txt').value+=N; 
  }
  showkeys(){
    if(this.statekeys){
        for(let div of this.divs){
            div.style.padding='5px';
            div.style.margin='15px';
            div.style.height='17.5px';
            
        }
        this.statekeys=false;
        this.$('txt').setAttribute('style','box-shadow:inset -1.5px 1.5px 4px #15171a, inset 1.5px -1.5px 4px #535d66');
    }
    else{
        for(let div of this.divs){
          div.style.padding='0';
            div.style.margin='0';
            div.style.height='0';
        }
        this.statekeys=true;
        this.$('txt').setAttribute('style','box-shadow:-1.5px 1.5px 4px #15171a,1.5px -1.5px 4px #535d66');
    }
}
check(){
    this.statekeys=false;
    this.showkeys();
}
times(){
    this.check();
    this.$('txt').value="";
}
}

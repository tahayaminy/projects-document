import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-text-checker',
  templateUrl: './text-checker.component.html',
  styleUrls: ['./text-checker.component.scss']
})
export class TextCheckerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  str:number=0;
  word:number=0;
  check(text:string):void{
    this.str=text.length;
    this.word=text.match(/(\w+)/g)!.length;
  }
}

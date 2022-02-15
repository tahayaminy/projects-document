import { Component, OnInit } from '@angular/core';
import { TESTTYPE } from '../test-interface';
import { TestService } from '../test.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
})
export class TestComponent implements OnInit {
  constructor(private testService: TestService) {}

  ngOnInit(): void {
    this.tests = this.testService.getTests();
  }
  $(el: string): any {
    return document.getElementById(el)!;
  }
  tests: TESTTYPE[] = [];
  answers:any=[];

  exam() {
    this.$('article').style = `
     pointer-events: all;
     opacity: 1;
     `;
    var radio: any;
    for (var i = 0; i < 3; i++) {
      for (radio of document.getElementsByName(`r${i}`)) {
        if (radio.checked) {
          this.answers.push(eval(radio.value));
        }
      }
    }
    var index=0;
    var truen=0;
    var falsen=0;
    for(let item of this.tests){
      if(item.correctans==this.answers[index]){truen++;}else{falsen++;}
      index++;
    }
    this.$('green').innerText=truen;
    this.$('red').innerText=falsen;
    this.$('all').innerText=this.tests.length;
  }
  cls() {
    this.$('article').style = `
    pointer-events: none;
    opacity: 0;
    `;
    this.answers=[];
  }
}

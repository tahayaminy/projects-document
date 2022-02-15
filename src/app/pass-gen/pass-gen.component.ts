import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pass-gen',
  templateUrl: './pass-gen.component.html',
  styleUrls: ['./pass-gen.component.scss']
})
export class PassGenComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  $(el:string):any{
    return document.getElementById(el)!;
  }
  number = "1234567890";
  letter = "abcdefghigklmnopqrstuvwxyz";
  caps = "ABCDEFGHIGKLMNOPQRSTUVWXYZ";
  symbol = `!"#$%&'()*+,-./:;<=>?@[]^_\`{|}~ `;
  
  i:number=0;
  
  createPass() {
    var strpass = "";
    let radio:any;
    for (radio of document.getElementsByName("char")){
      if (radio.checked) {
        var checked = 0;
        var length;
        if (radio.value == '8') {
          if (this.$("number").checked) {
            checked++;
          }
          if (this.$("letter").checked) {
            checked++;
          }
          if (this.$("caps").checked) {
            checked++;
          }
          if (this.$("symbol").checked) {
            checked++;
          }
          length = Math.ceil(8 / checked);
  
          for (let j = 1; j <= length; j++) {
            if (this.$("number").checked) {
              this.i = Math.round(Math.random() * (9 - 0)) + 0;
              strpass += this.number[this.i];
            }
            if (this.$("letter").checked) {
              this.i = Math.round(Math.random() * (25 - 0)) + 0;
              strpass += this.letter[this.i];
            }
            if (this.$("caps").checked) {
              this.i = Math.round(Math.random() * (25 - 0)) + 0;
              strpass += this.caps[this.i];
            }
            if (this.$("symbol").checked) {
              this.i = Math.round(Math.random() * (31 - 0)) + 0;
              strpass += this.symbol[this.i];
            }
          }
        } 
        else if (radio.value == 12) {
          if (this.$("number").checked) {
            checked++;
          }
          if (this.$("letter").checked) {
            checked++;
          }
          if (this.$("caps").checked) {
            checked++;
          }
          if (this.$("symbol").checked) {
            checked++;
          }
          length = Math.ceil(12 / checked);
          for (let j = 1; j <= length; j++) {
            if (this.$("number").checked) {
              this.i = Math.round(Math.random() * (9 - 0)) + 0;
              strpass += this.number[this.i];
            }
            if (this.$("letter").checked) {
              this.i = Math.round(Math.random() * (25 - 0)) + 0;
              strpass += this.letter[this.i];
            }
            if (this.$("caps").checked) {
              this.i = Math.round(Math.random() * (25 - 0)) + 0;
              strpass += this.caps[this.i];
            }
            if (this.$("symbol").checked) {
              this.i = Math.round(Math.random() * (31 - 0)) + 0;
              strpass += this.symbol[this.i];
            }
          }
        }
      }
    }
    this.$("output").value = strpass;
  }
  copyPass() {
    /* Get the text field */
    var copyText:any = document.getElementById("output")!;
  
    /* Select the text field */
    copyText.select();
    copyText.setSelectionRange(0, 99999); /* For mobile devices */
  
    /* Copy the text inside the text field */
    navigator.clipboard.writeText(copyText.value);
  
    /* Alert the copied text */
    this.$("output").value = "PassWord copied!";
  }
  
}

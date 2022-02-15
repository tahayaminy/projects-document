import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  $(el:string){
    return document.getElementById(el)!;
  }
  
  showchat() {
    this.$("chatbox").setAttribute('style',`
      width:300px;
      height:400px;
      opacity:1;
      overflow:visible;`);
  }
  hiddenchat() {
    this.$("chatbox").setAttribute('style',`
      width:0px;
      height:0px;
      opacity:0;
      overflow:hidden;`);
  }
  sendmsg() {
    let now = new Date();
    let msg=this.$("msg") as HTMLTextAreaElement;
    let me = `
      <p class="me">${msg.value}
          <br><br>
          <span>${now.getHours()}:${now.getMinutes()}</span>
      </p>`;
    this.$("main").insertAdjacentHTML("beforeend", me);
    msg.value = "";
    this.sendans();
    this.$('main').scrollTop=this.$('main').scrollHeight;
  }
  sendans() {
    this.$("typing").setAttribute('style',`
      opacity: 1;
      width: 40px;
      overflow: visible;
      `);
    setTimeout(() => {
      let now = new Date();
      let ans = `
        <p class="you">Hello World!
            <br><br>
            <span>${now.getHours()}:${now.getMinutes()}</span>
        </p>`;
      this.$("main").insertAdjacentHTML("beforeend", ans);
      this.$("typing").setAttribute('style',`
      opacity: 0;
      width: 0;
      overflow: hidden;
      `);
      this.$('main').scrollTop=this.$('main').scrollHeight;
    }, 2000);
  }
  
}

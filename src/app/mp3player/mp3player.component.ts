import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-mp3player',
  templateUrl: './mp3player.component.html',
  styleUrls: ['./mp3player.component.scss'],
})
export class Mp3playerComponent implements OnInit {
  constructor(private elem:ElementRef) {}

  ngOnInit(): void {}
  check(dis: HTMLInputElement, wh?: string) {
    if ((dis.value != '')) {
      if (wh == 'p') {
        var clss =
          dis.previousElementSibling!.previousElementSibling!.classList;

        clss.remove('d-none');
        clss.add('success');
      } else {
        var clss = dis.nextElementSibling!.classList;
        clss.remove('d-none');
        clss.add('success');
      }
    } else {
      if (wh == 'p') {
        var clss =
          dis.previousElementSibling!.previousElementSibling!.classList;
        clss.remove('success');
        clss.add('d-none');
      } else {
        var clss = dis.nextElementSibling!.classList;
        clss.remove('success');
        clss.add('d-none');
      }
    }
  }

  myWindow?:any;

  openWin() {
    this.myWindow= window.open("", "", "width=500, height=100");
    this.resizeWin();
  }

  @ViewChild('cover') cover?:ElementRef;
  @ViewChild('music') music?:ElementRef;

  resizeWin() {
    this.myWindow.resizeTo(370, 700);
    this.myWindow.focus();

    var [coverarr] = this.cover!.nativeElement.files;
    var coversrc = URL.createObjectURL(coverarr);

    var [musicarr] = this.music!.nativeElement.files;
    var musicsrc = URL.createObjectURL(musicarr);

    var text = this.elem.nativeElement.getElementsByClassName("text");

    var doc =
      ` <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>MP3 Player</title>
      <link rel="stylesheet" href="https://parswebdesigners.github.io/icon/css/all.min.css"/>
      <link rel="preload" as="font" type="font/woff" crossorigin href="https://parswebdesigners.github.io/font/iransansxv.woff" />
      <link rel="preload" as="font" type="font/woff2" crossorigin href="https://parswebdesigners.github.io/font/iransansxv.woff2" />
      <link rel="preload" as="font" type="font/ttf" crossorigin href="https://parswebdesigners.github.io/font/hack.ttf" />
      <link rel="preload" as="font" type="font/woff" crossorigin href="https://parswebdesigners.github.io/font/staticfonts/iransansx-bold.woff" />
      <link rel="preload" as="font" type="font/woff" crossorigin href="https://parswebdesigners.github.io/font/staticfonts/iransansx-regular.woff" />
      <link rel="stylesheet" href="https://parswebdesigners.github.io/font/font.css"/>
      <style>
      * {
      padding: 0;
      margin: 0;
    }
    html,body{
        height: 100%;
    }
    #cont{
      width: 100%;
      height: 100%;
      position: relative;
      background-color: #1d3557;
    }
    p {
      border-bottom: 3px solid #e63946;
      font-size: 160%;
      padding: 0 !important;
      display: inline-block;
      border-radius: 5px;
      margin: 5px;
      color:#f1faee;
    }
    p > i {
      margin-left: 10px;
    }
    #ctrl > i {
      color: #457b9d;
      font-size: 400%;
      margin: 5%;
      cursor: pointer;
    }
    #wave {
      position: relative;
    }
    #wave > div {
      height: 100px;
      width: 95%;
      margin: 5% auto 5% auto;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .bar {
      background-color: #f1faee;
      height: 20px;
      width: 3px;
      display: inline-block;
      border-radius: 50px;
      border: 1px solid #a8dadc;
      margin: 3px;
      animation: 0.5s linear infinite;
      animation-direction: alternate;
      box-shadow: 1px 1px 5px #a8dadc, -1px -1px 5px #a8dadc;
    }
    @keyframes animate {
      0% {
        height: 20px;
      }
      100% {
        height: 80px;
      }
    }
    .bar:nth-child(1) {
      animation-delay: 0.2s;
    }
    .bar:nth-child(2) {
      animation-delay: 0.4s;
    }
    .bar:nth-child(3) {
      animation-delay: 0.6s;
    }
    .bar:nth-child(4) {
      animation-delay: 0.8s;
    }
    .bar:nth-child(5) {
      animation-delay: 0.6s;
    }
    .bar:nth-child(6) {
      animation-delay: 0.4s;
    }
    .bar:nth-child(7) {
      animation-delay: 0.2s;
    }
    .bar:nth-child(8) {
      animation-delay: 0.2s;
    }
    .bar:nth-child(9) {
      animation-delay: 0.4s;
    }
    .bar:nth-child(10) {
      animation-delay: 0.6s;
    }
    .bar:nth-child(11) {
      animation-delay: 0.8s;
    }
    .bar:nth-child(12) {
      animation-delay: 0.6s;
    }
    .bar:nth-child(13) {
      animation-delay: 0.4s;
    }
    .bar:nth-child(14) {
      animation-delay: 0.2s;
    }
    .bar:nth-child(15) {
      animation-delay: 0.2s;
    }
    .bar:nth-child(16) {
      animation-delay: 0.4s;
    }
    .bar:nth-child(17) {
      animation-delay: 0.6s;
    }
    .bar:nth-child(18) {
      animation-delay: 0.8s;
    }
    .bar:nth-child(19) {
      animation-delay: 0.6s;
    }
    .bar:nth-child(20) {
      animation-delay: 0.4s;
    }
    .bar:nth-child(21) {
      animation-delay: 0.2s;
    }
    #overlay {
      display: inline-block;
      width: 235px;
      height: 20px;
      background-color: rgba(168, 218, 220, 0.15);
      margin: 0 !important;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translateX(-50%) translateY(-50%);
      border-radius: 2px;
      direction: ltr;
      -webkit-appearance: none; /* Override default CSS styles */
      appearance: none;
      outline: none; /* Remove outline */
      opacity: 0.7; /* Set transparency (for mouse-over effects on hover) */
      -webkit-transition: 0.2s; /* 0.2 seconds transition on hover */
      transition: opacity 0.2s;
      cursor: pointer;
    }
    #overlay:hover {
      opacity: 1; /* Fully shown on mouse-over */
    }
    #overlay::-webkit-slider-thumb {
      -webkit-appearance: none; /* Override default look */
      appearance: none;
      width: 30px; /* Set a specific slider handle width */
      height: 30px; /* Slider handle height */
      background: url("../../assets/cursor.svg"); /* Green background */
      cursor: pointer; /* Cursor on hover */
      border: 0;
    }
  
    #overlay::-moz-range-thumb {
      width: 30px; /* Set a specific slider handle width */
      height: 30px; /* Slider handle height */
      background: url("../../assets/cursor.svg"); /* Green background */
      cursor: pointer; /* Cursor on hover */
      border: 0;
    }
    #overlay > i {
      color: #1d3557;
      position: fixed;
      left: 0;
      font-size: 25px;
      animation: tst 1s linear;
      transition: 0.9s;
    }
    @keyframes tst {
      50% {
        left: 50%;
      }
      100% {
        left: calc(100% - 25px);
      }
    }
      </style>
    </head>
    <body dir="rtl">

      <section id="cont">
        <div
          style="
            text-align: center;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%,-50%) scale(1.5);
            filter: blur(5px);
            -webkit-filter: blur(5px);
          "
        >
          <img src="` +
      coversrc +
      `" style="width: 90%;border-radius:50%;" />
        </div>
        <div
          style="
            background-color: rgba(29, 53, 87, 0.5);
            width: 100%;
            height: 100%;
            position: absolute;
          "
        >
          <div style="text-align: center; margin-top: 15%">
            <img src="` +
      coversrc +
      `" style="width: 50%;border-radius:50%;" /><br />
            <p><i class="far fa-user"></i>` +
      text[0].value +
      `</p>
            <br />
            <p><i class="fas fa-compact-disc"></i>` +
      text[1].value +
      `</p>
            <div id="wave">
              <div>
                <div class="bar"></div>
                <div class="bar"></div>
                <div class="bar"></div>
                <div class="bar"></div>
                <div class="bar"></div>
                <div class="bar"></div>
                <div class="bar"></div>
                <div class="bar"></div>
                <div class="bar"></div>
                <div class="bar"></div>
                <div class="bar"></div>
                <div class="bar"></div>
                <div class="bar"></div>
                <div class="bar"></div>
                <div class="bar"></div>
                <div class="bar"></div>
                <div class="bar"></div>
                <div class="bar"></div>
                <div class="bar"></div>
                <div class="bar"></div>
                <div class="bar"></div>
              </div>
              <input
                id="overlay"
                type="range"
                value="0"
                onchange="changeProgress()"
              />
              <section
                style="
                  width: 92%;
                  position: absolute;
                  top: 50%;
                  left: 50%;
                  transform: translateX(-50%) translateY(-50%);
                  pointer-events: none;
                "
              >
                <span id="currentTime" style="float: left">0:00</span>
                <span id="durationTime" style="float: right">0:00</span>
                <span style="clear: both"></span>
              </section>
            </div>
            <div id="ctrl">
              <i onclick="play()" class="fas fa-play"></i>
              <i
                id="pause"
                onclick="paused()"
                style="display: none"
                class="fas fa-pause"
              ></i>
              <i onclick="stop()" class="fas fa-stop"></i>
            </div>
          </div>
        </div>
      </section>
      <audio id="song" src=""></audio>
    </body>

    <script>
    var song = document.getElementById("song");
    var timing;
    var pause = document.getElementById("pause");
    var bar = document.getElementsByClassName("bar");

    function play() {
      pause.style.display = "inline";
      pause.previousElementSibling.style.display = "none";
      song.play();
      timing = setInterval(updateProgressValue, 500);
      for (var i = 0; i < bar.length; i++) {
        bar[i].style.animationName = "animate";
      }
    }
    function paused() {
      pause.style.display = "none";
      pause.previousElementSibling.style.display = "inline";
      song.pause();
      clearInterval(timing);
      for (var i = 0; i < bar.length; i++) {
        bar[i].style.animationName = "none";
      }
    }

    var progressBar = document.getElementById("overlay");

    function updateProgressValue() {
      progressBar.max = Math.floor(song.duration);
      progressBar.value = Math.floor(song.currentTime);

      document.querySelector("#currentTime").innerHTML = count(
        progressBar.value
      );

      document.querySelector("#durationTime").innerHTML = count(
        progressBar.max
      );

      if (progressBar.max == progressBar.value) {
        pause.style.display = "none";
        pause.previousElementSibling.style.display = "inline";
        progressBar.value = 0;
        document.querySelector("#currentTime").innerHTML = count(
        progressBar.value
        );
        for (var i = 0; i < bar.length; i++) {
          bar[i].style.animationName = "none";
        }
      }
    }
    function changeProgress() {
      song.currentTime = progressBar.value;
    }
    function stop() {
      pause.style.display = "none";
      pause.previousElementSibling.style.display = "inline";
      progressBar.value = 0;
      song.pause();
      song.currentTime = 0;
      document.querySelector("#currentTime").innerHTML = count(
        progressBar.value
      );
      for (var i = 0; i < bar.length; i++) {
        bar[i].style.animationName = "none";
      }
    }

    function count(time) {
      var min = 0;
      var sec = 0;
      if (time < 60) {
        sec = "0:" + time;
        return sec;
      } else {
        var tix = 0;
        var tiy = 0;

        tix = time;

        time = Math.floor(time / 60);
        min = time;

        tiy = min * 60;
        sec = tix - tiy;
        var FT;
        FT = min + ":" + sec;
        return FT;
      }
    }
    <\/script>
      <script>song.src="` +
      musicsrc +
      `";<\/script>
  </html>
  `;
    this.myWindow!.document.write(doc);
  }
}

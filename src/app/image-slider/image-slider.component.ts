import { stagger } from '@angular/animations';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.scss'],
})
export class ImageSliderComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  bgSrc = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg'];
  @ViewChild('stage') viewStage:any;
  btns: any = document.getElementsByName('radio');
  i = 1;

  show(prm: any, el: any) {
    var next;
    var prev;
    var stage=this.viewStage.nativeElement;
    if (prm == 0) {
      prev = this.i - 2 < 0 ? 5 + (this.i - 2) : this.i - 2;
      next = this.i;
      this.i = this.i - 1 < 0 ? 5 + (this.i - 1) : this.i - 1;
      console.log(stage);
      stage.style.backgroundImage =`url('../../assets/${this.bgSrc[this.i]}'`;
      this.btns[this.i].checked = true;

      var prevEl: any = stage.previousElementSibling!;
      prevEl.style.backgroundImage =`url('../../assets/${this.bgSrc[prev]}'`;
      var nextEl: any = stage.nextElementSibling!;
      nextEl.style.backgroundImage =`url('../../assets/${this.bgSrc[next]}'`;
    } else if (prm == 1) {
      prev = this.i;
      next = this.i + 2 >= 5 ? Math.abs(5 - (this.i + 2)) : this.i + 2;
      this.i = this.i + 1 == 5 ? 0 : this.i + 1;
      stage.style.backgroundImage =`url('../../assets/${this.bgSrc[this.i]}'`;
      this.btns[this.i].checked = true;
      var prevEl: any = stage.previousElementSibling!;
      prevEl.style.backgroundImage =`url('../../assets/${this.bgSrc[prev]}'`;
      var nextEl: any = stage.nextElementSibling!;
      nextEl.style.backgroundImage =`url('../../assets/${this.bgSrc[next]}'`;
    }
  }
  pos(prm: any) {
    var next;
    var prev;
    next = prm + 1 > 4 ? 0 : prm + 1;
    prev = prm - 1 < 0 ? 4 : prm - 1;
    var stage=this.viewStage.nativeElement;
    stage.style.backgroundImage =`url('../../assets/${this.bgSrc[prm]}'`;
    this.i = prm;
    var prevEl: any = stage.previousElementSibling!;
    prevEl.style.backgroundImage =`url('../../assets/${this.bgSrc[prev]}'`;
    var nextEl: any = stage.nextElementSibling!;
    nextEl.style.backgroundImage =`url('../../assets/${this.bgSrc[next]}'`;
  }
}

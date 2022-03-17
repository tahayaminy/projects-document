import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lenz',
  templateUrl: './lenz.component.html',
  styleUrls: ['./lenz.component.scss']
})
export class LenzComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.imageZoom();
  }


   $(el){return document.getElementById(el);}
 imageZoom(){
    var img=this.$('img')! as HTMLImageElement;
    var result=this.$('result')!;

    var lenz=this.$('lenz')!;

    

    var cx=result.offsetWidth/lenz.offsetWidth;
    var cy=result.offsetHeight/lenz.offsetHeight;
    console.log(img.width);
    console.log(img.height);
    result.style.backgroundImage=`url(${img.src})`;
    result.style.backgroundSize=`${img.width*cx}px ${img.height*cy}px`;

    lenz.addEventListener("mousemove",moveLenz);
    img.addEventListener("mousemove",moveLenz);
    lenz.addEventListener("touchmove", moveLenz);
    img.addEventListener("touchmove", moveLenz);

    function moveLenz(event){
        event.preventDefault();
        var pos=cursorPos(event);
        result.style.opacity='1';
        result.style.top=(event.clientY) +'px';
        result.style.left=(event.clientX)  +'px';
        var x=pos.x - (lenz.offsetWidth/2);
        var y=pos.y - (lenz.offsetHeight/2);

        if (x > img.width - lenz.offsetWidth) {x = img.width - lenz.offsetWidth;result.style.opacity='0';}
        if (x < 0) {x = 0;result.style.opacity='0';}
        if (y > img.height - lenz.offsetHeight) {y = img.height - lenz.offsetHeight;result.style.opacity='0';}
        if (y < 0) {y = 0;result.style.opacity='0';}
        lenz.style.left = x + "px";
        lenz.style.top = y + "px";
        result.style.backgroundPosition = `-${x * cx}px -${y * cy}px`;
    }

    function cursorPos(e){
        e= e || window.event;
        var a=img.getBoundingClientRect();
        
        var x=(e.pageX-a.left) - window.pageXOffset;
        var y=(e.pageY-a.top) - window.pageYOffset;
        return {x:x,y:y};
    }
}

}

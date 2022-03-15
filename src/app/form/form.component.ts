import {
  asNativeElements,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  @ViewChild('numbervalue') numberValue!: ElementRef;
  @ViewChild('password') password!: HTMLInputElement;
  @ViewChild('eye') eye!: ElementRef;
  p = document.getElementsByClassName('p');
  passif = document.getElementsByClassName('passcheck');
  Lanime = document.getElementsByClassName('Lanime');
  down() {
    if (eval(this.numberValue.nativeElement.value) - 1 >= 1) {
      this.numberValue.nativeElement.value--;
      this.numberValue.nativeElement.classList.remove('outOfRange');
    } else {
      this.numberValue.nativeElement.classList.add('outOfRange');
    }
  }
  up() {
    if (eval(this.numberValue.nativeElement.value) + 1 <= 5) {
      this.numberValue.nativeElement.value++;
      this.numberValue.nativeElement.classList.remove('outOfRange');
    } else {
      this.numberValue.nativeElement.classList.add('outOfRange');
    }
  }
  label(el, child) {
    if (el.value.length > 0) {
      this.Lanime[child].classList.add('A0');
      this.Lanime[child].classList.remove('A1');
    } else {
      this.Lanime[child].classList.remove('A0');
      this.Lanime[child].classList.add('A1');
    }
  }
  namecheck(el, child) {
    var el=el.srcElement;
    var element = this.p[child] as HTMLElement;
    if (!el.checkValidity()) {
      element.style.display = 'block';
      el.parentElement.style = `margin-top:0px;margin-bottom:10px;`;
    } else {
      element.style.display = 'none';
      el.parentElement.style = `margin-top:40px;margin-bottom:40px;`;
    }
    this.label(el, child);
  }
  searchbox(el,child){
      this.label(el.srcElement,child);
  }
  emailcheck(el,child){
    var element= this.p[child] as HTMLElement;
      if(!el.checkValidity() && el.value.search(/\./g)== -1){
          element.style.display='block';
          el.parentElement.style=`margin-top:0px;margin-bottom:10px;`;
      }else{
          element.style.display='none';
          el.parentElement.style=`margin-top:40px;margin-bottom:40px;`;
      }
      this.label(el,child);
  }
  passcheck(el,child){
      let number=/[0-9]/g;
      let low=/[a-z]/g;
      let up=/[A-Z]/g;
      let symbol=/[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;
      let WS=/\s/g;

      var passif=this.passif as HTMLCollectionOf<HTMLElement>;
      if(el.value.length >=6){
          passif[0].style.display="none";
      }else{
          passif[0].style.display="block";
      }

      if(el.value.match(number)){
          passif[1].style.display="none";
      }else{
          passif[1].style.display="block";
      }

      if(el.value.match(low)){
          passif[3].style.display="none";
      }else{
          passif[3].style.display="block";
      }

      if(el.value.match(up)){
          passif[2].style.display="none";
      }else{
          passif[2].style.display="block";
      }

      if(el.value.match(symbol) || el.value.match(WS)){
          passif[4].style.display="none";
      }else{
          passif[4].style.display="block";
      }
      this.label(el,child);
  }
  showPass(){
    var password:any=document.getElementById('password')!;
      if(password.type ==="password"){
          password.type="text";
          this.eye.nativeElement.classList.remove('fa-eye-slash');
          this.eye.nativeElement.classList.add('fa-eye');
      }else{
          password.type="password";
          this.eye.nativeElement.classList.add('fa-eye-slash');
          this.eye.nativeElement.classList.remove('fa-eye');
      }
  }

  selectId=0;
  select(event,id,group){
    var target =event.srcElement;
      var options = group ? target?.parentElement?.parentElement : target?.parentElement;
      var optionList=options.querySelectorAll('span');
      var selectValue:HTMLElement=document.querySelector('.selectedValue')!;
      
      selectValue.innerText=optionList[id].innerText;
      optionList[this.selectId].classList.remove('selected');
      optionList[id].classList.add('selected');
      this.selectId=id;
      options!.parentElement!.blur();
  }
}

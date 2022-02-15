import { Component, OnInit } from '@angular/core';
import { ContactsService } from '../contacts.service';
import { CONTACTSTYPE } from '../contacts-interface';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

  constructor(private contactService:ContactsService) { }

  ngOnInit(): void {
    this.getContact();
  }
  contacts:CONTACTSTYPE[]=[];
  getContact():void{
    this.contacts=this.contactService.getContacts();
  }
  $(el:string):any{
    return document.getElementById(el);
  }
  del(el:any) {
    this.$(el).parentElement.parentElement.remove();
  }
  
  cls() {
    this.$("name").value = "";
    this.$("numb").value = "";
    this.$("glass").style.display = "none";
  }
  add() {
    if (this.$("name").value.length >= 3 && this.$("numb").value.length >= 8) {
    
    this.contactService.add({id:this.contacts.length,name:this.$("name").value,phone:this.$("numb").value})
      this.cls();
    }else{
      alert('نام و شماره معتبر وارد کن!');
    }
  }
}

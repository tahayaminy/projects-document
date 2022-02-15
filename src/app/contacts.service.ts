import { Injectable } from '@angular/core';
import { CONTACTSTYPE } from './contacts-interface';
import { contacts } from './mock-contacts';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  constructor() { }
  getContacts():CONTACTSTYPE[]{
    return contacts;
  }
  add(item:any){
    contacts.push(item);
  }
}

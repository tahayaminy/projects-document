import { Injectable } from '@angular/core';
import { tolist } from './mock-tolist';
import { List } from "./tolist-interface";
@Injectable({
  providedIn: 'root'
})
export class TolistService {

  constructor() { }
  getListItems():List[]{
    return tolist;
  }
  addItem(item:any):void{
    tolist.push(item);
  }
}

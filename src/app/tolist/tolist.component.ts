import { Component, OnInit } from '@angular/core';
import { TolistService } from '../tolist.service';
import { List } from '../tolist-interface';

@Component({
  selector: 'app-tolist',
  templateUrl: './tolist.component.html',
  styleUrls: ['./tolist.component.scss']
})
export class TolistComponent implements OnInit {

  constructor(private tolistService:TolistService) { }

  ngOnInit(): void {
    this.getListItems();
  }
  tolists: List[]=[];
  getListItems():void{
    this.tolists=this.tolistService.getListItems();
  }
  $(el:string):any{
    return document.getElementById(el)!;
  }
  
  add() {
    if (this.$("work").value.length >= 3) {
      let work = this.$("work").value;
      
      this.tolistService.addItem({id:this.tolists.length,todo:work});
      
      this.$("work").value=''; 
    }
  }
  end(el:any){
      var el:any=document.getElementById(el);
      el.parentElement.remove();
  }
}

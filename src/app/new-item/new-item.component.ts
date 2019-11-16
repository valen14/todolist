import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { Route } from '@angular/compiler/src/core';
import { DataService} from '../data.service';
import { Item } from '../model/Item';


@Component({
  selector: 'app-new-item',
  templateUrl: './new-item.component.html',
  styleUrls: ['./new-item.component.css']
})

export class NewItemComponent implements OnInit {
	
 
private route: ActivatedRoute;
newItemForm: FormGroup;
  item:Item
  
  constructor(private router: Router,private itemService:DataService) { 

      this.item= new Item("");
  

    this.newItemForm = new FormGroup({
      itemName: new FormControl(this.item.name)
    }) 
  }
  
  ngOnInit() {
    
  }
  
  onSubmit(){
  	var item=new Item(this.newItemForm.get("itemName").value);
    this.itemService.addItem(item)   
    this.router.navigateByUrl("/")

}
}


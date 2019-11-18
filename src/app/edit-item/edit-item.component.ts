import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { Route } from '@angular/compiler/src/core';
import { Item } from '../model/Item';
import { DataService } from '../data.service';


@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.css']
})

export class EditItemComponent implements OnInit {



idx : string
editItemForm: FormGroup
item:Item
  
  
  constructor(private route: ActivatedRoute ,private router: Router,private itemService:DataService) { 
  
      this.idx=this.route.snapshot.paramMap.get("idx")
    this.item=this.itemService.getItemList()[parseInt(this.idx)];


    this.editItemForm = new FormGroup({
      itemName: new FormControl(this.item.name)
    }); 
  }
  
  ngOnInit() {
    
  }
  
  onSubmit(){
    var item=new Item(this.editItemForm.get("itemName").value)
    this.itemService.editItem(item,parseInt(this.idx))
    this.router.navigateByUrl("/")
  }

}


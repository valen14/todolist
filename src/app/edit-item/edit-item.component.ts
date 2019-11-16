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



idx : String
editItemForm: FormGroup
item:Item
  
  
  constructor(private route: ActivatedRoute ,private router: Router,private itemService:DataService) { 
  
      this.idx=this.route.snapshot.paramMap.get("idx")
    this.item=this.itemService.getItemList()[this.idx];


    this.editItemForm = new FormGroup({
      itemName: new FormControl(this.item.name)
    }); 
  }
  
  ngOnInit() {
    
  }
  
  onSubmit(){
    var item=new Item(this.editItemForm.get("itemName").value)
    this.itemService.editItem(item,this.idx)
    this.router.navigateByUrl("/")
  }

}


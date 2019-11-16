import { Component, OnInit } from '@angular/core';
import { Item } from '../model/Item';
import { DataService } from '../data.service';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})

export class TodolistComponent implements OnInit {

items : Item[];



  constructor(private itemService:DataService) { 

/*this.items = [
new Item("Buy pendrives"),
new Item("Buy backpacks"),
new Item("Rent projectors")
]; */


  }

  ngOnInit() {

/*  	this.itemService.addItem(new Item("Buy pendrives"))
this.itemService.addItem(new Item("Buy backpacks"))
this.itemService.addItem(new Item("Rent projectors"))
this.items()
*/
	this.items=this.itemService.getItemList();
  }

/*  onRemove(anItem){
this.items = this.items.filter(item => item !== anItem);
} */

getItems(){
 //return this.itemService.getItemList()
 this.items=this.itemService.getItemList();
 }

 onRemove(anItem){
 this.itemService.deleteItem(anItem)
 this.items=this.itemService.getItemList();
 } 



}

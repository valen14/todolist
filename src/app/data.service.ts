import { Injectable } from '@angular/core';
import { Item } from './model/Item';

@Injectable({
  providedIn: 'root'
})

export class DataService {

  constructor() { 

this.items=[new Item("item de lista")]
//this.addItem(new Item("item de lista"));

  }

 items:Item[];

 getItemList(){
 return this.items
 }
 addItem(item:Item){
  this.items.push(item)
 }
 editItem(item:Item, id:Integer){
 	this.items[id]=item;
 }
 deleteItem(item:Item){
 this.items=this.items.filter(i=>item!==i)
 }
 }


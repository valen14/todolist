import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodolistComponent } from './todolist/todolist.component';
import { NewItemComponent } from './new-item/new-item.component';
import { EditItemComponent } from './edit-item/edit-item.component';


const routes: Routes = [

 { path: '', redirectTo: '/home', pathMatch: 'full' },
 { path: 'home', component: TodolistComponent },
 { path: 'new-item', component: NewItemComponent },
 {path: 'edit-item/:idx', component: EditItemComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

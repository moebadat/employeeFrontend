import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AddComponent } from './components/add/add.component';
import { UpdateComponent } from './components/update/update.component';
import { ViewComponent } from './components/view/view.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  {path : '', component : HomeComponent},
  {path : 'add', component : AddComponent},
  {path : 'update', component : UpdateComponent},
  {path : 'view', component : ViewComponent}];


@NgModule({
  imports: [RouterModule.forRoot(routes),BrowserModule, HttpClientModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }

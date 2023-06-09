import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './main-component/about/about.component';
import { BlogComponent } from './main-component/Blog/blog/blog.component';
import { ContactComponent } from './main-component/contact/contact.component';
import { HomeComponent } from './main-component/home/home.component';
import { ProductComponent } from './main-component/product/product.component';
import { ViewProductComponent } from './main-component/view-product/view-product.component';
import { WildCartComponent } from './main-component/wild-cart/wild-cart.component';
import { MainModuleComponent } from './main-module.component';

const routes: Routes = [
  { path: '', component: MainModuleComponent ,children:[
    {
    path:"",
    component:HomeComponent
  },
   { path:"home",
    component:HomeComponent
  },
  {
    path:"about",
    component:AboutComponent
  },
  {
    path:"product",
    component:ProductComponent
  },
  {
    path:"View-Product/:Id",
    component:ViewProductComponent
  },
  {
    path:"contact",
    component:ContactComponent
  },
  {
    path:"cart",
    component:WildCartComponent
  },
  {
    path:"blog",
    component:BlogComponent
  },

  ] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainModuleRoutingModule { }

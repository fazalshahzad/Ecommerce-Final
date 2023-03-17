import { Component, OnInit } from '@angular/core';
import { LocalstorageService } from './../../../shared-service/saveDataLocalStorage/localstorage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  cart: any=[];

  constructor(private readonly loacalStorageData: LocalstorageService) { }

  ngOnInit(): void {


  }


  public viewCart(){
    this.getCart()
  }


  public getCart(){
    this.cart = this.loacalStorageData.getDataToLocalStorage()
    console.log(this.cart);

  }

}

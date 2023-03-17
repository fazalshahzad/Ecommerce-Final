import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductInterface } from 'src/app/shared-service/productInterface/product';



@Component({
  selector: 'app-wild-cart',
  templateUrl: './wild-cart.component.html',
  styleUrls: ['./wild-cart.component.css']
})
export class WildCartComponent implements OnInit {

  public imageIndex = "ProductImageUrl"
  public url = 'http://localhost:8686/'
  public getProductsId: any;
  public getAllDataWithOwnId: object | ProductInterface | any = {}
  public getAllDatafromProductService: any
  public selectedSizes: any = [];
  public totalQuantity: Number | any;
  public selectedQuantity: Number | any = 0;
  public offCanvasRight = '';
  public cart:any=[]

  constructor(private ActivatedRoute: ActivatedRoute,

  ) { }

  ngOnInit(): void {

  }

}

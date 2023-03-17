import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartInterface } from 'src/app/shared-service/CartInterface/cart-interface';
import { CartService } from 'src/app/shared-service/CartSerice/cart.service';
import { ToastrService } from 'ngx-toastr';
import { LocalstorageService } from 'src/app/shared-service/saveDataLocalStorage/localstorage.service';



@Component({
  selector: 'app-wild-cart',
  templateUrl: './wild-cart.component.html',
  styleUrls: ['./wild-cart.component.css']
})
export class WildCartComponent implements OnInit {

  public imageIndex = "ProductImageUrl"
  public url = 'http://localhost:8686/'
  public getProductsId: any;
  public getAllDataWithOwnId: object | CartInterface | any = {}
  public getAllDatafromCartService: any
  public selectedSizes: any = [];
  public totalQuantity: Number | any;
  public selectedQuantity: Number | any = 0;
  public offCanvasRight = '';
  public cart:any=[]

  Url = 'http://localhost:8686/'


  constructor(private ActivatedRoute: ActivatedRoute,
    private readonly getAllProductFrombackend: CartService,
    private readonly Router: Router,
    private readonly toaster: ToastrService,
    private readonly loacalStorageData: LocalstorageService

  ) { }

  ngOnInit(): void {


  }

}

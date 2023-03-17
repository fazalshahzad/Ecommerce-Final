import { LocalstorageService } from './../../../shared-service/saveDataLocalStorage/localstorage.service';
import { ProductInterface } from './../../../shared-service/productInterface/product';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductApiService } from 'src/app/shared-service/product-api/product-api.service';
import { ToastrService } from 'ngx-toastr';



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
    private readonly getAllProductFrombackend: ProductApiService,
    private readonly Router: Router,
    private readonly toaster: ToastrService,
    private readonly loacalStorageData: LocalstorageService
  ) { }

  ngOnInit(): void {
    this.callingMyActivatedRoute()
    this.getProductService()
    // this.getAllProduct()
  }

  public callingMyActivatedRoute() {
    this.getProductsId = this.ActivatedRoute.snapshot.params['Id']
    console.log(this.getProductsId);
  }

  public getProductService() {
    this.getAllProductFrombackend.getProductWithId(this.getProductsId).subscribe((response: any) => {
      this.getAllDataWithOwnId = response.Result
      this.totalQuantity = this.getAllDataWithOwnId.quantity
    })
  }
  // public getAllProduct() {
  //   this.getAllProductFrombackend.getProduct().subscribe((response: any) => {
  //     this.getAllDatafromProductService = response.Result
  //   })
  // }

  public reDirectSingleProductPage(_id: any) {
    this.Router.navigate(['View-Product', _id]);
  }

  public getSizes(event: any) {
    if (event.target.checked) {
      this.selectedSizes.push(event.target.value);
    }
    else {
      this.selectedSizes = this.selectedSizes.filter((value: any) => value != event.target.value);
    }
    console.log(this.selectedSizes);


  }

  public decreaseQuantity() {
    // if(this.selectedQuantity > 0){  1st-step
    //     this.selectedQuantity --
    // }
    if (this.selectedQuantity > 0) {
      let getDataFromLocalStorage = this.loacalStorageData.getDataToLocalStorage()
      if (getDataFromLocalStorage !== null) {
        getDataFromLocalStorage.selectedQuantity--
        this.loacalStorageData.saveDataToLocalStorage(getDataFromLocalStorage)
      }
      this.selectedQuantity--
    }

  }
  public increaseQuantity() {
    if (this.selectedQuantity < this.totalQuantity) {
      this.selectedQuantity++
    }
  }

  public deleteCanvasProduct(id:any){
   let cartFromLocalStorage = this.loacalStorageData.getDataToLocalStorage();
   let updatedCart = cartFromLocalStorage.filter((obj:any)=> obj.productID !== id)
   this.loacalStorageData.saveDataToLocalStorage(updatedCart)
   this.getCart();

  }
  public increaseQuantityCanvas(productID:any){
    let cartFromLocalStorage = this.loacalStorageData.getDataToLocalStorage();
      cartFromLocalStorage.find((obj:any)=>{
      if(obj.productID === productID && obj.quantity > obj.selectedQuantity){
        obj.selectedQuantity++
        this.loacalStorageData.saveDataToLocalStorage(cartFromLocalStorage)
      }
    })
    this.getCart()
  }
  public decreaseQuantityCanvas(productID:any){
    let cartFromLocalStorage = this.loacalStorageData.getDataToLocalStorage();
    cartFromLocalStorage.find((obj:any)=>{
    if(obj.productID === productID && obj.selectedQuantity > 0){
      obj.selectedQuantity--
      this.loacalStorageData.saveDataToLocalStorage(cartFromLocalStorage)
    }
  })
  this.getCart()
  }
  public viewCart(){
    this.getCart()
  }

  public getCart(){
    this.cart = this.loacalStorageData.getDataToLocalStorage()
    console.log(this.cart);

  }


}

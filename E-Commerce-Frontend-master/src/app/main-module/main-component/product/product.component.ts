import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductApiService } from 'src/app/shared-service/product-api/product-api.service';
import * as AOS from 'aos';
import { SearchApiService } from 'src/app/shared-service/search-api.service';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  selectSize = ["S", "M", "L", "X-L", "XX-L"];
  newSizeArray: any;
  p: number = 1
  pageItem: number = 8
  totalProduct: any;

  // getProductWithCompanyName: any = []

  productView: boolean = true

  searchInput: string = '';

  ProductArray: any = [];
  Url = 'http://localhost:8686/'

  constructor(
    private getProductDatafromservice: ProductApiService,
    private Router: Router,
    private SearchService : SearchApiService
  ) { }

  ngOnInit(): void {
    AOS.init();
    this.getProductDatafromservice.getProduct().subscribe((res: any) => {
      this.ProductArray = res.Result

      this.totalProduct = this.ProductArray.length  // pagination
    });


    // Subscribe to the currentSearchQuery observable
    this.SearchService.currentSearchQuery.subscribe(query => {
      this.searchInput = query;
    });

  }




  // *********************************** grid list view **************************//
  viewProduct() {
    this.productView = true
  }
  viewProduct1() {
    this.productView = false
  }

  // *********************************** get produt with categories

  // getproductName(companyName:any){
  // this.getProductDatafromservice.getProductByCompanyName(companyName).subscribe((res:any)=>{
  //   this.getProductWithCompanyName = res.Result
  // })
  // }

  // *********************************** ReDirect on Single Product Page
  reDirectSingleProductPage(_id: any) {
    this.Router.navigate(['View-Product',_id]);
  }




  searchProducts() {
    if (this.searchInput === '') {
      this.newSizeArray = this.ProductArray;
    } else {
      this.newSizeArray = this.ProductArray.filter((product: { productName: string; }) => {
        return product.productName.toLowerCase().includes(this.searchInput.toLowerCase());
      });
    }
    this.totalProduct = this.newSizeArray.length;
    this.p = 1;
  }




  // Define a filteredProducts function to filter the products based on the search query
  filteredProducts(): any[] {
    if (!this.searchInput) {
      // If there is no search query, return all products
      return this.ProductArray;
    }
    else {
      // Filter the products based on the search query
      return this.ProductArray.filter((product: { ProductName: string; }) => {
        return product.ProductName.toLowerCase().includes(this.searchInput.toLowerCase());
      });
    }
  }


}


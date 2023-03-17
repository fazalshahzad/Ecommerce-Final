import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-wild-cart',
  templateUrl: './wild-cart.component.html',
  styleUrls: ['./wild-cart.component.css']
})
export class WildCartComponent implements OnInit {


  constructor(private ActivatedRoute: ActivatedRoute,

  ) { }

  ngOnInit(): void {

  }

}

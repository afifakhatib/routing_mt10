import { Component, OnInit } from '@angular/core';
import { Iprod } from './prod.interface';
import { ProductsService } from '../../service/products.service';

@Component({
  selector: 'app-productsdashboard',
  templateUrl: './productsdashboard.component.html',
  styleUrls: ['./productsdashboard.component.scss']
})
export class ProductsdashboardComponent implements OnInit {

  prodInfo !: Iprod[]

  constructor(
    private _prodService : ProductsService
  ) { }

  ngOnInit(): void {
    this.prodInfo = this._prodService.fetchUserInfo()
  }

}

import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UsersService } from 'src/app/shared/service/users.service';
import { Iuser } from '../../userdashboard/user.interface';
import { ProductsService } from 'src/app/shared/service/products.service';
import { Iprod } from '../prod.interface';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  prodObj !: Iprod
  pId !: string

  constructor(
    private _router : Router,
    private _routes : ActivatedRoute,
    private _prodService : ProductsService
  ) { }

  ngOnInit(): void {
       this.getprodobj()
  }

  getprodobj(){
    this.pId = this._routes.snapshot.params['pId']
    if(this.pId){
      this.prodObj = this._prodService.getProdInfo(this.pId)
      console.log(this.prodObj);
    }
  }

  onProdRemove(){
    let confirmation = confirm(`Are you Sure? Do you Want to remove this product??`)
    if(confirmation){
      this._prodService.onProdRemove(this.prodObj)
    }
  }
  
}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from 'src/app/shared/service/users.service';
import { UuidService } from 'src/app/shared/service/uuid.service';
import { Iuser } from '../../userdashboard/user.interface';
import { Iprod } from '../prod.interface';
import { ProductsService } from 'src/app/shared/service/products.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {

  
  isinEditMode : boolean = false

  pId !: string
  prodObj !: Iprod
  canReturn !: number

  prodForm !: FormGroup

  constructor(
    private _route : ActivatedRoute,
    private _prodService : ProductsService,
    private _uuid : UuidService
  ) { }

  ngOnInit(): void {
    this.CreateProdForm()
    this.editHandling()
    this.queryParamsHandling()
  }

  CreateProdForm(){
      this.prodForm = new FormGroup({
        pname : new FormControl(null , [Validators.required]),
        canReturn : new FormControl(null , [Validators.required]),
        productDescription : new FormControl(null , [Validators.required]),
        productImg : new FormControl(null , [Validators.required]),
      })
  }

  editHandling(){
     this.pId = this._route.snapshot.params['pId']
     this.prodObj = this._prodService.getProdInfo(this.pId)
     if(this.pId){
      this.isinEditMode = true 
      this.prodForm.patchValue(this.prodObj)
     }
     else{
      this.isinEditMode = false
     }
  } 

  queryParamsHandling(){
    this.canReturn = this._route.snapshot.queryParams['canEdit'];
    if(this.canReturn === 0){
      this.prodForm.disable()
    }else{
      this.prodForm.enable()
    }
  }

  getContorls(){
    return this.prodForm.controls
  }

  controls(contorl : string){
    return this.prodForm.get(contorl) as FormControl
  }

  onProdAdd(){
     if(this.prodForm.valid){
      console.log(this.prodForm.getRawValue())
      // let canReturnVal = this.prodForm.get('canReturn')?.value;
      let newProd = {...this.prodForm.getRawValue() , pId : this._uuid.uuid()}
      console.log(newProd)
      this._prodService.onProdCreate(newProd)
     }
  }


  onProdUpdate(){
   let canReturnVal = this.prodForm.get('canReturn')?.value;
    let updatedProd = {...this.prodForm.getRawValue() , pId : this.pId}
     console.log(updatedProd)
    this._prodService.onProdUpdate(updatedProd)
  }
 
}

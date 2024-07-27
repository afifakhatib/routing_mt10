import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Iuser } from '../user.interface';
import { UsersService } from 'src/app/shared/service/users.service';
import { ActivatedRoute } from '@angular/router';
import { UuidService } from 'src/app/shared/service/uuid.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {

  isinEditMode : boolean = false

  userId !: string
  userObj !: Iuser
  userRole !: string

  userForm !: FormGroup

  constructor(
    private _route : ActivatedRoute,
    private _userService : UsersService,
    private _uuid : UuidService
  ) { }

  ngOnInit(): void {
    this.CreateuserForm()
    this.editHandling();
    this.queryParamsHandling()
  }

  CreateuserForm(){
      this.userForm = new FormGroup({
        userName : new FormControl(null , [Validators.required]),
        userRole : new FormControl(null , [Validators.required]),
        userDetails : new FormControl(null , [Validators.required]),
        personImg : new FormControl(null , [Validators.required]),
      })
  }

  editHandling(){
     this.userId = this._route.snapshot.params['userId']
     this.userObj = this._userService.getUserInfo(this.userId)
     if(this.userId){
      this.isinEditMode = true 
      this.userForm.patchValue(this.userObj)
     }
     else{
      this.isinEditMode = false
     }
  } 

  queryParamsHandling(){
      this.userRole = this._route.snapshot.queryParams['userRole'];
      if(this.userRole === 'buyer'){
        this.userForm.disable()
      }else{
        this.userForm.enable()
      }
  }

  getContorls(){
    return this.userForm.controls
  }

  controls(contorl : string){
    return this.userForm.get(contorl) as FormControl
  }

  onUserAdd(){
     if(this.userForm.valid){
      console.log(this.userForm.getRawValue())
      let newUser = {...this.userForm.getRawValue() , userId : this._uuid.uuid()}
      console.log(newUser)
      this.userForm.reset()
      this._userService.onUserCreate(newUser)
     }
  }

  onUserUpdate(){
    let updatedUser = {...this.userForm.getRawValue() , userId : this.userId}
     console.log(updatedUser)
    this._userService.onUserUpdate(updatedUser)
  }
}

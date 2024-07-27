import { Component, OnInit } from '@angular/core';
import { Iuser } from '../user.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from 'src/app/shared/service/users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  userObj !: Iuser
  userId !: string

  constructor(
    private _router : Router,
    private _routes : ActivatedRoute,
    private _userService : UsersService
  ) { }

  ngOnInit(): void {
       this.getUserobj()
  }

  getUserobj(){
    this.userId = this._routes.snapshot.params['userId']
    if(this.userId){
      this.userObj = this._userService.getUserInfo(this.userId)
      console.log(this.userObj);
    }
  }

  onUserRemove(){
    let confirmation = confirm(`Are you Sure? Do you Want to remove this user??`)
    if(confirmation){
      this._userService.onUserRemove(this.userObj)
    }
  }
  
  // gotoEditUser(){
  //   this._router.navigate(
  //     ['editUser'] , 
  //     {
  //       relativeTo : this._routes,
  //       queryParamsHandling : 'preserve'
  //     }
  //   )
  // }
}


import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../service/users.service';
import { Iuser } from './user.interface';

@Component({
  selector: 'app-userdashboard',
  templateUrl: './userdashboard.component.html',
  styleUrls: ['./userdashboard.component.scss']
})
export class UserdashboardComponent implements OnInit {

  userinfo !: Iuser[]

  constructor(
    private _userService : UsersService
  ) { }

  ngOnInit(): void {
    this.userinfo = this._userService.fetchUserInfo()
  }

}

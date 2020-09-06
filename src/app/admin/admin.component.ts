import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../model/user';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  users: User[];

  constructor(private usersService: UserService) { }

  ngOnInit(): void {
    this.usersService.loadUsers()
    .subscribe (users => {
      this.users = users;
    });
  }

}

import { Component, OnInit, AfterViewInit, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import _ from 'lodash';
import io from 'socket.io-client';
import { User } from 'src/app/provider/models/user.model';
import { UsersService } from 'src/app/provider/services/users.service';
import { environment } from 'src/environments/environment';
import { TokenService } from '../auth/token.service';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit, AfterViewInit {

  socket: any;
  users: User[] = [];
  loggedInUser: User;
  onlineUsers: User[] = [];


  constructor(
    private usersService: UsersService,
    private tokenService: TokenService,
    private authService: AuthService,
    private router: Router
  ) {
    this.socket = io(environment.serverAddress);
  }

  ngOnInit() {
    this.getLogonUser();
    this.GetUsers();
    this.socket.on('refreshPage', () => {
      this.getLogonUser();
    });
  }

  getLogonUser() {
    this.loggedInUser = this.tokenService.GetPayload();

    this.usersService.GetUserById(this.loggedInUser._id).subscribe(
      user => {
        this.loggedInUser = user.result;
      },
      err => {
        if (err.error.token === null) {
          this.tokenService.DeleteToken();
          this.authService.resetLogonUserDetails();
          this.router.navigate(['']);
        }
      }
    );
  }

  GetUsers() {
    this.usersService.GetAllUsers().subscribe(data => {

      _.remove(data.result, { username: this.loggedInUser.username });

      this.users = data.result;
      this.users.forEach(user => {
        user.religion = user.nation.religion.find(r => r._id == user.religion.toString());
      });
      this.users = this.users.filter(user => user.religion._id !== this.loggedInUser.religion._id);
    });
  }


  ngAfterViewInit() {
    this.socket.on('usersOnline', (data: User[]) => {
      this.onlineUsers = data;
    });
  }


  checkIfOnline(id: string) {
    const result = _.indexOf(this.onlineUsers, id);
    if (result > -1) {
      return true;
    } else {
      return false;
    }
  }
}

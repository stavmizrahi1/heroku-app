import { Component, OnInit, AfterViewInit, Input } from '@angular/core';
// import io from 'socket.io-client';
import _ from 'lodash';
import { TokenService } from '../auth/token.service';
import { UsersService } from 'src/app/provider/services/users.service';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/provider/models/user.model';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})

export class ChatComponent implements OnInit {
  tabElement: any;
  online_users = [];
  socket: any;
  user: any;
  partnerData: User;


  constructor(
    private tokenService: TokenService,
    private usersService: UsersService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {

    this.user = this.tokenService.GetPayload();

    this.route.params.subscribe(params => {

      this.GetPartnerData(params.userId);
      // this.socket.on('refreshPage', () => {
      //   this.GetPartnerData(params.userId);
      // });

    });
    // this.socket.on('online', { room: 'global', user: this.user.username });
  }

  GetPartnerData(userId: string) {
    this.usersService.GetUserById(userId).subscribe(data => {
      this.partnerData = data.result;
    });
  }
}

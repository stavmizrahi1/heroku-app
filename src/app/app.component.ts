import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from './components/auth/token.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'mi-ata-chat';

  constructor(
    public router: Router,
    private tokenService: TokenService
  ) { }

  ngOnInit() {
    const token = this.tokenService.GetToken();
    if (token) {
      this.router.navigate(['people']);
    } else {
      this.router.navigate(['']);
    }
  }
}

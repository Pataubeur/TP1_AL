import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiHelperService } from '../services/api-helper.service';
import { TokenStorageService } from '../services/token-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(
    private api: ApiHelperService,
    private tokenStorageService: TokenStorageService,
    private router: Router,
  ) {}
    
  notLogged : boolean = false;

  login(): void {
    const username: string = (document.getElementById('username') as HTMLInputElement).value;
    const password: string = (document.getElementById('password') as HTMLInputElement).value;
    this.api.post({endpoint: '/auth/login', data: { username, password }}).then(response => this.tokenStorageService.save(response.access_token, username)).catch(response => { 
      if(response.status==401) {
        this.notLogged = true;
      }
    }).then(() => {
      if(this.tokenStorageService.isLogged()) {
        this.router.navigateByUrl('/home');
        this.notLogged = false;
      }
    });
  }

  sendCredential(): void {
  }


}
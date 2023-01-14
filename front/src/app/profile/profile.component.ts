import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../services/token-storage.service';
import { Observable, lastValueFrom  } from 'rxjs';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { ApiHelperService } from '../services/api-helper.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{

  constructor(
    private api: ApiHelperService,
    private tokenStorageService: TokenStorageService,
    private http: HttpClient
  ) {}

  username : string = this.tokenStorageService.getName();
  dataSource: any = null;

  ngOnInit() : void {
    const resquest = this.api.get({endpoint: ('/users/').concat(this.username)} ).then(response => {
      this.dataSource = response;
    });
  }

  changeLastname() : void {
    const lastname: string = (document.getElementById('lastname') as HTMLInputElement).value;
    this.api.put({endpoint: ('/users/').concat(this.username), data: {lastname}}).then(() => window.location.reload());
  }

  changeFirstname() : void {
    const firstname: string = (document.getElementById('firstname') as HTMLInputElement).value;
    this.api.put({endpoint: ('/users/').concat(this.username), data: {firstname}}).then(() => window.location.reload());
  }

  changePassword() : void {
    const password: string = (document.getElementById('password') as HTMLInputElement).value;
    this.api.put({endpoint: ('/users/').concat(this.username), data: {password}}).then(() => window.location.reload());
  }

}

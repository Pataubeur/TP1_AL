import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { lastValueFrom, Observable } from 'rxjs';
import { ApiHelperService } from '../services/api-helper.service';
import { TokenStorageService } from '../services/token-storage.service';
import { UsersListComponent } from '../users-list/users-list.component';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  constructor(
    private api: ApiHelperService,
    private http: HttpClient,
    private userList: UsersListComponent,
    private tokenStorageService: TokenStorageService
  ) {}

  username : string = this.tokenStorageService.getClickedUser();
  dataSourceUser: any = null;
  userAssociations: string[] = [];
  notExisting : boolean = false;

  ngOnInit() : void {
    const resquestUser= this.api.get({endpoint : ('/users/').concat(this.username)}).then(response => {
      this.dataSourceUser = response;
    }).catch(response => {
      if(response.status==404) {
        this.notExisting = true
        console.log(this.notExisting)
      }
    });
    let dataSourceAssociation : any =  null;
    const resquestAssociation= this.api.get({endpoint : ('/associations')}).then(response => {
      dataSourceAssociation = response;
      for(let i = 0 ; i < dataSourceAssociation.length ; i++) {
        for(let j = 0 ; j < dataSourceAssociation[i].users.length ; j++) {
          if(dataSourceAssociation[i].users[j].id === +(this.username)) {
            this.userAssociations.push(dataSourceAssociation[i].name);
          }
        }
      }
      console.log(this.userAssociations);
    });
  }
}

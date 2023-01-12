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
    const resquestUser: Observable<any> = this.http.get(('http://localhost:3000/users/').concat(this.username), { observe: 'response' });
    lastValueFrom(resquestUser).then(response => {
      this.dataSourceUser = response.body;
    }).catch(response => {
      if(response.status==404) {
        this.notExisting = true
        console.log(this.notExisting)
      }
    });
    let dataSourceAssociation : any =  null;
    const resquestAssociation: Observable<any> = this.http.get(('http://localhost:3000/associations/'), { observe: 'response' });
    lastValueFrom(resquestAssociation).then(response => {
      dataSourceAssociation = response.body;
      for(let i = 0 ; i < dataSourceAssociation.length ; i++) {
        //console.log(dataSourceAssociation[i].users[0].id);
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

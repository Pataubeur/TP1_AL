import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, lastValueFrom } from 'rxjs';
import { ApiHelperService } from '../services/api-helper.service';
import { TokenStorageService } from '../services/token-storage.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})


export class UsersListComponent implements OnInit {
  constructor(
    private api: ApiHelperService,
    private http: HttpClient,
    private router: Router,
    private tokenStorageService: TokenStorageService
  ) { }

  displayedColumns: string[] = ['icon', 'id', 'lastname', 'firstname', 'age', 'bin'];
  dataSource = [];
  
  ngOnInit(): void {
    const resquest= this.api.get({endpoint:'/users'}).then(response => {
      this.dataSource = response;
    });
  }

  goToUserForm(id: number) : void {
    //console.log("id" + id)
    this.tokenStorageService.saveClickedUser(id.toString());
    this.router.navigateByUrl('/user-form');
  }

  deleteUser(id: number) : void {
    this.api.delete({endpoint:('/users/'.concat(id.toString()))}).then(() => window.location.reload());
    console.log("Trying to delete");
    if(id.toString() === this.tokenStorageService.getName()) {
      this.tokenStorageService.clear();
      this.router.navigateByUrl('/login');
    }
  }
  
  create() : void {
    const password: string = (document.getElementById('password') as HTMLInputElement).value;
    const lastname: string = (document.getElementById('lastname') as HTMLInputElement).value;
    const firstname: string = (document.getElementById('firstname') as HTMLInputElement).value;
    const age: string = (document.getElementById('age') as HTMLInputElement).value;
    this.api.post({endpoint: '/users', data: { lastname, firstname, age, password }}).then(() => window.location.reload());
  }

  // getId(): number {
  //   console.log("getIdAfter" + this.clickedUser);
  //   return this.clickedUser;
  // }
  
}




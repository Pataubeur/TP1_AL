import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorageService } from '../services/token-storage.service';
import 'bootstrap';
//import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
  //imports: [NgbDropdownModule],
})
export class NavComponent {

  constructor(
    private service: TokenStorageService,
    private router: Router,
    ){}

  isLogged : boolean = this.service.isLogged()
  userOrAssociation : string = "user"
  notExisting : boolean = false

  logout(): void {
    //console.log("click on logout !");
    this.service.clear();
    this.isLogged = false;
    this.router.navigateByUrl("/login");
  }

  searchUser() : void {
    const search: string = (document.getElementById('search') as HTMLInputElement).value;
    if(this.userOrAssociation === "user") {
      this.service.saveClickedUser(search);
      if(this.router.url == '/user-form') {
        window.location.reload()
      } else {
        this.router.navigateByUrl('/user-form');
      }
    } else if (this.userOrAssociation === "association") {
      this.service.saveClickedAssociation(search);
      if(this.router.url == '/asso-form') {
        window.location.reload()
      } else {
        this.router.navigateByUrl('/asso-form')
      }
    }
  }

  changeToUser() : void {
    this.userOrAssociation = "user";
  }

  changeToAssociation() : void {
    this.userOrAssociation = "association";
  }


}

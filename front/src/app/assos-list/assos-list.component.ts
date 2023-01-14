import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, lastValueFrom  } from 'rxjs';
import { ApiHelperService } from '../services/api-helper.service';
import { TokenStorageService } from '../services/token-storage.service';

@Component({
  selector: 'app-assos-list',
  templateUrl: './assos-list.component.html',
  styleUrls: ['./assos-list.component.css']
})


export class AssosListComponent implements OnInit {
  constructor(
      private http: HttpClient,
      private api: ApiHelperService,
      private router: Router,
      private tokenStorageService: TokenStorageService,
    ) {}

  displayedColumns: string[] = ['icon', 'id', 'name', 'bin'];
  dataSource = [];

  ngOnInit() : void {


    const resquest=this.api.get({endpoint: '/associations'}).then(response => this.dataSource = response);
  }

  goToAssoForm(id: number) : void {
    //console.log("id" + id)
    this.tokenStorageService.saveClickedAssociation(id.toString());
    this.router.navigateByUrl('/asso-form');
  }

  deleteAssociation(id: number) : void {
    this.api.delete({endpoint:('/associations/'.concat(id.toString()))}).then(() => window.location.reload());;
    console.log("Trying to delete");
  }

}

/**
 *     const resquest:= this.http.get('http://localhost:3000/associations', { observe: 'response' });
    lastValueFrom(resquest).then(response => this.dataSource = response.body);
  }
 */
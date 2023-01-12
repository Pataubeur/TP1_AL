import { Component } from '@angular/core';
import { UsersListComponent } from './users-list/users-list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UsersListComponent]
})
export class AppComponent {
  title = 'fr-administration-front';
}

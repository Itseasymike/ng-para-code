import { Component } from '@angular/core';
import {MockDataService} from './services/mock-data.service';
import {HttpErrorResponse} from '@angular/common/http';
import {User} from './models/user-data.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {

  data: User[] | undefined;

  constructor(private dataService: MockDataService) {

  }

}

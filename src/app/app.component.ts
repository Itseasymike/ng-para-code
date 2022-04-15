import { Component } from '@angular/core';
import {User} from './models/page-data.interface';
import {MockDataService} from './services/mock-data.service';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {

  data: User[] | undefined;

  constructor(private dataService: MockDataService) {

    dataService.api.pageData.users().subscribe(
      {
        next: (data: User[]) => {
          this.data = data;
        },
        error: (err: HttpErrorResponse) => {
          console.log(err);
        }
      }
    );

  }

}

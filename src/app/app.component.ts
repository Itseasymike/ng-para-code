import { Component, OnInit } from '@angular/core';
import {MockDataService} from './services/mock-data.service';
import {HttpErrorResponse} from '@angular/common/http';
import {User} from './models/user-data.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {

  data: User[] | undefined;
  displayedColumns: string[] = ['name', 'email', 'address', 'phone'];
  dataSource: any;

  constructor(private dataService: MockDataService) {

  }

  ngOnInit() {
    this.dataService.api.pageData
    .users()
    .subscribe({
      next: (userData: User[]) => {
        this.data = userData;
        // structure needed for mat table
        this.dataSource = userData.map((user) => (
          { id: user.id,
            name: user.name,
            username: user.username,
            email: user.email,
            address: user.address,
            phone: user.phone,
            website: user.website,
            company: user.company,

          }
        ));
      },
      error: (error: HttpErrorResponse) => {
        console.log('Error =>', error);
      }
    });
  }

}

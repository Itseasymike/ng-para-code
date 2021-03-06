import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../models/user-data.interface';

@Injectable({
  providedIn: 'root'
})
export class MockDataService {

  private proxy = 'data'

  api = {
    pageData: {
      users: (): Observable<User[]> => this.http.get<User[]>(this.proxy + '/users')
    }
  }

  constructor(private http: HttpClient) { }


}

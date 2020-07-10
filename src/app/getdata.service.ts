import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class GetdataService {

  constructor(private http: HttpClient) { }

  getTableData(): any {
    return this.http.get('https://jsonplaceholder.typicode.com/users')
  }
}

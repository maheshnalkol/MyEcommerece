import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  BASE_URL: string = `${environment.baseurl}`;
  PRODUCT_URL: string = `${this.BASE_URL}/products`;
  constructor(private _http: HttpClient) {}

  fetchAllData() {
    return this._http.get(this.PRODUCT_URL);
  }
}

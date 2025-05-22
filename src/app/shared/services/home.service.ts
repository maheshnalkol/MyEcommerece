import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  BASE_URL: string = `${environment.baseurl}`;
  PRODUCT_URL: string = `${this.BASE_URL}/products`;
  private pages = 33;
  private limit = 10;
  constructor(private _http: HttpClient) {}

  //scroll pagignation
  fetchAllDataScroll(page: number, limit: number): Observable<any> {
    return this._http.get(`${this.PRODUCT_URL}?page=${page}&limit=${limit}`);
  }

  getAllUniqueCategories(): Observable<string[]> {
    const requests: Observable<any>[] = [];

    for (let page = 1; page <= this.pages; page++) {
      requests.push(
        this._http.get<any>(
          `${this.PRODUCT_URL}?page=${page}&limit=${this.limit}`
        )
      );
    }

    return forkJoin(requests).pipe(
      map((responses: any[]) => {
        responses.forEach((res, i) => {
          console.log(`Page ${i + 1} response:`, res);
        });

        const allProducts = responses.flatMap((res: any) => {
          if (res && Array.isArray(res.data)) {
            return res.data;
          } else {
            console.warn('Page response structure issue:', res);
            return [];
          }
        });

        console.log('All Products:', allProducts);

        const categories = allProducts.map((p: any) => p.category);
        const uniqueCategories = Array.from(new Set(categories));
        return uniqueCategories;
      })
    );
  }
}

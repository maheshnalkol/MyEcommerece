import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  prodArr: Array<any> = [];
  page: number = 1;
  limit: number = 20;
  imagesArr: any = [];
  arrayOfcategory: Array<any> = [];
  constructor(private _homeService: HomeService) {}

  ngOnInit(): void {
    this.getAllProducts();
    this.getCategroy();
  }

  getAllProducts() {
    this._homeService.fetchAllDataScroll(this.page, this.limit).subscribe({
      next: (res: any) => {
        // console.log(res);

        const products = res.data || null;
        console.log(products);
        this.prodArr.push(...products);
        this.prodArr.forEach((f) => {
          // console.log(f);

          return (this.imagesArr = f.images);
        });
      },
      error: (err) => {
        console.log(err.error.message);
      },
    });
  }

  getCategroy() {
    this._homeService.getAllUniqueCategories().subscribe((s) => {
      console.log(s);
      this.arrayOfcategory = s;
    });
  }
}

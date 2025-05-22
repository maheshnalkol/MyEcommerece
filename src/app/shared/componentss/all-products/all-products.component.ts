import { Component, HostListener, Input, OnInit } from '@angular/core';
import { HomeService } from '../../services/home.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.scss'],
})
export class AllProductsComponent implements OnInit {
  products: any[] = [];
  isInwhishlist: { [prodId: string]: boolean } = {};
  changeImg: any = null;
  showQuickView: boolean = false;
  hoveredProduct: any = null;
  selectedProd!: any;

  loading: boolean = true;

  fetching: boolean = false;
  page: number = 1;
  limit: number = 10;
  hasNextPage: boolean = true;
  constructor(private _homeService: HomeService) {}

  ngOnInit(): void {
    this.fetchAllProduct(true);
  }

  onenter(prod: any) {
    this.changeImg = prod;
  }
  onleave() {
    this.changeImg = null;
  }

  onaddCart(eve: Event) {
    eve.stopPropagation();
  }
  onaddlike(eve: Event, prodId: string) {
    eve.stopPropagation();
    this.isInwhishlist[prodId] = !this.isInwhishlist[prodId];
  }
  onaddVisibility(eve: Event) {
    eve.stopPropagation();
    this.selectedProd = this.products;
    this.showQuickView = !this.showQuickView;
  }
  onshuffle(eve: Event) {
    eve.stopPropagation();
  }
  onClosePopup(eve: Event) {
    eve.stopPropagation();
    this.showQuickView = false;
  }
  onClose() {
    this.showQuickView = false;
  }

  @HostListener('window:scroll', [])
  onScroll(): void {
    const bottomReached =
      window.innerHeight + window.scrollY >= document.body.offsetHeight - 100;

    if (bottomReached && this.hasNextPage && !this.loading) {
      this.page++;
      this.fetchAllProduct(false);
    }
  }
  fetchAllProduct(initialLoad: boolean) {
    // Set loading or fetching states
    if (initialLoad) {
      this.loading = true;
    } else {
      this.fetching = true;
    }

    this._homeService.fetchAllDataScroll(this.page, this.limit).subscribe({
      next: (res: any) => {
        // Check if the response is in the format you're expecting (data inside an object)
        const products = res.data || []; // Replace `data` with the actual response key if needed
        this.products.push(...products);

        // If products are less than the limit, there is no more data
        if (products.length < this.limit) {
          this.hasNextPage = false;
        }

        // Set loading/fetching states accordingly
        this.loading = false;
        this.fetching = false;
      },
      error: () => {
        // Reset loading and fetching on error
        this.loading = false;
        this.fetching = false;
      },
    });
  }
}

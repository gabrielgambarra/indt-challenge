import { Component, OnInit } from '@angular/core';
import { Product } from '../providers/models/product.model';
import { ProductsService } from '../providers/services/products.service';

@Component({
  selector: 'app-component-view',
  templateUrl: './component-view.component.html',
  styleUrls: ['./component-view.component.scss']
})
export class ComponentViewComponent implements OnInit {

  allProducts: Product[] = [];
  paginatedProducts: Product[] = [];
  page_size: number = 9;
  page_number: number = 1;
  canShowNextPageButton: boolean;

  constructor(
    private service: ProductsService
  ) { }

  ngOnInit(): void {
    this.getDataFromAPI();
  }

  private getDataFromAPI() {
    this.service.getProducts().subscribe(
      success => {
        this.allProducts = Object.values(success.products);
        this.initFirstPage();
      }
    );
  }

  private initFirstPage() {
    this.paginatedProducts = this.paginateArray();

    this.canShowNextPageButton = this.paginatedProducts.length > 0 ? true : false;
  }

  public nextPage() {
    this.page_number += 1;
    Array.prototype.push.apply(this.paginatedProducts, this.paginateArray());

    if (!this.hasNextPage()) {
      this.canShowNextPageButton = false;
    }
  }

  private hasNextPage(): boolean {
    const fakeNextPage = this.page_number + 1;
    const fakeNextPageProducts = this.allProducts.slice((fakeNextPage - 1) * this.page_size, fakeNextPage * this.page_size);

    if (fakeNextPageProducts.length == 0) {
      this.canShowNextPageButton = false;
      return false;
    } else {
      this.canShowNextPageButton = true;
      return true;
    }
  }

  private paginateArray(): Product[] {
    return this.allProducts.slice((this.page_number - 1) * this.page_size, this.page_number * this.page_size);
  }
}

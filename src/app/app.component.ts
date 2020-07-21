import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/providers/services/products.service';
import { Product } from 'src/app/providers/models/product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'indt-challenge';
  products: Product[];

  constructor(
    private service: ProductsService
  ) { }

  ngOnInit(): void {
    this.getData();
  }

  private getData() {
    this.service.getProducts().subscribe(
      success => {
        this.products = success.products;
      }
    );
  }
}

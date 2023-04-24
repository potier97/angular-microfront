import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonsLibService } from '@commons-lib';
import { IProductCard } from '../../models/product-card.interface';

@Component({
  standalone: true,
  selector: 'app-products-card',
  templateUrl: './products-card.component.html',
  styleUrls: ['./products-card.component.scss'],
  imports: [CommonModule],
})
export class ProductsCardComponent {
  @Input() product?: IProductCard;

  constructor(private _commonsLibService: CommonsLibService) {}

  clickCard(): void {
    this._commonsLibService.sendData({
      name: this.product!.name,
      price: this.product!.price,
    });
  }

}

import { Component } from '@angular/core';

import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

  products = [...products];

  currentImageIndex = 0;

  constructor() { }

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }

  getWhatsAppShareLink(productId: number) {
    return `https://api.whatsapp.com/send?text=${encodeURIComponent(this.products[productId - 1].href)}`;
  } 

  getTelegramShareLink(productId: number) {
    return `https://t.me/share/url?url=${encodeURIComponent(this.products[productId - 1].href)}`;
  }

  prevImage(productId: any) {
    this.currentImageIndex = Math.max(this.currentImageIndex - 1, 0);
  }

  nextImage(product: any) {
    this.currentImageIndex = Math.min(this.currentImageIndex + 1, product.img.length - 1);
  }
}

import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './layout/header/header.component';

import { Product } from './shared/models/product';

import { ShopService } from './core/services/shop.service';
import { Title } from '@angular/platform-browser';
import { ShopComponent } from './features/shop/shop.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, ShopComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  Title='skinet';
}

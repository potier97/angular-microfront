import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { ProductsCardComponent } from './products-card/products-card.component';
// import { ProductsRoutingModule } from './products-routing.module';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [{ path: '', component: ProductsComponent }];

@NgModule({
  declarations: [
    ProductsComponent,
  ],
  imports: [
    RouterModule.forChild(routes),
    // ProductsRoutingModule,
    CommonModule,
    ProductsCardComponent,
  ]
})
export class ProductsModule { }

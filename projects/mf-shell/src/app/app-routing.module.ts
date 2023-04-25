import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { loadRemoteModule } from '@angular-architects/module-federation';

const routes: Routes = [
  {
    path: '',
    // loadChildren: () => import('mfShopping/ProductsModule').then((m) => m.ProductsModule),
    loadChildren: () => 
         loadRemoteModule({
           type: 'module',
           remoteEntry: 'http://localhost:4210/remoteEntry.js',
           exposedModule: './ProductsModule',
         })
         .then(m => m.ProductsModule)
  },
  {
    path: 'payment',
    loadComponent: () => import('mfPayments/PaymentComponent').then((c) => c.PaymentComponent),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

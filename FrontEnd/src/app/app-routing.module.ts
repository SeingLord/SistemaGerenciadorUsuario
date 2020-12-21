import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagesRoutingModule } from './pages/pages.route';
const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    PagesRoutingModule],

  exports: [RouterModule]
})
export class AppRoutingModule { }

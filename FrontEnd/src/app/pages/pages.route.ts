import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';

const pagesRouterConfig: Routes = [{
    path: '', component: HomeComponent,
}

]
@NgModule({
    imports: [
        RouterModule.forChild(pagesRouterConfig)
    ],
    exports: [RouterModule]
})

export class PagesRoutingModule { }
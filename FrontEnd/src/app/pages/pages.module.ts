import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { ComponentsModule } from "../components/components.module";
import { HomeComponent } from './home/home.component';


@NgModule({
    declarations: [HomeComponent],
    imports: [
        CommonModule,
        ComponentsModule,
        RouterModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
    ],
    exports: [HomeComponent]
})

export class PagesModule { }
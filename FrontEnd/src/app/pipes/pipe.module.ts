import { NgModule } from '@angular/core';
import { EscolariedadePipe } from './escolariedade.pipe';
import { CommonModule } from "@angular/common";

@NgModule({
    imports: [CommonModule],
    declarations: [EscolariedadePipe],
    exports: [EscolariedadePipe]
})

export class PipeModule { } 
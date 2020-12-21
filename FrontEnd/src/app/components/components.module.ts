import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { ListarUsuariosComponent } from './listarUsuariosComponent/listar-usuarios.component';
import { FormularioUsuarioComponent } from './formularioUsuarioComponent/formulario-usuario.component';
import { CustomFormsModule } from 'ngx-custom-validators';
import { PipeModule } from "../pipes/pipe.module";

@NgModule({
    declarations: [ListarUsuariosComponent, FormularioUsuarioComponent],
    imports: [
        CommonModule,
        RouterModule,
        PipeModule,
        FormsModule,
        CustomFormsModule,
        ReactiveFormsModule,
        HttpClientModule,
    ],
    exports: [ListarUsuariosComponent, FormularioUsuarioComponent]
})

export class ComponentsModule { }
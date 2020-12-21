import { Component, OnInit } from "@angular/core";
import { Usuario } from './../../models/Usuarios';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
    mostrarFormularioUsuario = false;
    usuario: Usuario;
    editar: boolean = false;
    mudarEditar() {
        this.editar = !this.editar;
    }
    constructor() { }
    ngOnInit() { }

    AdicionarUsuario(FormularioUsuario) {
        this.mostrarFormularioUsuario = !FormularioUsuario;
        if (this.editar) {
            this.usuario = {} as Usuario;
        }
    }

    PreencherFormulario(e: Usuario) {
        this.usuario = e;
        const date = new Date(e.dataNascimento).toISOString().split('T')[0];
        this.usuario.dataNascimento = date;
        this.mostrarFormularioUsuario = true;
        console.log(this.usuario);
        this.editar = true;

    }
}
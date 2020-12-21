import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { APIService } from './../../services/http/api.service';

@Component({
    selector: 'app-listar-usuarios',
    templateUrl: './listar-usuarios.component.html'
})
export class ListarUsuariosComponent implements OnInit {
    usuarios;
    @Output()
    UsuarioEditar: EventEmitter<any> = new EventEmitter();
    constructor(private apiService: APIService) { }

    async ngOnInit() {
        this.getAllUsuarios();
        console.log(this.usuarios)
    }
    async removerUsuario(usuario) {
        await this.apiService.DeleteUsuarios(usuario);
        setTimeout(() => {

            this.getAllUsuarios();
        }, 1000)


    }
    async getAllUsuarios() {
        this.usuarios = await this.apiService.GetAllUsuarios();
    }

    async editarUsuario(usuario) {
        this.UsuarioEditar.emit(usuario);
    }
}
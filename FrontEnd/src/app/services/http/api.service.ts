import { Injectable } from "@angular/core";
import { HttpService } from './http.service';
import { Usuario } from './../../models/Usuarios';

@Injectable({
    providedIn: 'root'
})

export class APIService {
    constructor(private httpService: HttpService) { }

    GetAllUsuarios() { return this.httpService.get('Usuario/GetAllUsuarios'); }
    InsertUsuarios(usuario: Usuario) {
        return this.httpService.post('Usuario/InsertUsuarios', usuario);
    }

    UpdateUsuarios(usuario: Usuario) {
        return this.httpService.put('Usuario/UpdateUsuarios', usuario);
    }

    DeleteUsuarios(usuario) {
        return this.httpService.delete(`/Usuario/DeleteUsuarios?id=${usuario.id}`);
    }
}
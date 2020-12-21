import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Usuario } from './../../models/Usuarios';
import { CustomValidators } from 'ngx-custom-validators';
import { APIService } from './../../services/http/api.service';

@Component({
    selector: 'app-formulario-usuario',
    templateUrl: './formulario-usuario.component.html'
})
export class FormularioUsuarioComponent implements OnInit {

    @Input()
    Usuario: Usuario;
    @Input()
    Editar: Boolean;
    @Output()
    MudarEditar: EventEmitter<any> = new EventEmitter();
    maxDate = new Date();
    cadastroForm: FormGroup;
    constructor(private fb: FormBuilder, private apiService: APIService) { }

    adicionarUsuario() {
        this.InserirNaClasseUsuarioId(this.Usuario.idEscolariedade);
        if (this.Usuario && this.Editar == false) {
            this.apiService.InsertUsuarios(this.Usuario);
        } else {
            this.Editar = false;
            this.apiService.UpdateUsuarios(this.Usuario);
        }
        location.reload();
    }

    InserirNaClasseUsuarioId(Escolariedade) {
        switch (Escolariedade) {
            case 'Infantil':
                this.Usuario.idEscolariedade = 1
                break;
            case 'Fundamental':
                this.Usuario.idEscolariedade = 2
                break;
            case 'Médio':
                this.Usuario.idEscolariedade = 3
                break;
            case 'Superior':
                this.Usuario.idEscolariedade = 4
        }

    }
    ngOnInit(): void {
        if (!this.Usuario) {
            this.Usuario = {} as Usuario
        }
        this.cadastroForm = this.fb.group({
            nome: ['', [Validators.required]],
            sobrenome: ['', [Validators.required]],
            email: ['', [Validators.required, CustomValidators.email]],
            dataNascimento: ['', [Validators.required, CustomValidators.maxDate(new Date())]],
            escolariedade: ['', [Validators.required]],
        })

    }
}
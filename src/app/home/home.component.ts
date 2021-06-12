import { Component, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuarioDto } from 'src/model/UsuarioDto';
import { ApiService } from 'src/services/api.service';
import { UsuarioLogado } from 'src/usuarioLogado/usuario-logado';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public formUsuario: FormGroup;
  public usuario: UsuarioDto;

  constructor(
    private formBuilder: FormBuilder,
    private api: ApiService,
    private usuarioLogado: UsuarioLogado,
  ) {
    this.initForm();
    this.usuario = this.usuarioLogado.getUsuarioLogado();
  }

  public initForm(): void {
    this.formUsuario = this.formBuilder.group({
      idUsuario: [''],
      username: ['', Validators.required],
      email: ['', Validators.required],
      senha: ['', Validators.required],
      dataCriacao: [''],
      fotoPerfil: [''],
    });
  }

  ngOnInit(): void {
    console.debug(this.usuario);
  }
}

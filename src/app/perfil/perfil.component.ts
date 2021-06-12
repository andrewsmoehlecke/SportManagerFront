import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioDto } from 'src/model/UsuarioDto';
import { ApiService } from 'src/services/api.service';
import { UsuarioLogado } from 'src/usuarioLogado/usuario-logado';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent implements OnInit {

  public formUsuario: FormGroup;
  public usuario: UsuarioDto;

  constructor(
    private api: ApiService,
    private formBuilder: FormBuilder,
    private usuarioLogado: UsuarioLogado,
    private router: Router,
  ) {
    this.initForm();
    this.usuario = this.usuarioLogado.getUsuarioLogado();
  }

  ngOnInit(): void {
    this.formUsuario.patchValue({
      idUsuario: this.usuario.idUsuario,
      username: this.usuario.username,
      email: this.usuario.email,
      senha: this.usuario.senha,
      dataCriacao: this.usuario.dataCriacao,
      fotoPerfil: this.usuario.fotoPerfil,
    });
  }

  public initForm(): void {
    this.formUsuario = this.formBuilder.group({
      idUsuario: [''],
      username: ['', Validators.required],
      email: [''],
      senha: ['', Validators.required],
      dataCriacao: [''],
      fotoPerfil: [''],
    });
  }

  updateUsuario() {
    this.api.updateUsuario(this.formUsuario.value).subscribe((data) => {
      this.formUsuario.patchValue({
        idUsuario: data.idUsuario,
        email: data.email,
        senha: data.senha,
        dataCriacao: data.dataCriacao,
        fotoPerfil: data.fotoPerfil,
      });
    },
      (err) => {
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: 'Não foi possível atualizar o Usuário! :(',
          timer: 2500,
          showConfirmButton: false
        });
        console.error("Algo de errado não está certo " + err);
      });
  }

  deleteUsuario(id: Number) {
    this.api.deleteUsuarioById(id).subscribe((data) => {
      Swal.fire({
        position: 'top',
        icon: 'success',
        title: 'Usuário deletado',
        timer: 2200,
        showConfirmButton: false
      });

      this.router.navigate(['/login']);
    },
      (err) => {
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: 'Não foi possível deletar o Usuário! :(',
          timer: 2500,
          showConfirmButton: false
        });
        console.error("Algo de errado não está certo " + err);
      });
  }
}

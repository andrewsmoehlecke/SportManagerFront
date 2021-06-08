import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/services/api.service';
import Swal from 'sweetalert2';
import { UsuarioLogado } from 'src/usuarioLogado/usuario-logado';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {

  public formCadastro: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private api: ApiService,
    private router: Router,
    private usuarioLogado: UsuarioLogado,
  ) {
    this.initForm();
  }

  ngOnInit(): void {
  }

  public initForm(): void {
    this.formCadastro = this.formBuilder.group({
      idUsuario: [''],
      username: ['', Validators.required],
      email: ['', Validators.required],
      senha: ['', Validators.required],
      confirmar_senha: ['', Validators.required],
      dataCriacao: [''],
      fotoPerfil: [''],
    });
  }

  cadastrar() {
    if (this.formCadastro.valid) {
      if (this.formCadastro.value.senha == this.formCadastro.value.confirmar_senha) {

        this.api.cadastrarUsuario(this.formCadastro.value).subscribe((data) => {
          this.usuarioLogado.saveUsuarioLogado(data);

          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Usuario criado com sucesso!',
            timer: 2000,
            showConfirmButton: false
          });
          this.router.navigate(['/home']);
        },
          (err) => {
            Swal.fire({
              position: 'center',
              icon: 'error',
              title: 'Não foi possível efetuar o cadastro! :(',
              timer: 2500,
              showConfirmButton: false
            });
            console.error("Algo de errado não está certo " + err);
          });
      } else {
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: 'As senhas não coincidem! Tente Novamente',
          showConfirmButton: true
        });
      }
    } else {
      Swal.fire({
        position: 'center',
        icon: 'warning',
        title: 'Por favor, preencha todos os campos!',
        timer: 2500,
        showConfirmButton: false
      });
    }
  }

}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/services/api.service';
import { UsuarioLogado } from 'src/usuarioLogado/usuario-logado';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public formLogin: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private api: ApiService,
    private router: Router,
    private usuarioLogado: UsuarioLogado,
  ) {
    this.initForm();
  }

  public initForm(): void {
    this.formLogin = this.formBuilder.group({
      username: ['', Validators.required],
      senha: ['', Validators.required],
    });
  }

  ngOnInit(): void {
  }

  logar() {
    this.api.logarUsuario(this.formLogin.value).subscribe((data) => {
      this.usuarioLogado.saveUsuarioLogado(data);
      this.router.navigate(['/home']);
    },
      (err) => {
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: 'Usuário ou senha incorretos! :(',
          timer: 2500,
          showConfirmButton: false
        });
        console.error("Algo de errado não está certo " + err);
      });
  }
}

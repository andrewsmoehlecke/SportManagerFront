import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/services/api.service';
import Swal from 'sweetalert2';

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
  ) {
    this.initForm();
  }

  public initForm(): void {
    this.formCadastro = this.formBuilder.group({
      idUsuario: [''],
      username: ['', Validators.required],
      email: ['', Validators.required],
      senha: ['', Validators.required],
      dataCriacao: [''],
    });
  }

  ngOnInit(): void {
  }

  cadastrar() {
    this.api.cadastrarUsuario(this.formCadastro.value).subscribe((data) => {
      console.debug("Usuario Cadastrado");
    },
      (err) => {
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: 'Não foi possível efetuar o cadastro! :(',
          timer: 2000
        })
        console.error("Algo de errado não está certo " + err);
      });
  }

}

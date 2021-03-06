import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UsuarioDto } from 'src/model/UsuarioDto';
import { ApiService } from 'src/services/api.service';
import { UsuarioLogado } from 'src/usuarioLogado/usuario-logado';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-funcao-time',
  templateUrl: './funcao-time.component.html',
  styleUrls: ['./funcao-time.component.scss']
})
export class FuncaoTimeComponent implements OnInit {

  public formFuncaoTime: FormGroup;
  public usuario: UsuarioDto;

  constructor(
    private usuarioLogado: UsuarioLogado,
    private formBuilder: FormBuilder,
    private api: ApiService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.usuario = this.usuarioLogado.getUsuarioLogado();
    this.initForm();
  }

  criar() {
    this.api.criarFuncaoTime(this.formFuncaoTime.value).subscribe((data) => {
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Função criada!',
        timer: 2200,
        showConfirmButton: false
      });
    },
      (err) => {
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: 'Não foi possível cadastrar a Função de Time! :(',
          timer: 2200,
          showConfirmButton: false
        });
        console.error("Algo de errado não está certo " + err);
      });
  }

  public initForm(): void {
    this.formFuncaoTime = this.formBuilder.group({
      idFuncaoTime: [''],
      nome: ['', Validators.required],
    });
  }
}

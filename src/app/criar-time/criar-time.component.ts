import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioDto } from 'src/model/UsuarioDto';
import { ApiService } from 'src/services/api.service';
import { UsuarioLogado } from 'src/usuarioLogado/usuario-logado';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-criar-time',
  templateUrl: './criar-time.component.html',
  styleUrls: ['./criar-time.component.scss']
})
export class CriarTimeComponent implements OnInit {

  public usuario: UsuarioDto;
  public formTime: FormGroup;

  constructor(
    private usuarioLogado: UsuarioLogado,
    private api: ApiService,
    private router: Router,
    private formBuilder: FormBuilder,
  ) {
    this.initForm();
  }

  ngOnInit(): void {
    this.usuario = this.usuarioLogado.getUsuarioLogado();
  }

  public initForm(): void {
    this.formTime = this.formBuilder.group({
      idTime: [null],
      nomeTime: ['', Validators.required],
      numVitoria: [0],
      numEmpate: [0],
      numDerrota: [0],
      dataCriacao: ['', Validators.required],
      fotoTime: [''],
    });
  }

  criarTime() {
    this.api.criarTime(this.formTime.value).subscribe((data) => {
      this.router.navigate(['/time', { idTime: data.idTime }]);
    },
      (err) => {
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: 'Não foi possível criar o time! :(',
          timer: 2500,
          showConfirmButton: false
        });
        console.error("Algo de errado não está certo " + err);
      });
  }
}

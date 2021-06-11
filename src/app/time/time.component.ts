import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from 'src/services/api.service';
import { UsuarioDto } from 'src/model/UsuarioDto';
import { UsuarioLogado } from 'src/usuarioLogado/usuario-logado';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
import { TimeDto } from 'src/model/TimeDto';

@Component({
  selector: 'app-time',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.scss']
})
export class TimeComponent implements OnInit {

  public formTime: FormGroup;
  private usuario: UsuarioDto;
  private time: TimeDto;

  constructor(
    private formBuilder: FormBuilder,
    private api: ApiService,
    private usuarioLogado: UsuarioLogado,
    private route: ActivatedRoute,
  ) {
    this.initForm();
    this.usuario = this.usuarioLogado.getUsuarioLogado();
  }

  public initForm(): void {
    this.formTime = this.formBuilder.group({
      idTime: [''],
      nomeTime: ['', Validators.required],
      numVitoria: [''],
      numEmpate: [''],
      numDerrota: [''],
      dataCriacao: ['', Validators.required],
    });
  }

  ngOnInit() {
    this.findTimeById(Number(this.route.snapshot.paramMap.get('idTime')));
  }

  findTimeById(id: Number) {
    this.api.getTimeById(id).subscribe((data) => {
      this.formTime.patchValue({
        idTime: data.idTime,
        nomeTime: data.nomeTime,
        numVitoria: data.numVitoria,
        numEmpate: data.numEmpate,
        numDerrota: data.numDerrota,
        dataCriacao: data.dataCriacao,
      });
    },
      (err) => {
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: 'Não foi possível encontrar o time! :(',
          timer: 2500,
          showConfirmButton: false
        });
        console.error("Algo de errado não está certo " + err);
      });
  }

  updateTime() {

  }
}

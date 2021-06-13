import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { TimeDto } from 'src/model/TimeDto';
import { UsuarioDto } from 'src/model/UsuarioDto';
import { ApiService } from 'src/services/api.service';
import { UsuarioLogado } from 'src/usuarioLogado/usuario-logado';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-jogo',
  templateUrl: './jogo.component.html',
  styleUrls: ['./jogo.component.scss']
})
export class JogoComponent implements OnInit {

  public usuario: UsuarioDto;
  public formJogo: FormGroup;
  public time1: TimeDto;
  public time2: TimeDto;

  constructor(
    private usuarioLogado: UsuarioLogado,
    private formBuilder: FormBuilder,
    private api: ApiService,
    private route: ActivatedRoute,
  ) {
    this.initForm();
    this.usuario = this.usuarioLogado.getUsuarioLogado();
  }

  ngOnInit(): void {
    this.findTimeById(Number(this.route.snapshot.paramMap.get('idTimeJogo')));
  }

  findTimeById(id: Number) {
    this.api.getTimeJogoById(id).subscribe((data) => {
      this.formJogo.patchValue({
        idTimeJogo: data.idTimeJogo,
        local: data.local,
        pontuacaoTime1: data.pontuacaoTime1,
        pontuacaoTime2: data.pontuacaoTime2,
        dataJogo: data.dataJogo,
        time1: data.time1,
        time2: data.time2,
        titulo: data.titulo,
      });
    },
      (err) => {
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: 'Não foi possível encontrar o Jogo! :(',
          timer: 2200,
          showConfirmButton: false
        });
        console.error("Algo de errado não está certo " + err);
      });
  }

  public initForm(): void {
    this.formJogo = this.formBuilder.group({
      idTimeJogo: [''],
      local: [''],
      pontuacaoTime1: [''],
      pontuacaoTime2: [''],
      dataJogo: [''],
      time1: [''],
      time2: [''],
      titulo: [''],
    });
  }
}

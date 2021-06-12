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
        idTime1: data.idTime1,
        idTime2: data.idTime2,
      });

      this.getTimesById(data.idTime1, data.idTime2);
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

  getTimesById(idTime1: Number, idTime2: Number) {
    this.api.getTimeById(idTime1).subscribe((data) => {
      this.time1 = data;
    },
      (err) => {
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: 'Não foi possível encontrar o Time! :(',
          timer: 2200,
          showConfirmButton: false
        });
        console.error("Algo de errado não está certo " + err);
      });

    this.api.getTimeById(idTime2).subscribe((data) => {
      this.time2 = data;
    },
      (err) => {
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: 'Não foi possível encontrar o Time! :(',
          timer: 2200,
          showConfirmButton: false
        });
        console.error("Algo de errado não está certo " + err);
      });
  }

  public initForm(): void {
    this.formJogo = this.formBuilder.group({
      idTime: [''],
      nomeTime: ['', Validators.required],
      numVitoria: [''],
      numEmpate: [''],
      numDerrota: [''],
      dataCriacao: ['', Validators.required],
    });
  }
}

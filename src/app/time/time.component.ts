import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from 'src/services/api.service';
import { UsuarioDto } from 'src/model/UsuarioDto';
import { UsuarioLogado } from 'src/usuarioLogado/usuario-logado';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { UsuarioTimeDto } from 'src/model/UsuarioTimeDto';
import { FuncaoTimeDto } from 'src/model/FuncaoTimeDto';

@Component({
  selector: 'app-time',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.scss']
})
export class TimeComponent implements OnInit {

  public usuarios: UsuarioDto[];
  public funcaoTime: FuncaoTimeDto[];
  public formUsuarioTime: FormGroup;
  public formTime: FormGroup;
  public usuario: UsuarioDto;
  public listUsuarioTime: UsuarioTimeDto[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private api: ApiService,
    private usuarioLogado: UsuarioLogado,
    private route: ActivatedRoute,
    private router: Router,
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
      fotoTime: [''],
    });

    this.formUsuarioTime = this.formBuilder.group({
      idUsuarioTime: [''],
      dataEntrada: [''],
      cargo: [''],
      usuario: [''],
      time: [''],
      funcaoTime: [''],
    })
  }


  ngOnInit() {
    let idTime = Number(this.route.snapshot.paramMap.get('idTime'));
    this.api.getAllUsuario().subscribe((data) => {
      this.usuarios = data;
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

    this.api.getAllFuncaoTime().subscribe((data) => {
      this.funcaoTime = data;
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

    this.findTimeById(idTime);
    this.getUsuarioTimeByIdTime(idTime);
  }

  cadastrarJogador(id: Number) {
    this.router.navigate(['/usuario-time', { idTime: id }]);
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
        fotoTime: data.fotoTime,
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
    this.api.updateTime(this.formTime.value).subscribe((data) => {
      this.formTime.patchValue({
        idTime: data.idTime,
        nomeTime: data.nomeTime,
        numVitoria: data.numVitoria,
        numEmpate: data.numEmpate,
        numDerrota: data.numDerrota,
        dataCriacao: data.dataCriacao,
        fotoTime: data.fotoTime,
      });

      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Time atualizado!',
        timer: 2500,
        showConfirmButton: false
      });
    },
      (err) => {
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: 'Não foi possível atualizar o time! :(',
          timer: 2500,
          showConfirmButton: false
        });
        console.error("Algo de errado não está certo " + err);
      });
  }

  deleteTime(idTime: Number) {
    this.api.deleteTimeById(idTime).subscribe((data) => {
      Swal.fire({
        position: 'top',
        icon: 'success',
        title: 'Time deletado',
        timer: 2200,
        showConfirmButton: false
      });
      this.router.navigate(['/times']);
    },
      (err) => {
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: 'Não foi possível deletar o time! :(',
          timer: 2500,
          showConfirmButton: false
        });
        console.error("Algo de errado não está certo " + err);
      });
  }

  getUsuarioTimeByIdTime(idTime: Number) {
    this.api.getFuncaoTimeByIdTime(idTime).subscribe((data) => {
      this.listUsuarioTime = data;
    },
      (err) => {
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: 'Não foi possível encontrar Usuários neste Time! :(',
          timer: 2500,
          showConfirmButton: false
        });
        console.error("Algo de errado não está certo " + err);
      });
  }

  editarUsuarioTime(usuarioTime: UsuarioTimeDto) {
    this.router.navigate(['/editar-usuario-time', { usuarioTime: JSON.stringify(usuarioTime) }]);
  }
}

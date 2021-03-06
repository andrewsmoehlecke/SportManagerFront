import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FuncaoTimeDto } from 'src/model/FuncaoTimeDto';
import { TimeDto } from 'src/model/TimeDto';
import { UsuarioDto } from 'src/model/UsuarioDto';
import { ApiService } from 'src/services/api.service';
import { UsuarioLogado } from 'src/usuarioLogado/usuario-logado';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-usuario-time',
  templateUrl: './usuario-time.component.html',
  styleUrls: ['./usuario-time.component.scss']
})
export class UsuarioTimeComponent implements OnInit {

  public formUsuarioTime: FormGroup;
  public allFuncaoTime: FuncaoTimeDto[] = [];
  public allUsuarios: UsuarioDto[] = [];
  public time: TimeDto;
  public usuario: UsuarioDto;

  constructor(
    private api: ApiService,
    private router: Router,
    private formBuilder: FormBuilder,
    private usuarioLogado: UsuarioLogado,
    private route: ActivatedRoute
  ) {
    this.usuario = this.usuarioLogado.getUsuarioLogado();
  }

  ngOnInit(): void {
    this.api.getTimeById(Number(this.route.snapshot.paramMap.get('idTime'))).subscribe((data) => {
      this.time = data;
    });
    this.initForm();
    this.getAllFuncaoTime();
    this.getAllUsuarios();
  }

  getAllUsuarios() {
    this.api.getAllUsuario().subscribe((data) => {
      this.allUsuarios = data;
    },
      (err) => {
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: 'Não foi possível encontrar os Usuários! :(',
          timer: 2200,
          showConfirmButton: false
        });
        console.error("Algo de errado não está certo " + err);
      });
  }

  getAllFuncaoTime() {
    this.api.getAllFuncaoTime().subscribe((data) => {
      this.allFuncaoTime = data;
    },
      (err) => {
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: 'Não foi possível encontrar as Funções de Time! :(',
          timer: 2200,
          showConfirmButton: false
        });
        console.error("Algo de errado não está certo " + err);
      });
  }

  cadastrarUsuarioTime() {
    this.formUsuarioTime.value.time = this.time;
    this.api.cadastrarUsuarioTime(this.formUsuarioTime.value).subscribe((data) => {
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Usuário cadastrado no Time!',
        timer: 2200,
        showConfirmButton: false
      });
    },
      (err) => {
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: 'Não foi possível cadastrar o Usuário no Time! :(',
          timer: 2200,
          showConfirmButton: false
        });
        console.error("Algo de errado não está certo " + err);
      });
  }

  public initForm(): void {
    this.formUsuarioTime = this.formBuilder.group({
      idUsuarioTime: [''],
      dataEntrada: [''],
      cargo: [''],
      usuario: ['', Validators.required],
      time: ['', Validators.required],
      funcaoTime: ['', Validators.required],
    });
  }
}

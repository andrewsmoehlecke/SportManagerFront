import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { FuncaoTimeDto } from 'src/model/FuncaoTimeDto';
import { UsuarioDto } from 'src/model/UsuarioDto';
import { UsuarioTimeDto } from 'src/model/UsuarioTimeDto';
import { ApiService } from 'src/services/api.service';
import { UsuarioLogado } from 'src/usuarioLogado/usuario-logado';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editar-usuario-time',
  templateUrl: './editar-usuario-time.component.html',
  styleUrls: ['./editar-usuario-time.component.scss']
})
export class EditarUsuarioTimeComponent implements OnInit {

  public usuario: UsuarioDto;
  public usuarioTime: UsuarioTimeDto;
  public formUsuarioTime: FormGroup;
  public allFuncoesTime: FuncaoTimeDto[] = [];

  constructor(
    private usuarioLogado: UsuarioLogado,
    private route: ActivatedRoute,
    private api: ApiService,
    public formBuilder: FormBuilder,
  ) {
    this.usuario = this.usuarioLogado.getUsuarioLogado();
  }

  ngOnInit(): void {
    this.addValuestoForm(Number(this.route.snapshot.paramMap.get('idUsuarioTime')));
    this.initForm();
    this.getAllFuncaoTime();
  }

  addValuestoForm(id) {
    this.api.getUsuarioTimeById(id).subscribe((data) => {
      this.formUsuarioTime.patchValue({
        idUsuarioTime: data.idUsuarioTime,
        dataEntrada: data.dataEntrada,
        cargo: data.cargo,
        usuario: data.usuario,
        time: data.time,
        funcaoTime: data.funcaoTime,
      });
    }, (err) => {
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Não foi possível encontara o usuário! :(',
        timer: 2500,
        showConfirmButton: false
      });
      console.error("Algo de errado não está certo " + err);
    });
  }

  updateUsuarioTime() {
    this.api.updateUsuarioTime(this.formUsuarioTime.value).subscribe((data) => {
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Usuário atualizado!',
        timer: 2500,
        showConfirmButton: false
      });
      this.formUsuarioTime.patchValue({
        idUsuarioTime: data.idUsuarioTime,
        dataEntrada: data.dataEntrada,
        cargo: data.cargo,
        usuario: data.usuario,
        time: data.time,
        funcaoTime: data.funcaoTime,
      });
    }, (err) => {
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Não foi possível atualizar o usuário! :(',
        timer: 2500,
        showConfirmButton: false
      });
      console.error("Algo de errado não está certo " + err);
    });
  }

  getAllFuncaoTime() {
    this.api.getAllFuncaoTime().subscribe((data) => {
      this.allFuncoesTime = data;
    }, (err) => {
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Não foi possível buscar as Funções! :(',
        timer: 2500,
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

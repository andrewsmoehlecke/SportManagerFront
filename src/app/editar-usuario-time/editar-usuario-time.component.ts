import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { FuncaoTimeDto } from 'src/model/FuncaoTimeDto';
import { UsuarioTimeDto } from 'src/model/UsuarioTimeDto';
import { ApiService } from 'src/services/api.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editar-usuario-time',
  templateUrl: './editar-usuario-time.component.html',
  styleUrls: ['./editar-usuario-time.component.scss']
})
export class EditarUsuarioTimeComponent implements OnInit {

  public usuarioTime: UsuarioTimeDto;
  public formUsuarioTime: FormGroup;
  public allFuncoesTime: FuncaoTimeDto[] = [];

  constructor(
    private route: ActivatedRoute,
    private api: ApiService,
    public formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.usuarioTime = JSON.parse(this.route.snapshot.paramMap.get('usuarioTime'));
    this.getAllFuncaoTime();
    this.initForm();
  }

  updateUsuarioTime() {

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

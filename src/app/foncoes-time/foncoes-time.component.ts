import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FuncaoTimeDto } from 'src/model/FuncaoTimeDto';
import { UsuarioDto } from 'src/model/UsuarioDto';
import { ApiService } from 'src/services/api.service';
import { UsuarioLogado } from 'src/usuarioLogado/usuario-logado';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-foncoes-time',
  templateUrl: './foncoes-time.component.html',
  styleUrls: ['./foncoes-time.component.scss']
})
export class FoncoesTimeComponent implements OnInit {

  public allFuncoesTime: FuncaoTimeDto[] = [];
  public usuario: UsuarioDto;

  constructor(
    private api: ApiService,
    private usuarioLogado: UsuarioLogado,
  ) { }

  ngOnInit(): void {
    this.usuario = this.usuarioLogado.getUsuarioLogado();

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

}

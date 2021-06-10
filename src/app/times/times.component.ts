import { TimeDto } from 'src/model/TimeDto';
import { Component, OnInit } from '@angular/core';
import { UsuarioDto } from 'src/model/UsuarioDto';
import { ApiService } from 'src/services/api.service';
import { UsuarioLogado } from 'src/usuarioLogado/usuario-logado';

@Component({
  selector: 'app-times',
  templateUrl: './times.component.html',
  styleUrls: ['./times.component.scss']
})
export class TimesComponent implements OnInit {

  public usuario: UsuarioDto;
  public allTimes: TimeDto[] = [];

  constructor(
    private usuarioLogado: UsuarioLogado,
    private api: ApiService,
  ) {
    this.usuario = this.usuarioLogado.getUsuarioLogado();
  }

  ngOnInit(): void {
    this.api.getAllTimes().subscribe((data) => {
      this.allTimes = data;
    },
      (err) => {
        console.error("Algo de errado não está certo " + err);
      });
  }

}

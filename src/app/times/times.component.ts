import { Component, OnInit } from '@angular/core';
import { UsuarioDto } from 'src/model/UsuarioDto';
import { UsuarioLogado } from 'src/usuarioLogado/usuario-logado';

@Component({
  selector: 'app-times',
  templateUrl: './times.component.html',
  styleUrls: ['./times.component.scss']
})
export class TimesComponent implements OnInit {

  public usuario: UsuarioDto;
  constructor(
    private usuarioLogado: UsuarioLogado,
  ) {
    this.usuario = this.usuarioLogado.getUsuarioLogado();
   }

  ngOnInit(): void {
  }

}

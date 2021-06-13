import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TimeJogoDto } from 'src/model/TimeJogoDto';
import { UsuarioDto } from 'src/model/UsuarioDto';
import { ApiService } from 'src/services/api.service';
import { UsuarioLogado } from 'src/usuarioLogado/usuario-logado';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-jogos',
  templateUrl: './jogos.component.html',
  styleUrls: ['./jogos.component.scss']
})
export class JogosComponent implements OnInit {

  public usuario: UsuarioDto;
  public listTimeJogo: TimeJogoDto[];

  constructor(
    private usuarioLogado: UsuarioLogado,
    private api: ApiService,
    private router: Router,
  ) {
    this.usuario = this.usuarioLogado.getUsuarioLogado();
  }

  ngOnInit(): void {
    this.api.getAllTimeJogos().subscribe((data) => {
      this.listTimeJogo = data;
    }, (err) => {
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Não foram escontrados jogos! :(',
        timer: 2200,
        showConfirmButton: false
      });
      console.error("Algo de errado não está certo " + err);
    });
  }

  // chamar esta função passando o id quando clicar em um elemento da lista de TimeJogo no html
  editTimeJogo(idTimeJogo: Number) {
    this.router.navigate(['/jogo', { idTimeJogo: idTimeJogo }]);
  }
}

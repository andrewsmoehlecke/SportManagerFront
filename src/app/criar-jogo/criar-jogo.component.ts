import { Component, OnInit } from '@angular/core';
import { TimeDto } from 'src/model/TimeDto';
import { ApiService } from 'src/services/api.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-criar-jogo',
  templateUrl: './criar-jogo.component.html',
  styleUrls: ['./criar-jogo.component.scss']
})
export class CriarJogoComponent implements OnInit {

  public allTimes: TimeDto[] = [];

  constructor(
    private api: ApiService,
  ) { }

  ngOnInit(): void {

    this.api.getAllTimes().subscribe((data) => {
      console.debug(data)
      this.allTimes = data;
    },
      (err) => {
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: 'Não foi possível encontrar os Usuarios! :(',
          timer: 2200,
          showConfirmButton: false
        });
        console.error("Algo de errado não está certo " + err);
      });
  }

}

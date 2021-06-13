import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
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
  public formCriarJogo: FormGroup;

  constructor(
    private api: ApiService,
    private formBuilder: FormBuilder,
  ) {
    this.initForm();
  }

  ngOnInit(): void {
    this.api.getAllTimes().subscribe((data) => {
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

  criarJogo() {
    // conver from string to Date
    this.formCriarJogo.value.dataJogo = new Date(this.formCriarJogo.value.dataJogo);

    this.api.criarJogo(this.formCriarJogo.value).subscribe((data) => {
      console.debug(data);
    }, (err) => {
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Não foi possível criar o Jogo! :(',
        timer: 2200,
        showConfirmButton: false
      });
      console.error("Algo de errado não está certo " + err);
    });
  }

  public initForm(): void {
    this.formCriarJogo = this.formBuilder.group({
      idTimeJogo: [''],
      local: [''],
      pontuacaoTime1: [''],
      pontuacaoTime2: [''],
      dataJogo: [''],
      time1: [''],
      time2: [''],
      titulo: [''],
    });
  }
}

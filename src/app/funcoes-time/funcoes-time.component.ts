import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FuncaoTimeDto } from 'src/model/FuncaoTimeDto';
import { ApiService } from 'src/services/api.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-funcoes-time',
  templateUrl: './funcoes-time.component.html',
  styleUrls: ['./funcoes-time.component.scss']
})
export class FuncoesTimeComponent implements OnInit {

  public allFuncaoTime: FuncaoTimeDto[] = [];

  constructor(
    private api: ApiService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.api.getAllFuncaoTime().subscribe((data) => {
      this.allFuncaoTime = data;
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

  editFuncaoTime(id: Number) {
    this.router.navigate(['/modificar-funcao-time', { idFuncaoTime: id }]);
  }
}

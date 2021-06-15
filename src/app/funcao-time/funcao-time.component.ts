import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/services/api.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-funcao-time',
  templateUrl: './funcao-time.component.html',
  styleUrls: ['./funcao-time.component.scss']
})
export class FuncaoTimeComponent implements OnInit {

  public formFuncaoTime: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private api: ApiService,
  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  criar() {
    this.api.criarFuncaoTime(this.formFuncaoTime.value).subscribe((data) => {
    },
      (err) => {
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: 'Não foi possível cadastrar a Função de Time! :(',
          timer: 2200,
          showConfirmButton: false
        });
        console.error("Algo de errado não está certo " + err);
      });
  }

  public initForm(): void {
    this.formFuncaoTime = this.formBuilder.group({
      idFuncaoTime: [''],
      nome: ['', Validators.required],
    });
  }
}

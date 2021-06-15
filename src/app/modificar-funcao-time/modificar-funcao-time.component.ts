import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { FuncaoTimeDto } from 'src/model/FuncaoTimeDto';
import { ApiService } from 'src/services/api.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-modificar-funcao-time',
  templateUrl: './modificar-funcao-time.component.html',
  styleUrls: ['./modificar-funcao-time.component.scss']
})
export class ModificarFuncaoTimeComponent implements OnInit {

  public formFuncaoTime: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private api: ApiService,
    private route: ActivatedRoute,
  ) {
    this.initForm();
  }

  ngOnInit(): void {
    this.api.findFuncaoTimeById(Number(this.route.snapshot.paramMap.get('idFuncaoTime'))).subscribe((data) => {
      this.formFuncaoTime.patchValue({
        idFuncaoTime: data.idFuncaoTime,
        nome: data.nome,
      });
    }, (err) => {
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Função Time não encontrada! :(',
        timer: 2200,
        showConfirmButton: false
      });
      console.error("Algo de errado não está certo " + err);
    });
  }

  editar() {
    this.api.editarFuncaoTime(this.formFuncaoTime.value).subscribe((data) => {
      console.debug(data)
      this.formFuncaoTime.patchValue({
        idFuncaoTime: data.idFuncaoTime,
        nome: data.nome,
      });
    }, (err) => {
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Não foi possível editar a Função! :(',
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

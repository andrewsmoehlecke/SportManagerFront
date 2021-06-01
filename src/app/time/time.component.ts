import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from 'src/services/api.service';

@Component({
  selector: 'app-time',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.scss']
})
export class TimeComponent implements OnInit {

  public formTime: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private api: ApiService,
  ) {
    this.initForm();
  }

  public initForm(): void {
    this.formTime = this.formBuilder.group({
      nomeTime: ['', Validators.required],
      numVitoria: [''],
      numEmpate: [''],
      numDerrota: [''],
      dataCriacao: ['', Validators.required],
    });
  }

  ngOnInit() {
    let id_time = 1;

    this.api.getTimeById(id_time).subscribe((data) => {
      console.debug(data.nomeTime)
      this.formTime.patchValue({
        id: data.id_time,
        nomeTime: data.nomeTime,
        numVitoria: data.numVitoria,
        numEmpate: data.numEmpate,
        numDerrota: data.numDerrota,
        dataCriacao: data.dataCriacao,
      });
      console.debug("Recebeu o Form");
    },
      (err) => {
        console.error("Algo de errado n está certo " + err);
      });
  }

}

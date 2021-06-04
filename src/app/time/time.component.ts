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
      id_time: [''],
      nomeTime: ['', Validators.required],
      numVitoria: [''],
      numEmpate: [''],
      numDerrota: [''],
      dataCriacao: ['', Validators.required],
    });
  }

  ngOnInit() {
    let idTime = 1;

    this.api.getTimeById(idTime).subscribe((data) => {
      console.debug(data.idTime + ", " + data.nomeTime);
      this.formTime.patchValue({
        idTime: data.idTime,
        nomeTime: data.nomeTime,
        numVitoria: data.numVitoria,
        numEmpate: data.numEmpate,
        numDerrota: data.numDerrota,
        dataCriacao: data.dataCriacao,
      });
      this.formTime = this.formTime.value;
      console.debug(this.formTime);
    },
      (err) => {
        console.error("Algo de errado não está certo " + err);
      });
  }

}

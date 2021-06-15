import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from 'src/services/api.service';
import { UsuarioDto } from 'src/model/UsuarioDto';
import { UsuarioLogado } from 'src/usuarioLogado/usuario-logado';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-time',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.scss']
})
export class TimeComponent implements OnInit {

  public formTime: FormGroup;
  public usuario: UsuarioDto;

  constructor(
    private formBuilder: FormBuilder,
    private api: ApiService,
    private usuarioLogado: UsuarioLogado,
    private route: ActivatedRoute,
    private router: Router,
  ) {
    this.initForm();
    this.usuario = this.usuarioLogado.getUsuarioLogado();
  }

  public initForm(): void {
    this.formTime = this.formBuilder.group({
      idTime: [''],
      nomeTime: ['', Validators.required],
      numVitoria: [''],
      numEmpate: [''],
      numDerrota: [''],
      dataCriacao: ['', Validators.required],
      fotoTime: [''],
    });
  }

  ngOnInit() {
    this.findTimeById(Number(this.route.snapshot.paramMap.get('idTime')));
  }

  findTimeById(id: Number) {
    this.api.getTimeById(id).subscribe((data) => {
      this.formTime.patchValue({
        idTime: data.idTime,
        nomeTime: data.nomeTime,
        numVitoria: data.numVitoria,
        numEmpate: data.numEmpate,
        numDerrota: data.numDerrota,
        dataCriacao: data.dataCriacao,
        fotoTime: data.fotoTime,
      });
    },
      (err) => {
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: 'Não foi possível encontrar o time! :(',
          timer: 2500,
          showConfirmButton: false
        });
        console.error("Algo de errado não está certo " + err);
      });
  }

  updateTime() {
    this.api.updateTime(this.formTime.value).subscribe((data) => {
      this.formTime.patchValue({
        idTime: data.idTime,
        nomeTime: data.nomeTime,
        numVitoria: data.numVitoria,
        numEmpate: data.numEmpate,
        numDerrota: data.numDerrota,
        dataCriacao: data.dataCriacao,
        fotoTime: data.fotoTime,
      });

      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Time atualizado!',
        timer: 2500,
        showConfirmButton: false
      });
    },
      (err) => {
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: 'Não foi possível atualizar o time! :(',
          timer: 2500,
          showConfirmButton: false
        });
        console.error("Algo de errado não está certo " + err);
      });
  }

  deleteTime(idTime: Number) {
    this.api.deleteTimeById(idTime).subscribe((data) => {
      Swal.fire({
        position: 'top',
        icon: 'success',
        title: 'Time deletado',
        timer: 2200,
        showConfirmButton: false
      });
      this.router.navigate(['/times']);
    },
      (err) => {
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: 'Não foi possível deletar o time! :(',
          timer: 2500,
          showConfirmButton: false
        });
        console.error("Algo de errado não está certo " + err);
      });
  }
}

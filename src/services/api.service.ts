import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { TimeDto } from 'src/model/TimeDto';
import { UsuarioDto } from 'src/model/UsuarioDto';
import { TimeJogoDto } from 'src/model/TimeJogoDto';
import { createOfflineCompileUrlResolver } from '@angular/compiler';
import { FuncaoTimeDto } from 'src/model/FuncaoTimeDto';
import { UsuarioTimeDto } from 'src/model/UsuarioTimeDto';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private readonly API = 'http://localhost:2003'

  constructor(private http: HttpClient) { }

  public getURL(url: string[]) {
    return this.API + '/' + url.join('/');
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
  }

  getTimeById(id_time: Number): Observable<TimeDto> {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    });

    return this.http.get<TimeDto>(this.getURL(["time/" + id_time]), { headers: headers })
      .pipe(
        map((data) => {
          return data;
        }),
        catchError((err: HttpErrorResponse) => {
          return Observable.throw(this.handleError(err));
        })
      );
  }

  getAllTimes(): Observable<TimeDto[]> {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    });

    return this.http.get<TimeDto[]>(this.getURL(["time"]), { headers: headers })
      .pipe(
        map((data) => {
          return data;
        }),
        catchError((err: HttpErrorResponse) => {
          return Observable.throw(this.handleError(err));
        })
      );
  }

  cadastrarUsuario(form): Observable<any> {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    });

    return this.http.post<any>(this.getURL(["usuario"]), JSON.stringify(form), { headers: headers })
      .pipe(
        map((data) => {
          return data;
        }),
        catchError((err: HttpErrorResponse) => {
          return Observable.throw(this.handleError(err));
        })
      );
  }

  logarUsuario(form): Observable<UsuarioDto> {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    });

    return this.http.post<UsuarioDto>(this.getURL(["usuario/login"]), JSON.stringify(form), { headers: headers })
      .pipe(
        map((data) => {
          return data;
        }),
        catchError((err: HttpErrorResponse) => {
          return Observable.throw(this.handleError(err));
        })
      );
  }

  getUsuarioById(id: Number): Observable<UsuarioDto> {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    });

    return this.http.get<UsuarioDto>(this.getURL(["usuario/" + id]), { headers: headers })
      .pipe(
        map((data) => {
          return data;
        }),
        catchError((err: HttpErrorResponse) => {
          return Observable.throw(this.handleError(err));
        })
      );
  }

  updateTime(time: TimeDto) {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    });

    return this.http.put<TimeDto>(this.getURL(["time/" + time.idTime]), JSON.stringify(time), { headers: headers })
      .pipe(
        map((data) => {
          return data;
        }),
        catchError((err: HttpErrorResponse) => {
          return Observable.throw(this.handleError(err));
        })
      );
  }

  updateJogo(jogo: TimeJogoDto) {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    });

    return this.http.put<TimeJogoDto>(this.getURL(["time_jogo/" + jogo.idTimeJogo]), JSON.stringify(jogo), { headers: headers })
      .pipe(
        map((data) => {
          console.debug("Retorno Back")
          console.debug(data);
          return data;
        }),
        catchError((err: HttpErrorResponse) => {
          return Observable.throw(this.handleError(err));
        })
      );
  }

  deleteJogoById(id: Number): Observable<any> {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    });

    return this.http.delete<any>(this.getURL(["time_jogo/" + id]), { headers: headers })
      .pipe(
        map((data) => {
          return data;
        }),
        catchError((err: HttpErrorResponse) => {
          return Observable.throw(this.handleError(err));
        })
      );
  }

  deleteTimeById(id: Number): Observable<any> {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    });

    return this.http.delete<any>(this.getURL(["time/" + id]), { headers: headers })
      .pipe(
        map((data) => {
          return data;
        }),
        catchError((err: HttpErrorResponse) => {
          return Observable.throw(this.handleError(err));
        })
      );
  }

  getAllUsuario(): Observable<UsuarioDto[]> {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    });

    return this.http.get<UsuarioDto[]>(this.getURL(["usuario"]), { headers: headers })
      .pipe(
        map((data) => {
          return data;
        }),
        catchError((err: HttpErrorResponse) => {
          return Observable.throw(this.handleError(err));
        })
      );
  }

  updateUsuario(usuario: UsuarioDto) {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    });

    return this.http.put<UsuarioDto>(this.getURL(["usuario/" + usuario.idUsuario]), JSON.stringify(usuario), { headers: headers })
      .pipe(
        map((data) => {
          return data;
        }),
        catchError((err: HttpErrorResponse) => {
          return Observable.throw(this.handleError(err));
        })
      );
  }

  deleteUsuarioById(id: Number): Observable<any> {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    });

    return this.http.delete<any>(this.getURL(["usuario/" + id]), { headers: headers })
      .pipe(
        map((data) => {
          return data;
        }),
        catchError((err: HttpErrorResponse) => {
          return Observable.throw(this.handleError(err));
        })
      );
  }

  getAllTimeJogos(): Observable<TimeJogoDto[]> {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    });

    return this.http.get<TimeJogoDto[]>(this.getURL(["time_jogo"]), { headers: headers })
      .pipe(
        map((data) => {
          return data;
        }),
        catchError((err: HttpErrorResponse) => {
          return Observable.throw(this.handleError(err));
        })
      );
  }

  getTimeJogoById(id: Number): Observable<TimeJogoDto> {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    });

    return this.http.get<TimeJogoDto>(this.getURL(["time_jogo/" + id]), { headers: headers })
      .pipe(
        map((data) => {
          return data;
        }),
        catchError((err: HttpErrorResponse) => {
          return Observable.throw(this.handleError(err));
        })
      );
  }

  criarJogo(form: TimeJogoDto) {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    });

    return this.http.post<TimeJogoDto>(this.getURL(["time_jogo"]), form, { headers: headers })
      .pipe(
        map((data) => {
          return data;
        }),
        catchError((err: HttpErrorResponse) => {
          return Observable.throw(this.handleError(err));
        })
      );
  }

  criarTime(form) {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    });

    return this.http.post<TimeDto>(this.getURL(["time"]), form, { headers: headers })
      .pipe(
        map((data) => {
          return data;
        }),
        catchError((err: HttpErrorResponse) => {
          return Observable.throw(this.handleError(err));
        })
      );
  }

  criarFuncaoTime(form) {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    });

    return this.http.post(this.getURL(["funcao_time"]), form, { headers: headers })
      .pipe(
        map((data) => {
          return data;
        }),
        catchError((err: HttpErrorResponse) => {
          return Observable.throw(this.handleError(err));
        })
      );
  }

  getAllFuncaoTime(): Observable<FuncaoTimeDto[]> {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    });

    return this.http.get<FuncaoTimeDto[]>(this.getURL(["funcao_time"]), { headers: headers })
      .pipe(
        map((data) => {
          return data;
        }),
        catchError((err: HttpErrorResponse) => {
          return Observable.throw(this.handleError(err));
        })
      );
  }

  cadastrarUsuarioTime(form) {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    });

    return this.http.post(this.getURL(["usuario_time"]), form, { headers: headers })
      .pipe(
        map((data) => {
          return data;
        }),
        catchError((err: HttpErrorResponse) => {
          return Observable.throw(this.handleError(err));
        })
      );
  }

  findFuncaoTimeById(id) {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    });

    return this.http.get<FuncaoTimeDto>(this.getURL(["funcao_time/" + id]), { headers: headers })
      .pipe(
        map((data) => {
          return data;
        }),
        catchError((err: HttpErrorResponse) => {
          return Observable.throw(this.handleError(err));
        })
      );
  }

  editarFuncaoTime(form) {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    });

    return this.http.put<FuncaoTimeDto>(this.getURL(["funcao_time/" + form.idFuncaoTime]), form, { headers: headers })
      .pipe(
        map((data) => {
          return data;
        }),
        catchError((err: HttpErrorResponse) => {
          return Observable.throw(this.handleError(err));
        })
      );
  }

  getFuncaoTimeByIdTime(id: Number) {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    });

    return this.http.get<UsuarioTimeDto[]>(this.getURL(["usuario_time/time/" + id]), { headers: headers })
      .pipe(
        map((data) => {
          return data;
        }),
        catchError((err: HttpErrorResponse) => {
          return Observable.throw(this.handleError(err));
        })
      );
  }

  deleteFuncaoTime(id: Number) {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    });

    return this.http.delete(this.getURL(["funcao_time/" + id]), { headers: headers })
      .pipe(
        map((data) => {
          return data;
        }),
        catchError((err: HttpErrorResponse) => {
          return Observable.throw(this.handleError(err));
        })
      );
  }

  updateUsuarioTime(data: UsuarioTimeDto) {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    });

    return this.http.put<UsuarioTimeDto>(this.getURL(["usuario_time/" + data.idUsuarioTime]), data, { headers: headers })
      .pipe(
        map((data) => {
          return data;
        }),
        catchError((err: HttpErrorResponse) => {
          return Observable.throw(this.handleError(err));
        })
      );
  }

  getUsuarioTimeById(id: Number) {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    });

    return this.http.get<UsuarioTimeDto>(this.getURL(["usuario_time/" + id]), { headers: headers })
      .pipe(
        map((data) => {
          console.debug(data)
          return data;
        }),
        catchError((err: HttpErrorResponse) => {
          return Observable.throw(this.handleError(err));
        })
      );
  }

  deleteUsuarioTime(id: Number) {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    });

    return this.http.delete(this.getURL(["usuario_time/" + id]), { headers: headers })
      .pipe(
        map((data) => {
          console.debug(data)
          return data;
        }),
        catchError((err: HttpErrorResponse) => {
          return Observable.throw(this.handleError(err));
        })
      );
  }
}

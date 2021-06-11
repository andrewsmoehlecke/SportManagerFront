import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { TimeDto } from 'src/model/TimeDto';
import { UsuarioDto } from 'src/model/UsuarioDto';

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
          console.debug(data);
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
          console.debug(data);
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
          console.debug(data)
          return data;
        }),
        catchError((err: HttpErrorResponse) => {
          return Observable.throw(this.handleError(err));
        })
      );
  }
}

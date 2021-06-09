import { HomeComponent } from './home/home.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { LoginComponent } from './login/login.component';
import { TimeComponent } from './time/time.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UsuarioLogado } from 'src/usuarioLogado/usuario-logado';
import { TimesComponent } from './times/times.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TimeComponent,
    CadastroComponent,
    HomeComponent,
    TimesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    UsuarioLogado,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

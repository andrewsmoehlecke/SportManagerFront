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
import { MatListModule } from '@angular/material/list';
import { PerfilComponent } from './perfil/perfil.component';
import { JogosComponent } from './jogos/jogos.component';
import { JogoComponent } from './jogo/jogo.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FuncaoTimeComponent } from './funcao-time/funcao-time.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TimeComponent,
    CadastroComponent,
    HomeComponent,
    TimesComponent,
    PerfilComponent,
    JogosComponent,
    JogoComponent,
    FuncaoTimeComponent,
  ],
  imports: [
    MatListModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
  ],
  providers: [
    UsuarioLogado,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

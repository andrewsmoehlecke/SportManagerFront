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
import { MatSelectModule } from '@angular/material/select';
import { CriarJogoComponent } from './criar-jogo/criar-jogo.component';
import { UsuarioTimeComponent } from './usuario-time/usuario-time.component';
import { CriarTimeComponent } from './criar-time/criar-time.component';
import { ModificarFuncaoTimeComponent } from './modificar-funcao-time/modificar-funcao-time.component';
import { FoncoesTimeComponent } from './foncoes-time/foncoes-time.component';
import { EditarUsuarioTimeComponent } from './editar-usuario-time/editar-usuario-time.component';

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
    CriarJogoComponent,
    UsuarioTimeComponent,
    CriarTimeComponent,
    ModificarFuncaoTimeComponent,
    FoncoesTimeComponent,
    EditarUsuarioTimeComponent,
  ],
  imports: [
    MatSelectModule,
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

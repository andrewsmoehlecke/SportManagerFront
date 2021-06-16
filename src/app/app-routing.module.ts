import { JogosComponent } from './jogos/jogos.component';
import { JogoComponent } from './jogo/jogo.component';
import { PerfilComponent } from './perfil/perfil.component';
import { TimesComponent } from './times/times.component';
import { HomeComponent } from './home/home.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { LoginComponent } from './login/login.component';
import { TimeComponent } from './time/time.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CriarJogoComponent } from './criar-jogo/criar-jogo.component';
import { CriarTimeComponent } from './criar-time/criar-time.component';
import { UsuarioTimeComponent } from './usuario-time/usuario-time.component';
import { FuncaoTimeComponent } from './funcao-time/funcao-time.component';
import { ModificarFuncaoTimeComponent } from './modificar-funcao-time/modificar-funcao-time.component';
import { FuncoesTimeComponent } from './funcoes-time/funcoes-time.component';

const routes: Routes = [
  {
    path: 'time',
    component: TimeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'cadastro',
    component: CadastroComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'times',
    component: TimesComponent
  },
  {
    path: 'perfil',
    component: PerfilComponent
  },
  {
    path: 'jogo',
    component: JogoComponent
  },
  {
    path: 'jogos',
    component: JogosComponent
  },
  {
    path: 'criar-jogo',
    component: CriarJogoComponent,
  },
  {
    path: 'criar-time',
    component: CriarTimeComponent,
  },
  {
    path: 'usuario-time',
    component: UsuarioTimeComponent,
  },
  {
    path: 'funcao-time',
    component: FuncaoTimeComponent,
  },
  {
    path: 'modificar-funcao-time',
    component: ModificarFuncaoTimeComponent,
  },
  {
    path: '**',
    redirectTo: '/login',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

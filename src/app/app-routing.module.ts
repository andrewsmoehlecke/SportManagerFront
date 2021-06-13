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

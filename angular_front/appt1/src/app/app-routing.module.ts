import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { PostagemComponent } from './components/postagem/postagem.component';


const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'postagem', component: PostagemComponent },
    { path: '', redirectTo: '/', pathMatch: 'full' },
    { path: '**', redirectTo: '/' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
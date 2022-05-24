import { NgModule }                         from '@angular/core';
import { BrowserModule }                    from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule }                 from '@angular/common/http';
import { NoopAnimationsModule }             from '@angular/platform-browser/animations';

import { MatButtonModule }     from '@angular/material/button';
import { MatCardModule }       from '@angular/material/card';
import { MatFormFieldModule }  from '@angular/material/form-field';
import { MatIconModule }       from '@angular/material/icon';
import { MatInputModule }      from '@angular/material/input';

import { AppRoutingModule }   from './app-routing.module';

import { AppComponent }       from './app.component';
import { LoginComponent }     from './components/login/login.component';
import { PostagemComponent }  from './components/postagem/postagem.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PostagemComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    NoopAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

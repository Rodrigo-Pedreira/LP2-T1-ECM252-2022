import { NgModule }                         from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BrowserModule }        from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent }       from './app.component';
import { LoginComponent }     from './components/login/login.component';
import { PostagemComponent }  from './components/postagem/postagem.component';

import { MatButtonModule }     from '@angular/material/button';
import { MatCardModule }       from '@angular/material/card';
import { MatFormFieldModule }  from '@angular/material/form-field';
import { MatIconModule }       from '@angular/material/icon';
import { MatInputModule }      from '@angular/material/input';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PostagemComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
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

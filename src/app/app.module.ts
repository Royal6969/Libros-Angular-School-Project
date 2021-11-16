import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LibroListaComponent } from './libros/libro-lista/libro-lista.component';
import { AutorListaComponent } from './autores/autor-lista/autor-lista.component';
import { NotFoundError404Component } from './components/not-found-error404/not-found-error404.component';
import { LibroDetallesComponent } from './libros/libro-detalles/libro-detalles.component';
import { LibroOpinionesComponent } from './libros/libro-opiniones/libro-opiniones.component';
import { LibroImagenesComponent } from './libros/libro-imagenes/libro-imagenes.component';
import { HomeComponent } from './components/home/home.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { HttpClientTestComponent } from './components/http-client-test/http-client-test.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LibroListaComponent,
    AutorListaComponent,
    NotFoundError404Component,
    LibroDetallesComponent,
    LibroOpinionesComponent,
    LibroImagenesComponent,
    HomeComponent,
    InicioComponent,
    HttpClientTestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

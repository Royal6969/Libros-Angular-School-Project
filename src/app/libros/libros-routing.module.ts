import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LibroListaComponent } from './libro-lista/libro-lista.component';
import { LibroDetallesComponent } from './libro-detalles/libro-detalles.component';
import { LibroImagenesComponent } from './libro-imagenes/libro-imagenes.component';
import { LibroOpinionesComponent } from './libro-opiniones/libro-opiniones.component';
import { NotFoundError404Component } from '../components/not-found-error404/not-found-error404.component';

const routes: Routes = [
  {
    path: '',
    component: LibroListaComponent
  },
  {
    path: 'libros/:id',
    component: LibroDetallesComponent,
    children: [
      { 
        path: 'imagenes', 
        component: LibroImagenesComponent 
      },
      { 
        path: 'opiniones', 
        component: LibroOpinionesComponent 
      },
      { 
        path: '', 
        redirectTo: 'imagenes', 
        pathMatch: 'full' 
      },
      { 
        path: '**', 
        component: NotFoundError404Component 
      }
    ]
  },
]

@NgModule({
  declarations: [],
  imports: [
    // CommonModule
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class LibrosRoutingModule { }

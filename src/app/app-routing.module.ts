import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutorListaComponent } from './autores/autor-lista/autor-lista.component';
import { LibroDetallesComponent } from './libros/libro-detalles/libro-detalles.component';
import { LibroListaComponent } from './libros/libro-lista/libro-lista.component';
import { NotFoundError404Component } from './components/not-found-error404/not-found-error404.component';
import { LibroImagenesComponent } from './libros/libro-imagenes/libro-imagenes.component';
import { LibroOpinionesComponent } from './libros/libro-opiniones/libro-opiniones.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { HttpClientTestComponent } from './components/http-client-test/http-client-test.component';

const routes: Routes = [
  {
    path: 'inicio',
    component: InicioComponent
  },
  { 
    path: 'libros', 
    // component: LibroListaComponent
    loadChildren: () => import('./libros/libros.module').then((m) => m.LibrosModule) 
  },
  { 
    path: 'autores', 
    // component: AutoresListaComponent
    loadChildren: () => import('./autores/autor.module').then((m) => m.AutorModule) 
  },
  {
    path: 'http',
    component: HttpClientTestComponent
  },
  // {
  //   path: 'libros/:id',
  //   component: LibroDetallesComponent,
  //   children: [
  //     { 
  //       path: 'imagenes', 
  //       component: LibroImagenesComponent 
  //     },
  //     { 
  //       path: 'opiniones', 
  //       component: LibroOpinionesComponent 
  //     },
  //     { 
  //       path: '', 
  //       redirectTo: 'imagenes', 
  //       pathMatch: 'full' 
  //     },
  //     { 
  //       path: '**', 
  //       component: NotFoundError404Component 
  //     }
  //   ]
  // },
  // { 
  //   path: 'autores', 
  //   component: AutorListaComponent 
  // },
  // { 
  //   path: '', 
  //   redirectTo: '/libros', 
  //   pathMatch: 'full' 
  // },
  { 
    path: '', 
    redirectTo: '/inicio', 
    pathMatch: 'full' 
  },
  { 
    path: '**',
    component: NotFoundError404Component 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

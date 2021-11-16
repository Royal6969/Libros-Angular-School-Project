import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { AutorListaComponent } from './autor-lista/autor-lista.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: AutorListaComponent
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
export class AutorRoutingModule { }

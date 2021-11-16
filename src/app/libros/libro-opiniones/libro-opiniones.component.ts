import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { LibroModel } from 'src/app/interfaces/libro-model';
import { OpinionModel } from 'src/app/interfaces/opinion-model';
import { LIBROS, OPINIONES } from 'src/app/mocks/libro-mock';

@Component({
  selector: 'app-libro-opiniones',
  templateUrl: './libro-opiniones.component.html',
  styleUrls: ['./libro-opiniones.component.css']
})
export class LibroOpinionesComponent implements OnInit {

  libro : LibroModel | undefined;
  opiniones: OpinionModel[] = [];

  constructor(
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activatedRoute.parent?.paramMap
      .subscribe((paramMaps: ParamMap) => {
        let id = Number(paramMaps.get('id'));
        this.libro = LIBROS[id];
      })
      // método para las opiniones
      this.opinionesDeCadaLibro();
  }

  opinionesDeCadaLibro(): void {
    this.opiniones = OPINIONES.filter(
      (item) => item.idLibro == this.libro?.id);
  }

}

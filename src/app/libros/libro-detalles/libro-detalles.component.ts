import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { LibroModel } from '../../interfaces/libro-model';
import { LIBROS } from '../../mocks/libro-mock';

@Component({
  selector: 'app-libro-detalles',
  templateUrl: './libro-detalles.component.html',
  styleUrls: ['./libro-detalles.component.css']
})
export class LibroDetallesComponent implements OnInit {

  libro: LibroModel | undefined;

  constructor(
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap
      .subscribe((paramMaps: ParamMap) => {
        let id = Number(paramMaps.get('id'));
        this.libro = LIBROS[id];
        this.libro = LIBROS.find((item) => item.id === id);
      })
  }

}

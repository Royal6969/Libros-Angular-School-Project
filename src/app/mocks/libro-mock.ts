import { LibroModel } from "../interfaces/libro-model";
import { OpinionModel } from "../interfaces/opinion-model";

export const LIBROS: LibroModel[] = [
    {
        id: 0,
        titulo: "El Quijote",
        autor: "Cervantes",
        imagen: "../../assets/img/quijote.jpg"
    }, 
    { 
        id: 1,
        titulo: "Hamlet",
        autor: "Shakespeare",
        imagen: "../../assets/img/hamlet.jpg"
    }
];

export const OPINIONES: OpinionModel[] = [
    {
        id: 0,
        idLibro: 0, 
        titulo: 'Gran libro', 
        descripcion: 'Me ha gustado mucho este libro es uno de mis favoritos blablabla'
    },
    {
        id: 1,
        idLibro: 1, 
        titulo: 'Libro preferido', 
        descripcion: 'Me ha gustado mucho este libro es uno de mis favoritos blablabla'
    },
    {
        id: 2,
        idLibro: 2,
        titulo: 'Buena Segunda parte', 
        descripcion: 'Me ha gustado mucho este libro es uno de mis favoritos blablabla', 
    },
]
  
import { Component, OnInit } from '@angular/core';

import { Personaje } from '../interfaces/dbz.interface';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent {

  personajes: Personaje [] =[
    {
      nombre: 'Goku',
      poder: 15000
    },
    {
      nombre: 'vegeta',
      poder: 7500
    }
  ];

  nuevo: Personaje = {
      nombre: 'Maestro Roshi',
      poder: 1000
  }

  agregarNuevoPersonaje( argumento: Personaje ) {
   // debugger; //breakpoint
    this.personajes.push( argumento );
  }


}

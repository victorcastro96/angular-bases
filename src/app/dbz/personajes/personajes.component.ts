import { Component, Input } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html'
})
export class PersonajesComponent  {
  @Input('data') personajes: Personaje[] = []; //data es el nombre que tiene personajes dentro de este componente

}

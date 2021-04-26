import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent  {

  heroes: string[] = ['Spiderman','Hulk','Iroman','Thor']
  heroeBorrado: string = '';

  BorrarHeroe(){
    this.heroeBorrado = this.heroes.shift() || '';
  }
}

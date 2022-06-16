import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {
  heroes: string[] = ['Spiderman','Iroman','Hulk','Thor','Capitán America'];
  borrados: string = '';
  borrarHeroe(): void{
    this.borrados = this.heroes.shift() || '';
  }
  
}

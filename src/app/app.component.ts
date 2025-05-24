import { Component } from '@angular/core';
import { RecursoFormComponent } from './components/recurso-form/recurso-form.component';
import { RecursoListComponent } from './components/recurso-list/recurso-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RecursoFormComponent, RecursoListComponent], // Aquí debe ir con corchetes y separado por comas
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
//Componente Padre

  // Guarda los recursos
  recursos: any[] = [];

  //Agrega los recursos
  agregarRecurso(nuevoRecurso: any) {
    this.recursos = [...this.recursos, nuevoRecurso];
  }

  //Subraya el adquirido
  toggleAdquirido(index: number) {
    this.recursos = this.recursos.map((rec, i) => {
      if (i === index) rec.adquirido = !rec.adquirido;
      return rec;
    });
  }

  //Elimina el recurso
  eliminarRecurso(index: number) {
    this.recursos = this.recursos.filter((_, i) => i !== index);
  }
}


import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-recurso-form',
  standalone: true, 
  imports: [FormsModule], // IMportamos FormsModule para usar ngModel
  templateUrl: './recurso-form.component.html',
  styleUrl: './recurso-form.component.css'
})
export class RecursoFormComponent {
  nombre: string = '';
  categoria: string = '';
  prioridad: string = '';

  //Emite el evento de agregar los datos
  @Output() recursoAgregado = new EventEmitter<any>();

  //Recibe los recursos
  agregarRecurso() {
    if (this.nombre && this.categoria && this.prioridad) {
      this.recursoAgregado.emit({
        nombre: this.nombre,
        categoria: this.categoria,
        prioridad: this.prioridad,
        adquirido: false,
      });

      // Limpia los campos del formulario
      this.nombre = '';
      this.categoria = '';
      this.prioridad = '';
    }
  }
}


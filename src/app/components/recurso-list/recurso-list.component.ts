// src/app/components/recurso-list/recurso-list.component.ts
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-recurso-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './recurso-list.component.html',
  styleUrls: ['./recurso-list.component.css']
})
export class RecursoListComponent {
  @Input() recursos: any[] = [];

  @Output() toggleAdquirido = new EventEmitter<number>();
  @Output() eliminarRecurso = new EventEmitter<number>();

  marcarAdquirido(index: number) {
    this.toggleAdquirido.emit(index);
  }

  borrarRecurso(index: number) {
    this.eliminarRecurso.emit(index);
  }
}

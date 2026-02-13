import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  philosophyItems = [
    {
      title: 'Unión y Camaradería',
      description: 'Creemos en la fuerza de la unidad. Cada miembro es una raíz que sostiene el árbol de nuestro gremio.',
      icon: '🤝'
    },
    {
     title: 'Honor y Estrategia',
     description: 'Luchamos con honor y planificamos cada movimiento. La victoria sin gloria no es victoria.',
      icon: '♟️'
   },
    {
     title: 'Crecimiento Colectivo',
     description: 'El éxito individual se celebra, pero el crecimiento colectivo se prioriza.',
     icon: '📈'
    },
    {
      title: 'Respeto a la Naturaleza',
      description: 'Somos guardianes de los bosques oscuros, protectores del equilibrio natural.',
      icon: '🌿'
    }
  ];
}
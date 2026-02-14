import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface StatCard {
  icon: string;
  value: string;
  label: string;
  description: string;
  color: string;
}

@Component({
  selector: 'app-stats',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent {
  stats: StatCard[] = [
    {
      icon: '👥',
      value: '30+',
      label: 'Miembros Activos',
      description: 'Guerreros unidos bajo la misma bandera',
      color: 'green'
    },
    {
      icon: '🗓️',
      value: '7+',
      label: 'Eventos Semanales',
      description: 'Actividades estratégicas organizadas',
      color: 'gold'
    },
    {
      icon: '🏰',
      value: '0',
      label: 'Castillos Conquistados',
      description: 'Fortalezas bajo nuestro dominio',
      color: 'green'
    },
    {
      icon: '🗺️',
      value: '0',
      label: 'Territorios Controlados',
      description: 'Tierras protegidas por nuestro gremio',
      color: 'gold'
    }
  ];
}
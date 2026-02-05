import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Rule {
  icon: string;
  title: string;
  description: string;
  color: string;
}

@Component({
  selector: 'app-rules',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rules.component.html',
  styleUrls: ['./rules.component.css']
})
export class RulesComponent {
  rules: Rule[] = [
    {
      icon: '🎯',
      title: 'Actitud Positiva',
      description: 'Mantener siempre una actitud constructiva y respetuosa hacia todos los miembros del gremio y la comunidad.',
      color: 'green'
    },
    {
      icon: '🤝',
      title: 'Trabajo en Equipo',
      description: 'Priorizar el éxito colectivo sobre el individual. Apoyar a los compañeros en misiones y eventos.',
      color: 'gold'
    },
    {
      icon: '📢',
      title: 'Comunicación Activa',
      description: 'Usar Discord para coordinar actividades. Reportar ausencias prolongadas con anticipación.',
      color: 'green'
    },
    {
      icon: '⚔️',
      title: 'Preparación para Batallas',
      description: 'Mantener equipos adecuados para ZvZ y eventos. Participar en al menos 2 eventos semanales.',
      color: 'gold'
    },
    {
      icon: '💰',
      title: 'Economía del Gremio',
      description: 'Contribuir con un 10% de los ingresos de dungeon a la tesorería del gremio para mejoras colectivas.',
      color: 'green'
    },
    {
      icon: '🛡️',
      title: 'Lealtad y Confidencialidad',
      description: 'No compartir estrategias del gremio con externos. La lealtad es nuestro valor fundamental.',
      color: 'gold'
    }
  ];
}
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface EventDay {
  day: string;
  name: string;
  time: string;
  activity: string;
  difficulty: string;
  participants: string;
  icon: string;
  color: string;
}

@Component({
  selector: 'app-events',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  events: EventDay[] = [];
  currentDay: string = '';

  ngOnInit(): void {
    this.initializeEvents();
    this.setCurrentDay();
  }

  private initializeEvents(): void {
    this.events = [
      {
        day: 'Lunes',
        name: 'Farmeo en Tierras Negras',
        time: '19:00 - 21:00 UTC',
        activity: 'Recolección de recursos en zonas de alto riesgo',
        difficulty: 'Alta',
        participants: 'Grupos de 5-10',
        icon: '🌑',
        color: 'purple'
      },
      {
        day: 'Martes',
        name: 'Entrenamiento ZvZ',
        time: '20:00 - 22:00 UTC',
        activity: 'Práctica de formaciones y estrategias de ZvZ',
        difficulty: 'Media',
        participants: 'Todos los miembros',
        icon: '⚔️',
        color: 'red'
      },
      {
        day: 'Miércoles',
        name: 'Expedición de Dungeons',
        time: '18:00 - 20:00 UTC',
        activity: 'Exploración de dungeons en grupo',
        difficulty: 'Media',
        participants: 'Grupos de 5',
        icon: '🏰',
        color: 'blue'
      },
      {
        day: 'Jueves',
        name: 'Defensa Territorial',
        time: '21:00 - 23:00 UTC',
        activity: 'Protección y conquista de territorios',
        difficulty: 'Alta',
        participants: 'Toda la alianza',
        icon: '🛡️',
        color: 'green'
      },
      {
        day: 'Viernes',
        name: 'ZvZ Territorial',
        time: '20:00 - 00:00 UTC',
        activity: 'Batallas masivas por control territorial',
        difficulty: 'Alta',
        participants: 'Toda la alianza',
        icon: '👑',
        color: 'gold'
      },
      {
        day: 'Sábado',
        name: 'Cacería de World Boss',
        time: '17:00 - 19:00 UTC',
        activity: 'Caza de jefes mundiales en grupo',
        difficulty: 'Media',
        participants: 'Grupos de 10-20',
        icon: '🐉',
        color: 'orange'
      },
      {
        day: 'Domingo',
        name: 'Arena y PvP Casual',
        time: '16:00 - 18:00 UTC',
        activity: 'Combates PvP y prácticas de arena',
        difficulty: 'Baja',
        participants: 'Grupos flexibles',
        icon: '🎯',
        color: 'teal'
      }
    ];
  }

  private setCurrentDay(): void {
    const days = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
    const today = new Date().getDay();
    this.currentDay = days[today];
  }

  isToday(day: string): boolean {
    return day === this.currentDay;
  }

  getDifficultyClass(difficulty: string): string {
    switch (difficulty.toLowerCase()) {
      case 'alta': return 'difficulty-high';
      case 'media': return 'difficulty-medium';
      case 'baja': return 'difficulty-low';
      default: return '';
    }
  }
}
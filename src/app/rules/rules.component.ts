import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface RuleSection {
  icon: string;
  title: string;
  points: string[];
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
  ruleSections: RuleSection[] = [
    {
      icon: '🛡️',
      title: 'Código de Conducta',
      color: 'green',
      points: [
        'Prohibido acoso, discriminación (xenofobia, racismo, homofobia, etc.). Expulsión inmediata.',
        'Bromas con respeto: si alguien pide que pare, se detiene.',
        'Prohibido robo entre miembros (recursos, equipo, banco gremial).',
        'Representamos al gremio: evitar toxicidad en canales públicos.'
      ]
    },
    {
      icon: '🏛️',
      title: 'Jerarquía',
      color: 'gold',
      points: [
        'Líder: máxima autoridad.',
        'Mano Derecha: suplente del líder, misma autoridad en su ausencia.',
        'Oficiales: reclutamiento, disciplina, eventos oficiales.',
        'Administrador: gestión económica, reporta al líder.',
        'Creador de Contenido: organiza actividades financiadas.',
        'Miembros: base del gremio.',
        'Reclutas: período de prueba (1-2 semanas).'
      ]
    },
    {
      icon: '⚔️',
      title: 'Actividades Gremiales',
      color: 'green',
      points: [
        'Eventos no oficiales: libertad total, bajo responsabilidad individual.',
        'Eventos oficiales: financiados por el gremio, asistencia obligatoria para miembros, oficiales y creadores de contenido (justificar ausencias).'
      ]
    },
    {
      icon: '📢',
      title: 'Comunicación en Discord',
      color: 'gold',
      points: [
        'Usar canales adecuados; #información es solo lectura.',
        'Sala de Mando: solo para shotcallers en eventos.',
        'Salas sociales: bromas permitidas, respetando el código de conducta.',
        'Nickname: [Tag] NombrePersonaje.'
      ]
    },
    {
      icon: '💰',
      title: 'Economía Gremial',
      color: 'green',
      points: [
        'Martes de Farmeo: grupales para fondos del gremio. Participación da 1 punto para sorteo mensual.',
        'Sorteo mensual: premios según fondos.',
        'Coparticipación: si no hay mapas, se puede hacer mapa pro-gremio con 70% para el gremio y 30% para financiar mapas grupales para los participantes.'
      ]
    },
    {
      icon: '🔒',
      title: 'Seguridad y Confidencialidad',
      color: 'gold',
      points: [
        'Información interna (estrategias, finanzas) es confidencial. No compartir fuera del gremio.'
      ]
    },
    {
      icon: '⚖️',
      title: 'Sanciones',
      color: 'green',
      points: [
        '1. Hablar directamente entre hermanos.',
        '2. Mediación de un oficial con pruebas.',
        '3. Veredicto de líder y oficiales.',
        'Sanciones: amonestación, expulsión (por acoso, discriminación o robo).'
      ]
    }
  ];
}
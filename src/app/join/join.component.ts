import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Requirement {
  icon: string;
  text: string;
  description: string;
}

@Component({
  selector: 'app-join',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './join.component.html',
  styleUrls: ['./join.component.css']
})
export class JoinComponent {
  requirements: Requirement[] = [
    {
      icon: '⭐',
      text: '100K+ de Fama Total',
      description: 'Experiencia mínima en Albion Online'
    },
    {
      icon: '🎮',
      text: 'Uso Activo de Discord',
      description: 'Micrófono y participación en eventos'
    },
    {
      icon: '👍',
      text: 'Actitud Positiva',
      description: 'Espíritu de equipo y respeto mutuo'
    },
    {
      icon: '⚔️',
      text: 'Compromiso con Eventos',
      description: 'Disponibilidad para actividades semanales'
    }
  ];

  applicant = {
    name: '',
    ign: '',
    fame: '',
    playtime: '',
    motivation: ''
  };

  submitted = false;
  loading = false;

  submitApplication(): void {
    if (this.isFormValid()) {
      this.loading = true;
      
      // Simular envío de formulario
      setTimeout(() => {
        this.submitted = true;
        this.loading = false;
        this.resetForm();
        
        // Resetear mensaje después de 5 segundos
        setTimeout(() => {
          this.submitted = false;
        }, 5000);
      }, 1500);
    }
  }

  isFormValid(): boolean {
    return !!(
      this.applicant.name &&
      this.applicant.ign &&
      this.applicant.fame &&
      this.applicant.playtime &&
      this.applicant.motivation
    );
  }

  resetForm(): void {
    this.applicant = {
      name: '',
      ign: '',
      fame: '',
      playtime: '',
      motivation: ''
    };
  }

  scrollToForm(): void {
    const formElement = document.querySelector('.join-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  openDiscord(): void {
    window.open('https://discord.gg/example', '_blank');
  }
}
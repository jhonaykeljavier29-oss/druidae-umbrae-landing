// app.component.ts (CORRECTO)
import { Component, OnInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { HeroComponent } from './hero/hero.component';
import { StatsComponent } from './stats/stats.component';
import { AboutComponent } from './about/about.component';
import { RulesComponent } from './rules/rules.component';
import { EventsComponent } from './events/events.component';
import { JoinComponent } from './join/join.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    NavbarComponent,
    HeroComponent,
    StatsComponent,
    AboutComponent,
    RulesComponent,
    EventsComponent,
    JoinComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Druidae Umbrae';

  ngOnInit(): void {
    this.setupScrollAnimations();
  }

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    this.triggerScrollAnimations();
  }

  private setupScrollAnimations(): void {
    setTimeout(() => {
      this.triggerScrollAnimations();
    }, 100);
  }

  private triggerScrollAnimations(): void {
    const elements = document.querySelectorAll('.scroll-trigger');
    
    elements.forEach(element => {
      const elementTop = element.getBoundingClientRect().top;
      const elementVisible = 150;
      
      if (elementTop < window.innerHeight - elementVisible) {
        element.classList.add('visible');
      }
    });
  }
}
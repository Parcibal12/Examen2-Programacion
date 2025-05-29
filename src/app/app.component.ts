import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ComponenteListaIdeas } from './componentes/lista-ideas/lista-ideas.component';
import { ComponenteFormularioIdea } from './componentes/formulario-idea/formulario-idea.component'; 


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    ComponenteListaIdeas,
    ComponenteFormularioIdea
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  titulo = 'StartUp UCB';
}

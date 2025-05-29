import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicioIdea } from '../../services/idea.servicio';
import { Idea } from '../../idea.modelo';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-ideas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lista-ideas.component.html',
  styleUrl: './lista-ideas.component.css',
})
export class ComponenteListaIdeas implements OnInit {
  ideas: Idea[] = [];

  constructor(private servicioIdea: ServicioIdea, private router: Router) {}

  ngOnInit(): void {
    this.obtener_ideas();
  }

  obtener_ideas(): void {
    this.ideas = this.servicioIdea.obtener_ideas();
  }

  eliminar_idea(id: string): void {
    this.servicioIdea.eliminar_idea(id);
    this.obtener_ideas();
  }

  editar_idea(idea: Idea): void {
    this.servicioIdea.setidea_editar(idea);
    this.router.navigate(['/formulario-idea']);
  }
}

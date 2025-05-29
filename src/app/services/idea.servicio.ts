import { Injectable } from '@angular/core';
import { Idea } from '../idea.modelo';

@Injectable({
  providedIn: 'root'
})
export class ServicioIdea {
  private ideas: Idea[] = [];
  private siguiente_id: number = 1;
  private ideaeditar: Idea | null = null;


  
  constructor() {
    this.ideas.push(
      {
        id: this.generar_id(),
        titulo: 'Prueba',
        descripcion_detallada: 'Descripción..........',
        categoria: 'Educación',
        estado: 'Validando',
        nivel_innovacion: 'Alto'
      }
    );
  }

  private generar_id(): string {
    return (this.siguiente_id++).toString();
  }

  obtener_ideas(): Idea[] {
    return this.ideas;
    
  }

  obteneridea_id(id: string): Idea | undefined {
    return this.ideas.find(idea => idea.id === id);
  }

  agregar_idea(idea: Idea): void {
    idea.id = this.generar_id();
    this.ideas.push(idea);
  }

  actualizar_idea(idea_actualizada: Idea): void {
    const indice = this.ideas.findIndex(idea => idea.id === idea_actualizada.id);
    if (indice !== -1) {
      this.ideas[indice] = idea_actualizada;
    }
  }

  eliminar_idea(id: string): void {
    this.ideas = this.ideas.filter(idea => idea.id !== id);
  }

  setidea_editar(idea: Idea | null): void {
    this.ideaeditar = idea;
  }


  getidea_editar(): Idea | null {
    return this.ideaeditar;
  }
}
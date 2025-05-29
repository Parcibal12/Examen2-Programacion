import { Routes } from '@angular/router';
import { ComponenteListaIdeas } from './componentes/lista-ideas/lista-ideas.component';
import { ComponenteFormularioIdea } from './componentes/formulario-idea/formulario-idea.component';

export const routes: Routes = [
  { path: '', redirectTo: '/lista-ideas', pathMatch: 'full' },
  { path: 'lista-ideas', component: ComponenteListaIdeas },
  { path: 'formulario-idea', component: ComponenteFormularioIdea },
];

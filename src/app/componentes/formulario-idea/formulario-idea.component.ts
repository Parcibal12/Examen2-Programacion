import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ServicioIdea } from '../../services/idea.servicio';
import { Idea } from '../../idea.modelo';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-formulario-idea',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './formulario-idea.component.html',
  styleUrl: './formulario-idea.component.css',
})
export class ComponenteFormularioIdea implements OnInit {
  formulario_idea!: FormGroup;
  idea: Idea = {
    id: '0',
    titulo: '',
    descripcion_detallada: '',
    categoria: '',
    estado: 'Borrador',
  };

  constructor(
    private fb: FormBuilder,
    private servicioIdea: ServicioIdea,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.formulario_idea = this.fb.group({
      titulo: ['', Validators.required],
      descripcion_detallada: ['', Validators.required],
      categoria: ['', Validators.required],
      estado: ['Borrador', Validators.required],
    });
  }

  ngOnInit(): void {
    const idea_a_editar = this.servicioIdea.getidea_editar();
    if (idea_a_editar) {
      this.idea = { ...idea_a_editar };
      this.formulario_idea.patchValue({
        titulo: this.idea.titulo,
        descripcion_detallada: this.idea.descripcion_detallada, 
        categoria: this.idea.categoria,
        estado: this.idea.estado,
      });
      this.servicioIdea.setidea_editar(null);
    }
  }

  guardar_idea(): void {
    if (this.formulario_idea.valid) {
      const idea_guardar: Idea = {
        ...this.idea,
        ...this.formulario_idea.value,
      };

      if (idea_guardar.id === '0') {
        this.servicioIdea.agregar_idea(idea_guardar);
      } else {
        this.servicioIdea.actualizar_idea(idea_guardar);
      }
      this.router.navigate(['/lista-ideas']);

      
    }
  }

  cancelar(): void {
    this.router.navigate(['/lista-ideas']);
  }
}

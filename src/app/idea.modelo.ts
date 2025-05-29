export interface Idea {
  id: string;
  titulo: string;
  descripcion_detallada: string;
  categoria: string;
  estado: 'Borrador' | 'Validando' | 'Descartada';


  [key: string]: any;
}
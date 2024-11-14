import { Component, OnInit } from '@angular/core';
import ServiceAlumno from '../../services/service.alumno';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent implements OnInit{

  public cursos!: Array<number>;

  constructor(
    private _service:ServiceAlumno
  ){}

  ngOnInit(): void {
    this._service.getCursos().then(r => this.cursos = r.data)
  }

}

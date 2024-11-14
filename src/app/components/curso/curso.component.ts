import { Component, OnInit } from '@angular/core';
import ServiceAlumno from '../../services/service.alumno';
import Alumno from '../../models/alumno';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrl: './curso.component.css'
})
export class CursoComponent implements OnInit {

  public alumnos!: Array<Alumno>
  public curso!: any

  constructor(
    private _service: ServiceAlumno,
    private _activated: ActivatedRoute,
    private _router: Router
  ) { }


  ngOnInit(): void {
    if (!localStorage.getItem('authToken')) {
      this._router.navigate(["/"])
    }
    this._activated.params.subscribe((params: Params) => {
      this.curso = params['curso']
      this.obtenerAlumnos();

    });
  }

  obtenerAlumnos(): void {
    this._service.getAlumnosByCurso(this.curso).then(r => this.alumnos = r.data);
  }



}

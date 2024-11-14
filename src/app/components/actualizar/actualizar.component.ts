import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import ServiceAlumno from '../../services/service.alumno';
import Alumno from '../../models/alumno';

@Component({
  selector: 'app-actualizar',
  templateUrl: './actualizar.component.html',
  styleUrl: './actualizar.component.css'
})
export class ActualizarComponent implements OnInit {

  @ViewChild("nombre") nombre!: ElementRef;
  @ViewChild("apellidos") apellidos !: ElementRef;
  @ViewChild("imagen") imagen!: ElementRef;
  @ViewChild("idCurso") idCurso!: ElementRef;

  public alumno!: Alumno;
  public id!: number;
  public cursos!: Array<number>

  constructor(
    private _service: ServiceAlumno,
    private _router: Router,
    private _active: ActivatedRoute
  ) { }

  ngOnInit(): void {
    if(!localStorage.getItem('authToken')){
      this._router.navigate(["/"])
    }
    this._active.params.subscribe((params: Params) => {
      this.id = params['id']
      this._service.getCursos().then(r => this.cursos = r.data)
      this._service.findAlumnoById(this.id).then(r => {
        this.nombre.nativeElement.value = r.data.nombre
        this.apellidos.nativeElement.value = r.data.apellidos
        this.imagen.nativeElement.value = r.data.nombre
        this.idCurso.nativeElement.value = r.data.idCurso
      })
    })
  }

  actualizar():void{
    this.alumno = new Alumno(
      this.id,
      this.nombre.nativeElement.value,
      this.apellidos.nativeElement.value,
      this.imagen.nativeElement.value,
      1,
      this.idCurso.nativeElement.value,
      
    )
    this._service.updateAlumno(this.alumno).then(r => this._router.navigate(["/curso/",this.alumno.idCurso]))
  }

}

import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import Alumno from '../../models/alumno';
import ServiceAlumno from '../../services/service.alumno';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrl: './crear.component.css'
})
export class CrearComponent implements OnInit {

  @ViewChild("nombre") nombre!:ElementRef;
  @ViewChild("apellidos")apellidos !:ElementRef;
  @ViewChild("imagen") imagen!:ElementRef;
  @ViewChild("idCurso") idCurso!:ElementRef;

  public alumno:Alumno;
  public cursos!:Array<number>

  constructor(
    private _service:ServiceAlumno,
    private _router:Router
  ){
    this.alumno = new Alumno(0,"","","",1,0);
  }


  ngOnInit(): void {
    if(!localStorage.getItem('authToken')){
      this._router.navigate(["/"])
    }
    this._service.getCursos().then(r => this.cursos = r.data)
  }

  create(): void{
    this.alumno.nombre = this.nombre.nativeElement.value;
    this.alumno.apellidos = this.apellidos.nativeElement.value;
    this.alumno.imagen = this.imagen.nativeElement.value;
    this.alumno.idCurso = parseInt(this.idCurso.nativeElement.value);
    console.log(JSON.stringify(this.alumno));

    this._service.createAlumno(this.alumno).then( r => this._router.navigate(["/curso/",this.alumno.idCurso]))
  }
}

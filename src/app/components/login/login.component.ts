import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import ServiceAlumno from '../../services/service.alumno';
import Login from '../../models/login';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

  @ViewChild("userName") userName!:ElementRef;
  @ViewChild("password") password!:ElementRef;
  public login:Login

  constructor(
    private _service:ServiceAlumno,
    private _router:Router
  ){
    this.login = new Login("","")
  }

  ngOnInit(): void {
    localStorage.removeItem('authToken')
  }

  getToken():void{
    this.login = new Login(this.userName.nativeElement.value,this.password.nativeElement.value);
    console.log(this.login)
    this._service.getToken(this.login).then( r => {
      localStorage.setItem('authToken',r.data.response);
      this._router.navigate(["/home"])
    })
  }

}

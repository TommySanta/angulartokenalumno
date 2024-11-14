import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'angulartokenalumno';

  public token!:any;
  constructor(
    private _router:Router
  ){}

  ngDoCheck():void{   
    this.token = localStorage.getItem('authToken')
  }

  ngOnInit(): void {
    localStorage.removeItem('authToken');
    this.token = localStorage.getItem('authToken');
  }
}

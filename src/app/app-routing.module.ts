import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { MenuComponent } from './components/menu/menu.component';
import { CursoComponent } from './components/curso/curso.component';
import { CrearComponent } from './components/crear/crear.component';
import { ActualizarComponent } from './components/actualizar/actualizar.component';

const routes: Routes = [
  {
    path:"", component:LoginComponent
  },
  {
    path:"home", component:HomeComponent
  },
  {
    path:"menu",component:MenuComponent
  },
  {
    path:"curso/:curso",component:CursoComponent
  },
  {
    path:"crear",component:CrearComponent
  },
  {
    path:"actualizar/:id",component:ActualizarComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import axios from "axios";
import Login from "../models/login";
import { environment } from "../../environments/environment.development";
import Alumno from "../models/alumno";
export default class ServiceAlumno{

    getToken(login:Login):Promise<any>{
        let request = "api/Auth/Login";
        let header = {"Content-Type":"application/json"}
        return new Promise(function(resolve){
            axios.post(environment.urlAlumnos + request, JSON.stringify(login),{headers:header})
            .then(r => resolve(r))
            .catch(r => resolve(r))
        })
    }

    getCursos():Promise<any>{
        let request = "api/Alumnos/CursosToken";
        let header = {"Authorization": `Bearer ${localStorage.getItem('authToken')}`}
        return new Promise(function(resolve){
            axios.get(environment.urlAlumnos + request, {headers:header}).then(r =>resolve(r))
        })
    }

    getAlumnosByCurso(id:number): Promise<any>{
        let request = "api/Alumnos/FiltrarCursoToken/" + id;
        let header = {"Authorization": `Bearer ${localStorage.getItem('authToken')}`}
        return new Promise(function(resolve){
            axios.get(environment.urlAlumnos + request,{headers:header})
            .then( r => resolve(r))
        })
    }

    createAlumno(alumno:Alumno):Promise <any>{
        let request = "api/Alumnos/InsertAlumnoToken";
        let header = {
            "Authorization": `Bearer ${localStorage.getItem('authToken')}`,
            "Content-Type" : "application/json"
        }
        return new Promise (function(resolve){
            axios.post(environment.urlAlumnos + request , JSON.stringify(alumno),{headers:header})
            .then( r => resolve(r))
        })
    }

    findAlumnoById(id:number):Promise<any>{

        let request = "api/Alumnos/FindAlumnoToken/" + id;
        let header = {"Authorization": `Bearer ${localStorage.getItem('authToken')}`}
        return new Promise (function ( resolve){
            axios.get(environment.urlAlumnos + request, {headers:header}).then(r => resolve(r))
        })
    }
    updateAlumno(alumno:Alumno):Promise<any>{
        let request = "api/Alumnos/UpdateAlumnoToken"
        let header = {
            "Authorization": `Bearer ${localStorage.getItem('authToken')}`,
            "Content-Type" : "application/json"
        }
        return new Promise (function(resolve){
            axios.put(environment.urlAlumnos + request, JSON.stringify(alumno),{headers:header}).then(r => resolve(r))
        })
    }
}
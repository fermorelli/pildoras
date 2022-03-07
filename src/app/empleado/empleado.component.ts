import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent implements OnInit {

    nombre = "Juan";
    apellido = "Díaz";
    edad = "24";
    empresa = "Google";
    regUser = false ;
    regText = "No hay nadie registrado";
    habCuadro = false;

   

    getRegUser(){
      this.regUser = false;
    }

    setRegUser(event: Event){
      if((<HTMLInputElement>event.target).value=="si"){
        this.regText="Se ha registrado un usuario";
      }else{
        this.regText = "No hay nadie registrado";
      }

      }
    
  constructor() { }


  ngOnInit(): void {
  }

} 

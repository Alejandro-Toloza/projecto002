import { Component } from '@angular/core';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})

export class EmpleadoComponent {
  
  emp={
    id:0 ,
    nombre:"",
    apellido:"",
    nroDocumento:0,
    email:"",
    fechaNacimiento: "",
    fechaIngreso: ""
  }

  empleados = [{id:1, nombre:'Ale', apellido:'asd', nroDocumento: 40234354, email:"alej7nm@gmail.com", fechaIngreso:'10/09/2023', fechaNacimiento:'3/10/2023'},
               {id:2, nombre:'Tiago', apellido:'r', nroDocumento: 37234354, email:"adff7nm@gmail.com", fechaIngreso:'5/09/2023', fechaNacimiento:'3/10/2023'},
               {id:3, nombre:'isasis', apellido:'asd', nroDocumento: 34234354, email:"gggg7nm@gmail.com", fechaIngreso:'1/07/2023', fechaNacimiento:'3/10/2023'},
               {id:4, nombre:'moises', apellido:'dd', nroDocumento: 32234354, email:"jjhghgnm@gmail.com", fechaIngreso:'3/03/2023', fechaNacimiento:'3/10/2023'},
               {id:5, nombre:'carlos', apellido:'ff', nroDocumento: 35234354, email:"aeeefdm@gmail.com", fechaIngreso:'10/08/2023', fechaNacimiento:'3/10/2023'},
              ];

  hayRegistros() {
    return this.empleados.length>0;              
  }

  borrar(id:number) {
    for(let x=0;x<this.empleados.length;x++)
      if (this.empleados[x].id==id)
      {
        this.empleados.splice(x,1);
        return;
      }
  }

  agregar() {
    if (this.emp.id==0) {
      alert('Debe ingresar un Id mayor a 0');
      return;
    }else 
    if (this.emp.nombre=='') {
      alert('El campo nombre no debe estar vacio');
      return;
    }else 
    if (this.emp.apellido=='') {
      alert('El campo apellido no debe estar vacio');
      return;
    }
    if (this.emp.nroDocumento=0) {
      alert('El campo Nº Documento no debe estar vacio');
      return;
    }

    for(let x=0;x<this.empleados.length;x++)
    if (this.empleados[x].id==this.emp.id)
    {
      alert('ya existe un Empleado con ese Id');
      return;
    }        
    this.empleados.push({id:this.emp.id,
                         nombre:this.emp.nombre,
                         apellido:this.emp.apellido,
                         nroDocumento:this.emp.nroDocumento,
                         email:this.emp.email,
                         fechaIngreso:this.emp.fechaIngreso,
                         fechaNacimiento:this.emp.fechaIngreso
                      });
    this.emp.id=0;
    this.emp.nombre="";	
    this.emp.apellido="";
    this.emp.email="";
    this.emp.fechaIngreso='';
    this.emp.fechaNacimiento=''
    this.emp.nroDocumento=0    
  }

  seleccionar(emp: { id: number; nombre: string; apellido: string; email:string; fechaIngreso:string; fechaNacimiento:string; nroDocumento:number }) {
    this.emp.id=emp.id;
    this.emp.nombre=emp.nombre;
    this.emp.apellido=emp.apellido;

    this.emp.email=emp.email;
    this.emp.fechaIngreso=emp.fechaIngreso;
    this.emp.fechaNacimiento=emp.fechaNacimiento
    this.emp.nroDocumento=emp.nroDocumento
  }

  modificar() {
    for(let x=0;x<this.empleados.length;x++)
      if (this.empleados[x].id==this.emp.id)
      {
        this.empleados[x].nombre=this.emp.nombre;
        this.empleados[x].apellido=this.emp.apellido;
        return;
      }        
    alert('No existe el id del Empleado ingresado');
  }
}

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
    apellido:""
  }

  empleados = [{id:1, nombre:'Ale', apellido:'asd'},
               {id:2, nombre:'Tiago', apellido:'r'},
               {id:3, nombre:'isasis', apellido:'asd'},
               {id:4, nombre:'moises', apellido:'dd'},
               {id:5, nombre:'carlos', apellido:'ff'},
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
    }
    for(let x=0;x<this.empleados.length;x++)
    if (this.empleados[x].id==this.emp.id)
    {
      alert('ya existe un articulo con dicho codigo');
      return;
    }        
    this.empleados.push({id:this.emp.id,
                         nombre:this.emp.nombre,
                        apellido:this.emp.apellido });
    this.emp.id=0;
    this.emp.nombre="";	
    this.emp.apellido="";    
  }

  seleccionar(emp: { id: number; nombre: string; apellido: string; }) {
    this.emp.id=emp.id;
    this.emp.nombre=emp.nombre;
    this.emp.apellido=emp.apellido;
  }

  modificar() {
    for(let x=0;x<this.empleados.length;x++)
      if (this.empleados[x].id==this.emp.id)
      {
        this.empleados[x].nombre=this.emp.nombre;
        this.empleados[x].apellido=this.emp.apellido;
        return;
      }        
    alert('No existe el id de articulo ingresado');
  }
}

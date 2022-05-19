import { UsuarioService } from './../usuario.service';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {


  usuario: any = [];
  
  
  constructor(
    private activatedRoute: ActivatedRoute,
    private usuarioService: UsuarioService,
    private router:Router
    ) {
  }
  ngOnInit(): void {

    this.getAll()

    this.activatedRoute.params.subscribe(
       (data) => {
        console.log(data);
    }
  );
}


onDelete(idUsuario: number){
  this.usuarioService.delete(idUsuario)
    .subscribe(
      ()=>{
        console.log(`deletou registro com id ${idUsuario}`);

        this.getAll();
      }
    );
}
    private getAll(){
  this.usuarioService.getAll()
  .subscribe(
    (data : any) =>{
      console.log(data);
      this.usuario = data;
    }
  );
    }
}
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VacinaService } from './../vacina.service';

@Component({
  selector: 'app-listar-vacina',
  templateUrl: './listar-vacina.component.html',
  styleUrls: ['./listar-vacina.component.css']
})
export class ListarVacinaComponent implements OnInit {

  vacina: any = [];
  
  
  constructor(
    private activatedRoute: ActivatedRoute,
    private vacinaService: VacinaService,
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


onDelete(idVacina: number){
  this.vacinaService.delete(idVacina)
    .subscribe(
      ()=>{
        console.log(`deletou registro com id ${idVacina}`);

        this.getAll();
      }
    );
}
    private getAll(){
  this.vacinaService.getAll()
  .subscribe(
    (data : any) =>{
      console.log(data);
      this.vacina = data;
    }
  );
    }
}

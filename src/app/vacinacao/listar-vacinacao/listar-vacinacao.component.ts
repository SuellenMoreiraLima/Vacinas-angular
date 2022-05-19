import { VacinacaoService } from './../vacinacao.service';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-listar',
  templateUrl: './listar-vacinacao.component.html',
  styleUrls: ['./listar-vacinacao.component.css']
})
export class ListarVacinacaoComponent implements OnInit {


  vacinacao: any = [];
  
  
  constructor(
    private activatedRoute: ActivatedRoute,
    private vacinacaoService: VacinacaoService,
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


onDelete(idVacinacao: number){
  this.vacinacaoService.delete(idVacinacao)
    .subscribe(
      ()=>{
        console.log(`deletou registro com id ${idVacinacao}`);

        this.getAll();
      }
    );
}
    private getAll(){
  this.vacinacaoService.getAll()
  .subscribe(
    (data : any) =>{
      console.log(data);
      this.vacinacao = data;
    }
  );
    }
}
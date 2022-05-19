import { VacinacaoService } from './../vacinacao.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-form-vacinacao',
  templateUrl: './form-vacinacao.component.html',
  styleUrls: ['./form-vacinacao.component.css']
})
export class FormVacinacaoComponent implements OnInit {
  

// 1-) alocar a variável que vai ter os controles do form
meuForm : FormGroup = new FormGroup({});

isEdicao : boolean = false;

idVacinacao : number = -1;

// 2-) injetar o FormBuilder para poder ajudar a criar os controles do form
constructor(
  private formBuilder: FormBuilder,
  private vacinacaoService: VacinacaoService,
  private router:Router,
  private ActivatedRoute: ActivatedRoute
  ) { }

// 3-) alocar os controles na variável meuForm através do formBuilder
ngOnInit(): void {
  this.meuForm = this.formBuilder.group({
    usuario : [ null, [ Validators.required ] ],
    vacina : [ null, [ Validators.required ] ],
    dataAplicacao : [ null, [ Validators.required ] ],
    numeroDaDose : [ null, [ Validators.required ]],
    dataProximaAplicacao : [ null, [ Validators.required ] ]
  });
  this.ActivatedRoute.params
  .subscribe(
    (parametros: any) => {
      console.log(parametros);

      // é EDIÇÃO
      if (parametros.idVacinacao){
        console.log(`edição id ${parametros.idVacinacao}`);

        this.isEdicao = true;
        this.idVacinacao = parametros.idVacinacao;

      
        this.vacinacaoService.getOne(parametros.idVacinacao)
        .subscribe(
          (dadosVacinacao) => {
            console.log(dadosVacinacao);
            // patchValue atualiza os campos do formulário de acordo com o nome dos controles
            this.meuForm.patchValue(dadosVacinacao);
          }
        );
    }
      // é CRIAÇÃO
      else {
        console.log(`criação`);
        this.isEdicao = false;
      }
    }
  );

}
// 4-) integrar os controles do form no HTML 

onSubmit(){
    // edicao igual a false significa que é criação
    if (this.isEdicao == false){
      this.vacinacaoService.save(this.meuForm.value)
      .subscribe(
        (data) => {
          console.log(data);
          // o navigate é para redirecionar para uma outra rota de interesse
          this.router.navigate(['/usuario']);
        }
      );
    }
    //é alteração de algum registro
    else{
      this.vacinacaoService.update(this.idVacinacao, this.meuForm.value)
        .subscribe(
          (data) => {
            console.log(data);
            // o navigate é para redirecionar para uma outra rota de interesse
            this.router.navigate(['/usuario']);
      }
    );
}

}
}

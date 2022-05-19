import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { VacinaService } from '../vacina.service';

@Component({
  selector: 'app-form-vacina',
  templateUrl: './form-vacina.component.html',
  styleUrls: ['./form-vacina.component.css']
})
export class FormVacinaComponent implements OnInit {

  // 1-) alocar a variável que vai ter os controles do form
meuForm : FormGroup = new FormGroup({});

isEdicao : boolean = false;

  idVacina : number = -1;

// 2-) injetar o FormBuilder para poder ajudar a criar os controles do form
constructor(
  private formBuilder: FormBuilder,
  private vacinaService: VacinaService,
  private router:Router,
  private ActivatedRoute: ActivatedRoute
  ) { }

// 3-) alocar os controles na variável meuForm através do formBuilder
ngOnInit(): void {
  this.meuForm = this.formBuilder.group({
    nomeVacina : [ null, [ Validators.required ] ],
    fabricante : [ null, [ Validators.required ] ],
    dosesNecessarias : [ null, [ Validators.required ] ],
    intervaloDeDiasEntreDoses : [ null, [ Validators.required ] ],
  });

 this.ActivatedRoute.params
.subscribe(
  (parametros: any) => {
    console.log(parametros);

    // é EDIÇÃO
    if (parametros.idVacina){
      console.log(`edição id ${parametros.idVacina}`);

      this.isEdicao = true;
      this.idVacina = parametros.idVacina;

    
      this.vacinaService.getOne(parametros.idVacina)
      .subscribe(
        (dadosVacina) => {
          console.log(dadosVacina);
          // patchValue atualiza os campos do formulário de acordo com o nome dos controles
          this.meuForm.patchValue(dadosVacina);
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
    this.vacinaService.save(this.meuForm.value)
    .subscribe(
      (data) => {
        console.log(data);
        // o navigate é para redirecionar para uma outra rota de interesse
        this.router.navigate(['/vacina']);
      }
    );
  }
  //é alteração de algum registro
  else{
    this.vacinaService.update(this.idVacina, this.meuForm.value)
      .subscribe(
        (data) => {
          console.log(data);
          // o navigate é para redirecionar para uma outra rota de interesse
          this.router.navigate(['/vacina']);
    }
  );
}

}
}

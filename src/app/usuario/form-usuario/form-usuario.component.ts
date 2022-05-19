import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-form-usuario',
  templateUrl: './form-usuario.component.html',
  styleUrls: ['./form-usuario.component.css']
})
export class FormUsuarioComponent implements OnInit {
  // 1-) alocar a variável que vai ter os controles do form
  meuForm : FormGroup = new FormGroup({});
  
  isEdicao : boolean = false;

  idUsuario : number = -1;

// 2-) injetar o FormBuilder para poder ajudar a criar os controles do form
constructor(
  private formBuilder: FormBuilder,
  private usuarioService: UsuarioService,
  private router:Router,
  private ActivatedRoute: ActivatedRoute
  ) { }

// 3-) alocar os controles na variável meuForm através do formBuilder
ngOnInit(): void {
  this.meuForm = this.formBuilder.group({
    nome : [ null, [ Validators.required ]],
    cpf : [ null, [ Validators.required ] ],
    dataNascimento : [ null, [ Validators.required ] ],
    endereco : [ null, [ Validators.required ] ],
    telefone : [ null, [ Validators.required ] ]    
  });

  this.ActivatedRoute.params
  .subscribe(
    (parametros: any) => {
      console.log(parametros);

      // é EDIÇÃO
      if (parametros.idUsuario){
        console.log(`edição id ${parametros.idUsuario}`);

        this.isEdicao = true;
        this.idUsuario = parametros.idUsuario;

      
        this.usuarioService.getOne(parametros.idUsuario)
        .subscribe(
          (dadosUsuario) => {
            console.log(dadosUsuario);
            // patchValue atualiza os campos do formulário de acordo com o nome dos controles
            this.meuForm.patchValue(dadosUsuario);
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
      this.usuarioService.save(this.meuForm.value)
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
      this.usuarioService.update(this.idUsuario, this.meuForm.value)
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

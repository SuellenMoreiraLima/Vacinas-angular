import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VacinacaoService {

  constructor(private httpClient: HttpClient) { }

  getAll(){
    return this.httpClient.get('http://localhost:8080/vacinacao');
  }

  save(vacinacaoObj: any){
    return this.httpClient.post('http://localhost:8080/vacinacao', vacinacaoObj);
  }
  delete(idVacinacao: number){
    return this.httpClient.delete('http://localhost:8080/vacinacao/' + idVacinacao);
   
  }
  getOne(idVacinacao : number){
    return this.httpClient.get(`http://localhost:8080/vacinacao/${idVacinacao}`);
  }
  update(idVacinacao: number, vacinacaoObj: any){
    return this.httpClient.patch(`http://localhost:8080/vacinacao/${idVacinacao}`, vacinacaoObj);
  }
}

import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VacinaService {

  constructor(private httpClient: HttpClient) { }

  getAll(){
    return this.httpClient.get('http://localhost:8080/vacina');
  }

  save(vacinaObj: any){
    return this.httpClient.post('http://localhost:8080/vacina', vacinaObj);
  }
  delete(idVacina: number){
    return this.httpClient.delete('http://localhost:8080/vacina/' + idVacina);
   
  }
  getOne(idVacina: number){
    return this.httpClient.get(`http://localhost:8080/vacina/${idVacina}`);
  }
  update(idVacina: number, vacinaObj: any){
    return this.httpClient.patch(`http://localhost:8080/vacina/${idVacina}`, vacinaObj);
  }
}

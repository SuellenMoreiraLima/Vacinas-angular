import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private httpClient: HttpClient) { }

  getAll(){
    return this.httpClient.get('http://localhost:8080/usuario');
  }

  save(usuarioObj: any){
    return this.httpClient.post('http://localhost:8080/usuario', usuarioObj);
  }
  delete(idUsuario: number){
    return this.httpClient.delete('http://localhost:8080/usuario/' + idUsuario);
   
  }
  getOne(idUsuario : number){
    return this.httpClient.get(`http://localhost:8080/usuario/${idUsuario}`);
  }
  update(idUsuario: number, usuarioObj: any){
    return this.httpClient.patch(`http://localhost:8080/usuario/${idUsuario}`, usuarioObj);
  }
}

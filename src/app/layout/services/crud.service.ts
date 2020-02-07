import { Router } from '@angular/router';
import { User } from './../models/usuario.model';
import { Lista } from '../models/lista.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { take } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class CrudService {

  private readonly API = 'https://reqres.in/api/users';
  info: number;
  userAtutenticado = false;

  constructor(private http: HttpClient, private router: Router) { }

  postCreate(lista) {
    return this.http.post(this.API, lista).pipe(take(1));
  }

  getLista() {
   return this.http.get<Lista[]>(this.API).pipe(take(1));
  }

  putUpdate(lista) {
    return this.http.put(`${this.API}/${lista.id}`, lista).pipe(take(1));
  }

  delete(id) {
    return this.http.delete(`${this.API}/${id}`).pipe(take(1));
  }

  loadId(id) {
    return this.http.get(`${this.API}/${id}`).pipe(take(1));
  }

  loadInfo(id) {
    this.info = id;
  }

  informacao() {
    return this.info;
  }

  getLogin(user: User) {
    if ( user.email === 'lemobs' && user.senha === '1234') {
      this.userAtutenticado = true;
    } else {
      this.userAtutenticado = false;
    }
    return this.userAtutenticado;
  }
}


import { User } from './../layout/models/usuario.model';
import { CrudService } from '../layout/services/crud.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    formulario: FormGroup;
    user: User = new User();
    userAtutenticado: boolean;

    constructor(private crudService: CrudService, private router: Router, private form: FormBuilder) {}

    ngOnInit() {
      this.formulario = this.form.group({
        email: [null, Validators.required],
        senha: [null, Validators.required]
      });
    }

    onLogin() {
       this.user = this.formulario.value;
       this.userAtutenticado = this.crudService.getLogin(this.user);
       if (this.userAtutenticado === true) {
        localStorage.setItem('isLoggedin', 'true');
        this.router.navigate(['/dashboard']);
       } else {

       }
    }
}

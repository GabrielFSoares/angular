import { DialogCadastrarComponent } from './dialog-cadastrar/dialog-cadastrar.component';
import { CrudService } from '../services/crud.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.scss']
})
export class CadastrarComponent implements OnInit {

  formulario: FormGroup;

  constructor(private crudService: CrudService, private form: FormBuilder, public dialog: MatDialog) {
   }

  ngOnInit() {
    this.formulario = this.form.group({
      id: [null],
      first_name: [null, Validators.required],
      last_name: [null],
      avatar: [null],
      emprego: [null, Validators.required]
    });
  }

  cadastrar() {
    this.crudService.postCreate(this.formulario.value).subscribe(dados => {
      this.ngOnInit();
    });
  }

  openDialog(id) {
    this.dialog.open(DialogCadastrarComponent);
  }
}

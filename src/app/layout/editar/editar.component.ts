import { MatDialog } from '@angular/material';
import { DialogEditComponent } from './dialog-edit/dialog-edit.component';
import { CrudService } from '../services/crud.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.scss']
})
export class EditarComponent implements OnInit {

  formulario: FormGroup;

  constructor(private crudService: CrudService, private route: ActivatedRoute,
    private form: FormBuilder, public dialog: MatDialog) { }

  ngOnInit() {
    this.formulario = this.form.group({
      id: [null],
      first_name: [null, Validators.required],
      last_name: [null],
      avatar: [null],
      emprego: [null, Validators.required]
    });

    this.route.params.subscribe((params: any) => {
      const id = params['id'];
      const lista$ = this.crudService.loadId(id);
      lista$.subscribe(lista => {
        this.attForm(lista);
      });
    });
  }

  atualizar() {
    this.crudService.putUpdate(this.formulario.value).subscribe(sucess => {
    });
  }

  attForm(lista) {
    this.formulario.patchValue({
      id: lista.id,
      first_name: lista.first_name,
      last_name: lista.last_name,
      avatar: lista.avatar,
      emprego: lista.emprego
    });
  }

  openDialog() {
    this.dialog.open(DialogEditComponent);
  }
}

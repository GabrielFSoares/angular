import { MatDialog } from '@angular/material';
import { DialogComponent } from './dialog/dialog.component';
import { Lista } from './../../models/lista.model';
import { CrudService } from '../../services/crud.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dialog-delete',
  templateUrl: './dialog-delete.component.html',
  styleUrls: ['./dialog-delete.component.scss']
})
export class DialogDeleteComponent implements OnInit {
  info: number;
  lista: Lista[];

  constructor(private crudService: CrudService, public dialog: MatDialog) { }

  ngOnInit() {
    this.info = this.crudService.informacao();
    this.crudService.getLista().subscribe(dados => this.lista = dados);
  }

  remover() {
    this.crudService.delete(this.info).subscribe();
    this.ngOnInit();
  }

  openDialog() {
    this.dialog.open(DialogComponent);
  }
}

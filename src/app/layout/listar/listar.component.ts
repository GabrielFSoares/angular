import { DialogDeleteComponent } from './dialog-delete/dialog-delete.component';
import { Router, ActivatedRoute } from '@angular/router';
import { Lista } from './../models/lista.model';
import { Component, OnInit, Output } from '@angular/core';
import { CrudService } from '../services/crud.service';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss']
})
export class ListarComponent implements OnInit {
  info: number;
  lista: Lista[];

  constructor(private crudService: CrudService, private router: Router,
    private route: ActivatedRoute, public dialog: MatDialog) {
  }

  ngOnInit() {
    this.crudService.getLista().subscribe(dados => this.lista = dados);
  }

  edit(id) {
    this.router.navigate(['editar', id]);
  }

  openDialog(id) {
    this.dialog.open(DialogDeleteComponent);
    this.info = id;
    this.crudService.loadInfo(this.info);
  }

}


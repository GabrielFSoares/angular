import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule,
    MatDialogModule
} from '@angular/material';
import { TranslateModule } from '@ngx-translate/core';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { TopnavComponent } from './components/topnav/topnav.component';
import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { NavComponent } from './nav/nav.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { ListarComponent } from './listar/listar.component';
import { CrudService } from './services/crud.service';
import { EditarComponent } from './editar/editar.component';
import { DialogDeleteComponent } from './listar/dialog-delete/dialog-delete.component';
import { DialogCadastrarComponent } from './cadastrar/dialog-cadastrar/dialog-cadastrar.component';
import { DialogEditComponent } from './editar/dialog-edit/dialog-edit.component';
import { DialogComponent } from './listar/dialog-delete/dialog/dialog.component';

@NgModule({
    imports: [
        CommonModule,
        LayoutRoutingModule,
        MatToolbarModule,
        MatButtonModule,
        MatSidenavModule,
        MatIconModule,
        MatInputModule,
        MatMenuModule,
        MatListModule,
        TranslateModule,
        ReactiveFormsModule,
        HttpClientModule,
        MatDialogModule
    ],
    providers: [CrudService, HttpClientModule],
    declarations: [LayoutComponent, NavComponent, TopnavComponent, SidebarComponent, CadastrarComponent,
    ListarComponent, EditarComponent, DialogDeleteComponent, DialogCadastrarComponent, DialogEditComponent, DialogComponent, ],
    entryComponents: [DialogDeleteComponent, DialogCadastrarComponent, DialogEditComponent, DialogComponent]
})
export class LayoutModule { }

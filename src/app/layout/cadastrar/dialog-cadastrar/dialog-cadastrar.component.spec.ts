import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogCadastrarComponent } from './dialog-cadastrar.component';

describe('DialogCadastrarComponent', () => {
  let component: DialogCadastrarComponent;
  let fixture: ComponentFixture<DialogCadastrarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogCadastrarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogCadastrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

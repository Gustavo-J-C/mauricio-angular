import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnuncioCreateEditComponent } from './anuncio-create-edit.component';

describe('AnuncioCreateEditComponent', () => {
  let component: AnuncioCreateEditComponent;
  let fixture: ComponentFixture<AnuncioCreateEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AnuncioCreateEditComponent]
    });
    fixture = TestBed.createComponent(AnuncioCreateEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnuncioListComponent } from './anuncio-list.component';

describe('AnuncioListComponent', () => {
  let component: AnuncioListComponent;
  let fixture: ComponentFixture<AnuncioListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AnuncioListComponent]
    });
    fixture = TestBed.createComponent(AnuncioListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

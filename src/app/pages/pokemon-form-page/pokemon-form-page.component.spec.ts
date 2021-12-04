import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonFormPageComponent } from './pokemon-form-page.component';

describe('PokemonFormPageComponent', () => {
  let component: PokemonFormPageComponent;
  let fixture: ComponentFixture<PokemonFormPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokemonFormPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonFormPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

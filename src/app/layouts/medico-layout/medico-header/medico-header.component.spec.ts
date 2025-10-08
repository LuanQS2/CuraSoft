import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicoHeaderComponent } from './medico-header.component';

describe('MedicoHeaderComponent', () => {
  let component: MedicoHeaderComponent;
  let fixture: ComponentFixture<MedicoHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MedicoHeaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MedicoHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

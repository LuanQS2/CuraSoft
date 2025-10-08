import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicoFooterComponent } from './medico-footer.component';

describe('MedicoFooterComponent', () => {
  let component: MedicoFooterComponent;
  let fixture: ComponentFixture<MedicoFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MedicoFooterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MedicoFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssoFormComponent } from './asso-form.component';

describe('AssoFormComponent', () => {
  let component: AssoFormComponent;
  let fixture: ComponentFixture<AssoFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssoFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

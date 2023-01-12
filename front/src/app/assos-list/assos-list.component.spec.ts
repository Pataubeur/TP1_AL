import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssosListComponent } from './assos-list.component';

describe('AssosListComponent', () => {
  let component: AssosListComponent;
  let fixture: ComponentFixture<AssosListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssosListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssosListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassicalComponent } from './classical.component';

describe('ClassicalComponent', () => {
  let component: ClassicalComponent;
  let fixture: ComponentFixture<ClassicalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassicalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassicalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

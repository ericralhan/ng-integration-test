import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GreeterComponent } from './greeter.component';

describe('GreeterComponent', () => {
  let component: GreeterComponent;
  let fixture: ComponentFixture<GreeterComponent>;

  /* Reason for two beforeEach methods:
   * compileComponents() method compiles all the components mentioned in declaration
   * along with their styles(css) and templates. It reads the components from filesystem
   * and that is why uses an async() call
  **/
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GreeterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GreeterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

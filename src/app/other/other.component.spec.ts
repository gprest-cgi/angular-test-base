import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherComponent } from './other.component';

describe('OtherComponent', () => {
  let component: OtherComponent;
  let fixture: ComponentFixture<OtherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should render title in a h1 tag', () => {
    fixture = TestBed.createComponent(OtherComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('other component works!');
  });
});

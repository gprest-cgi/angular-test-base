import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { OtherComponent } from './other/other.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        OtherComponent
      ],
    }).compileComponents();
  }));

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to FIX-TEST!');
  });

  it(`should have as title 'FIX-TEST'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('FIX-TEST');
  });
});

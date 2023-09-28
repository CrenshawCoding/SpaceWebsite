import { TestBed } from '@angular/core/testing';
import { AsteroidOverview } from './asteroid-overview/asteroid-overview.component';

describe('AppComponent', () => {
  beforeEach(() => TestBed.configureTestingModule({
    declarations: [AsteroidOverview]
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AsteroidOverview);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'space-website'`, () => {
    const fixture = TestBed.createComponent(AsteroidOverview);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('space-website');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AsteroidOverview);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('space-website app is running!');
  });
});

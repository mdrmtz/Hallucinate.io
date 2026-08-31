import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DocsComponent } from './docs.component';

describe('DocsComponent', () => {
  let component: DocsComponent;
  let fixture: ComponentFixture<DocsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DocsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DocsComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('renders its main heading', () => {
    expect(fixture.nativeElement.querySelector('h1')?.textContent).toContain('Playground documentation');
  });
});

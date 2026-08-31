import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CaseStudiesComponent } from './case-studies.component';

describe('CaseStudiesComponent', () => {
  let component: CaseStudiesComponent;
  let fixture: ComponentFixture<CaseStudiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CaseStudiesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CaseStudiesComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('renders its main heading', () => {
    expect(fixture.nativeElement.querySelector('h1')?.textContent).toContain('Case studies');
  });
});

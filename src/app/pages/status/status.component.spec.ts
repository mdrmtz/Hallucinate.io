import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StatusComponent } from './status.component';

describe('StatusComponent', () => {
  let component: StatusComponent;
  let fixture: ComponentFixture<StatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StatusComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(StatusComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('renders its main heading', () => {
    expect(fixture.nativeElement.querySelector('h1')?.textContent).toContain('System status');
  });
});

import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  selector: 'app-docs',
  styleUrl: './docs.component.scss',
  templateUrl: './docs.component.html',
})
export class DocsComponent {
  protected language = 'TypeScript';

  protected selectLanguage(): void {
    this.language = this.language === 'TypeScript' ? 'Python' : 'TypeScript';
  }
}

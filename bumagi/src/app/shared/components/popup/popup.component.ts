import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PopupComponent {
  @Input() title: string;

  @Output() close = new EventEmitter<boolean>();

  public closePopup(): void {
    this.close.emit(false);
  }
}

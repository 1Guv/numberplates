import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { ExtendWindow, Share } from 'src/app/_models/share-button';

declare var window: ExtendWindow;

@Component({
  selector: 'app-share-button',
  templateUrl: './share-button.component.html',
  styleUrls: ['./share-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShareButtonComponent {

  @Input() share: Share;

  onClick() {
    window.navigator.share(this.share);
  }

}

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

    const navigator = window.navigator as any;
    // Share button will only work on https
    if (navigator.share) {
      console.log('share', this.share);
      console.log('window.navigator.share', window.navigator.share(this.share));
      window.navigator.share(this.share);
    } else {
      alert('Share not supported');
    }
  }

}

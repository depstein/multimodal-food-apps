import {
  Component,
  OnInit,
  Input,
  HostBinding,
  Output,
  EventEmitter
} from '@angular/core';
import { AppBarTitleLayout } from '../interfaces';
import { TabButtonClickEventDetail } from '@ionic/core';
import { Router } from "@angular/router";


@Component({
  selector: 'fiv-app-bar-tab-content',
  templateUrl: './app-bar-tab-content.component.html',
  styleUrls: ['./app-bar-tab-content.component.scss']
})
export class FivAppBarTabContent implements OnInit {
  @Input() name: string;
  @Input() icon: string;
  @Input() tab: string;
  @Input() href: string;
  @Input() active = false;
  @Input() titleLayout: AppBarTitleLayout = 'hide';

  private selected = false;
  @Input() badge = -1;

  @HostBinding('class') get classes(): string {
    return `label-${this.titleLayout}`;
  }

  @Output() ionTabButtonClick = new EventEmitter<TabButtonClickEventDetail>();

  constructor(private router: Router,) {}

  ngOnInit() {}

  onClick() {
    this.router.navigateByUrl(this.href);
    // this.ionTabButtonClick.emit({
    //   tab: this.tab,
    //   href: this.href,
    //   selected: true
    // });
  }
}

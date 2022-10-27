import { Component } from "@angular/core";
import ENV from '../../../../config/env';

@Component({
  selector: 'header-component',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  logo: string = ENV.LOGO_URL;
}
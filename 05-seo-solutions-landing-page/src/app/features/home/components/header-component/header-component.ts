import { Component } from '@angular/core';
import { headerInfo } from '@features/home/constants/header.contant';

@Component({
  selector: 'app-header-component',
  imports: [],
  templateUrl: './header-component.html',
})
export class HeaderComponent {
  headerInfoUl = headerInfo;
}

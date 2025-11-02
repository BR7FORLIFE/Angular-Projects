import { Component } from '@angular/core';
import { HeaderComponent } from '@features/home/components/header-component/header-component';
import { SocialMediaComponent } from '@features/home/components/social-media-component/social-media-component';
import { HeroMain } from '@features/home/components/hero-main/hero-main';

@Component({
  selector: 'app-home-page',
  imports: [SocialMediaComponent, HeaderComponent, HeroMain],
  templateUrl: './home-page.html',
})
export class HomePage {

}

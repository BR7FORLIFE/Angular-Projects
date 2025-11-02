import { Component } from '@angular/core';
import { socialMedia } from '@features/home/constants/social-media.contant';

@Component({
  selector: 'app-social-media-component',
  imports: [],
  templateUrl: './social-media-component.html',
})
export class SocialMediaComponent {
  socialMediaInfo = socialMedia
}

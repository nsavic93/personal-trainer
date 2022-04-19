import { Component } from '@angular/core';
import {
  faFacebook,
  faInstagram,
  faTiktok,
} from '@fortawesome/free-brands-svg-icons';
import {
  faBars,
  faCoffee,
  faTimesCircle,
  faVolumeUp,
} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'personal-trainer';
  faCoffee = faCoffee;
  faVolumeUp = faVolumeUp;
  faInstagram = faInstagram;
  faFacebook = faFacebook;
  faTikTok = faTiktok;
  faBars = faBars;
  faTimesCircle = faTimesCircle
  logo = '../assets/logo4.png';
  mobileNav = false;

  openMobileNav() {
    this.mobileNav = true;
  }
  closeMobileNav(){
    this.mobileNav = false;
  }
}

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
import { TranslateService } from '@ngx-translate/core';
import { LoginService } from './_services/login.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(translate: TranslateService, private loginService: LoginService){
    this.loginService.isLoggedIn.subscribe((data)=>{
      this.isLogged=data
    })
  }
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
  isLogged
  ngOnInit(): void {
   
  }

  openMobileNav() {
    this.mobileNav = true;
  }
  closeMobileNav(){
    this.mobileNav = false;
  }
}

import { Component } from '@angular/core';
import { faFacebook, faInstagram, faTiktok } from '@fortawesome/free-brands-svg-icons';
import { faCoffee, faVolumeUp, } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'personal-trainer';
  faCoffee = faCoffee;
  faVolumeUp= faVolumeUp;
  faInstagram = faInstagram;
  faFacebook = faFacebook;
  faTikTok = faTiktok;
  logo = "../assets/logo4.png"
}

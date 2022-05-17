import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/_services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(private loginService: LoginService) {}
  username;
  password;
  ngOnInit(): void {}
  login() {
    this.loginService.login(this.username, this.password).subscribe((data) => {
    
      
      if (data.msg === 'OK') {
        this.loginService.setIsLoggedIn(true);
        
      }
      this.loginService.isLoggedIn.subscribe((data) => {
        console.log(data);
      });
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { UserService }  from '../user.service';
import { faGoogle, faFacebook } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: any;
  faFacebook = faFacebook;
  faGoogle = faGoogle;

  constructor(private UserService: UserService) { }

  ngOnInit() {
    this.UserService.getUser().subscribe(user => {
      this.user = user;
      console.log(user);
    })
  }

}

import { Component, OnInit } from '@angular/core';
import { UserService }  from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: any;

  constructor(private UserService: UserService) { }

  ngOnInit() {
    this.UserService.getUser().subscribe(user => {
      this.user = user;
      console.log(user);
    })
  }

}

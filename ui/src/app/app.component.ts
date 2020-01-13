import {Component, OnInit} from '@angular/core';
import {UsersService} from "./users.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'workout-plans';
  hambergurShow = false;
  constructor(private userService: UsersService) {
  }

  ngOnInit(): void {
    this.userService.getUsers()
      .subscribe(res => console.log(res));
  }

  toggleMenu() {
    this.hambergurShow = !this.hambergurShow;
  }

}

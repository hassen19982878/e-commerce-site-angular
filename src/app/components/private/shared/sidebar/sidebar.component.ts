import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
isAdmin:Boolean=false;
isClient:Boolean=false
  constructor(private userService:UsersService) { }

  ngOnInit(): void {
    this.isAdmin=this.userService.isLoggedInAdmin();
    this.isClient=this.userService.isLoggedInClient();
  }

}

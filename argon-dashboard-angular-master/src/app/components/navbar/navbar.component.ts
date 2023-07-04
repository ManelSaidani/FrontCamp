import { Component, OnInit, ElementRef } from '@angular/core';
import { ROUTES } from '../sidebar/sidebar.component';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { Router } from '@angular/router';
import { TokenStorageService } from 'src/app/_services/token-storage.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  private roles: string[];
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  username: string;
  public focus;
  public listTitles: any[];
  public location: Location;
  currentUser: any;
  constructor(location: Location,  private element: ElementRef, private router: Router ,private tokenStorageService: TokenStorageService)  {
   
  }
  
  

  ngOnInit() : void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();
 
    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;
 
      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
 
      this.username = user.displayName;
    }
   
  }
  logout(): void {
    this.tokenStorageService.signOut();
    this.router.navigateByUrl('/dashboard');
  }
  
}

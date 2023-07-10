import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '@app/services/user.services';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  assetPath: string | undefined;

  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.assetPath = `${document.baseURI}assets/mosquito_logo.png`;

  }

  logout(){
    this.userService.logout()
      .then(response => {
        console.log(response);
        this.router.navigate(['/login']);
      })
      .catch(error => console.log(error))
  }

}

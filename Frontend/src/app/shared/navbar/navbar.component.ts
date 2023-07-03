import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  assetPath: string | undefined;

  constructor() { }

  ngOnInit(): void {
    this.assetPath = `${document.baseURI}assets/mosquito_logo.png`;

  }

}

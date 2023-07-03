import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  assetPath: string | undefined;
  assetPath2: string | undefined;
  assetPath3: string | undefined;
  assetPath4: string | undefined;


  constructor() { }

  ngOnInit(): void {
    this.assetPath = `${document.baseURI}assets/huevos.png`;
    this.assetPath2 = `${document.baseURI}assets/flecha.png`;
    this.assetPath3 = `${document.baseURI}assets/huevos2.png`;
    this.assetPath4 = `${document.baseURI}assets/camara.png`;

  }

}

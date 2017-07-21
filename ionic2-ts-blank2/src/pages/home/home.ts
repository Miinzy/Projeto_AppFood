import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
    
  }
  
  onLink(url: string) {
      window.open(url);
  }
}
export class Home {
    public toggled: boolean;

    constructor() {
        this.toggled = false;
    }

    toggleSearch() {
        this.toggled = this.toggled ? false : true;
    }
}
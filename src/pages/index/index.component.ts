import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Page2PageComponent } from '../pages.module'

/**
 * Generated class for the IndexPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-index',
  templateUrl: 'index.html',
})
export class IndexPageComponent {

  page2: any = Page2PageComponent;

  constructor(public navCtrl: NavController) {
  }

  navigate() {
    this.navCtrl.push(Page2PageComponent);
  }
}

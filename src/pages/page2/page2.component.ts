import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Page3PageComponent } from "../pages.module"
import { Mutant } from "../../intefaces/mutant.interface"

/**
 * Generated class for the Page2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-page2',
  templateUrl: 'page2.html',
})
export class Page2PageComponent {

  page3:any = Page3PageComponent;
  mutants:Mutant[] = [
    {
      name: "Magneto",
      power: "Metal control"
    },
    {
      name: "Wolverine",
      power: "Adamantium body"
    },
    {
      name: "X Master",
      power: "Mental Control"
    },
    {
      name: "Gambit",
      power: "Trilero"
    }
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  goToPage3(mutant: any) {
    console.log('Mutant', mutant);
    this.navCtrl.push(Page3PageComponent, { mutant });
  }

}

import { Component } from '@angular/core';
import { NavParams, NavController } from "ionic-angular"
import { Mutant } from "../../intefaces/mutant.interface"

@Component({
  selector: 'page-page3',
  templateUrl: 'page3.html',
})

export class Page3PageComponent {
  mutant: Mutant;

  constructor(public navParams:NavParams, private navCtrl:NavController){
    console.log(navParams.get('mutant'));
    this.mutant = navParams.get('mutant');
  }

  goBack() {
    this.navCtrl.pop();
  }

  goHome() {
    this.navCtrl.popToRoot();
  }
}

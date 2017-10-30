import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { ModalPageComponent } from "../modal/modal.component"

/**
 * Generated class for the SettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPageComponent {

  constructor(public navCtrl: NavController, public navParams: NavParams, private modalCtrl: ModalController) {
  }

  goHome() {
    this.navCtrl.parent.select(0);
  }

  showModal() {
    let modal = this.modalCtrl.create(ModalPageComponent, {name: "Adrian", age: 23});
    modal.present();

    modal.onDidDismiss(data => { data ? console.log('Modal data', data) : console.log('No data return')})
  }
}

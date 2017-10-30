import { Component } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the ModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-modal',
  templateUrl: 'modal.html',
})
export class ModalPageComponent {

  name: string;
  age: number;

  constructor(public viewCtrl: ViewController, public navParams: NavParams) {
    this.name = navParams.get('name');
    this.age = navParams.get('age');
    console.log('Name', this.name, 'Age', this.age);
  }

  closeModalWithParams() {
    let data = {
      name: 'Adrian',
      age: 23,
      coords: {
        lat: 10,
        long: -10
      }
    }
    this.viewCtrl.dismiss(data);
  }

  closeModalWithoutParams() {
    this.viewCtrl.dismiss()
  }

}

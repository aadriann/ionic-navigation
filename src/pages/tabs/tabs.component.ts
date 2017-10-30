import { Component } from '@angular/core';
import { IndexPageComponent, SettingsPageComponent } from "../pages.module"

/**
 * Generated class for the TabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPageComponent {
  tab1: any;
  tab2: any;
  
  constructor() {
    this.tab1 = IndexPageComponent;
    this.tab2 = SettingsPageComponent;
  }

}

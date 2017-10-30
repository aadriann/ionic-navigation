import { Component } from '@angular/core';
import { Platform, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPageComponent, ExtraSettingsPageComponent } from "../pages/pages.module"

@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  tabsPage = TabsPageComponent;
  extraSettingsPage = ExtraSettingsPageComponent;
  rootPage:any = TabsPageComponent;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private menuCtrl: MenuController) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  goToPage(page:any) {
    this.rootPage = page;
    this.menuCtrl.close();
  }
}

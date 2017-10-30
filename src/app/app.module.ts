import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { IndexPageComponent, ExtraSettingsPageComponent, ModalPageComponent, Page2PageComponent, Page3PageComponent, SettingsPageComponent, TabsPageComponent } from "../pages/pages.module"

@NgModule({
  declarations: [
    MyApp,
    IndexPageComponent,
    ExtraSettingsPageComponent,
    ModalPageComponent,
    Page2PageComponent,
    Page3PageComponent,
    SettingsPageComponent,
    TabsPageComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {
      backButtonText: 'Back'
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    IndexPageComponent,
    ExtraSettingsPageComponent,
    ModalPageComponent,
    Page2PageComponent,
    Page3PageComponent,
    SettingsPageComponent,
    TabsPageComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}

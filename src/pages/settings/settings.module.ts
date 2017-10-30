import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SettingsPageComponent } from './settings.component';

@NgModule({
  declarations: [
    SettingsPageComponent,
  ],
  imports: [
    IonicPageModule.forChild(SettingsPageComponent),
  ],
})
export class SettingsPageModule {}

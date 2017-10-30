import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ExtraSettingsPageComponent } from './extra-settings.component';

@NgModule({
  declarations: [
    ExtraSettingsPageComponent,
  ],
  imports: [
    IonicPageModule.forChild(ExtraSettingsPageComponent),
  ],
})
export class ExtraSettingsPageModule {}

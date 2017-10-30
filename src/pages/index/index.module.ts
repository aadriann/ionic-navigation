import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { IndexPageComponent } from './index.component';

@NgModule({
  declarations: [
    IndexPageComponent,
  ],
  imports: [
    IonicPageModule.forChild(IndexPageComponent),
  ],
})
export class IndexPageModule {}

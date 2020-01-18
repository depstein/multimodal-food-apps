import { FivIconModule } from '@fivethree/core';
import { FivAppBarTabContent } from './app-bar-tab-content/app-bar-tab-content.component';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FivAppBar } from './app-bar.component';
import { FivAppBarTab } from './app-bar-tab/app-bar-tab.component';
import { IonicModule } from '@ionic/angular';
import { FivRippleModule } from '../ripple/ripple.module';
import { FivFabModule } from '@fivethree/core';

@NgModule({
  declarations: [FivAppBar, FivAppBarTabContent, FivAppBarTab],
  imports: [
    CommonModule,
    FivIconModule,
    FivFabModule,
    FivRippleModule,
    IonicModule
  ],
  exports: [FivAppBar, FivAppBarTabContent, FivAppBarTab],
  providers: [],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
})
export class FivAppBarModule {}

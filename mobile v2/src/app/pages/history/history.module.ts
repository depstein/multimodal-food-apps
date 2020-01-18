import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import {FivIconModule, FivFabModule} from '@fivethree/core';

import { IonicModule } from '@ionic/angular';

import { HistoryPage } from './history.page';

import {FivAppBarModule} from '../../app-bar/app-bar.module';


const routes: Routes = [
  {
    path: '',
    component: HistoryPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FivAppBarModule,
    FivIconModule,
    FivFabModule,
    RouterModule.forChild(routes)
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  declarations: [HistoryPage]
})
export class HistoryPageModule {}

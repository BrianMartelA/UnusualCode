import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProgrammerPageRoutingModule } from './programmer-routing.module';

import { ProgrammerPage } from './programmer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProgrammerPageRoutingModule
  ],
  declarations: [ProgrammerPage]
})
export class ProgrammerPageModule {}

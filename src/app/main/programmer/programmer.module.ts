import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProgrammerPageRoutingModule } from './programmer-routing.module';

import { ProgrammerPage } from './programmer.page';
import { RouterLink } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProgrammerPageRoutingModule,RouterLink
  ],
  declarations: [ProgrammerPage]
})
export class ProgrammerPageModule {}

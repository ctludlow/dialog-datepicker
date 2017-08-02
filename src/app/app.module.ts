import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {MdDialogModule} from '@angular/material';
import {MaterialModule } from '@angular/material';
import { MdNativeDateModule } from '@angular/material';
import 'hammerjs';

import { DialogResultExample } from './app.component';
import { DialogResultExampleDialog } from './app.component';

@NgModule({
  declarations: [
    DialogResultExample,
    DialogResultExampleDialog
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    MdNativeDateModule
  ],
  providers: [],
  bootstrap: [DialogResultExample],
  entryComponents: [DialogResultExampleDialog]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '../app/material/material.module';
import { WatchListDialogComponent } from './watch-list-dialog/watch-list-dialog.component';
import { DialogComponent } from './dialog/dialog.component'
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { MovieService } from './movie.service';
import { WatchListTableComponent } from './watch-list-table/watch-list-table.component'

@NgModule({
  declarations: [
    AppComponent,
    WatchListDialogComponent,
    DialogComponent,
    WatchListTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    MovieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

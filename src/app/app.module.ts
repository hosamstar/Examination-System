import { BrowserModule, makeStateKey } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NgModule } from '@angular/core';

import { MaterialModule } from './material/material.module';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent

    
  ],
  imports: [
  BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

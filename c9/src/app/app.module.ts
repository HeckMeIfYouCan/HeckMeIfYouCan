import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule} from './modules/material/material.module';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { ImpressumComponent } from './components/impressum/impressum.component';
import { PrivacyComponent } from './components/privacy/privacy.component';
import { ThesisComponent } from './components/thesis/thesis.component';
import { HomeComponent } from './components/home/home.component';
import { DataService } from "./services/data/data.service";

@NgModule({
  declarations: [
    AppComponent,
    ImpressumComponent,
    PrivacyComponent,
    ThesisComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

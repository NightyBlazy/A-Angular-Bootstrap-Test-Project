import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { IntroComponent } from './intro/intro.component';
import { ExplanationComponent } from './explanation/explanation.component';
import { IdealsComponent } from './ideals/ideals.component';
import { TsuncanvasComponent } from './tsuncanvas/tsuncanvas.component';
import { TformComponent } from './tform/tform.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    IntroComponent,
    ExplanationComponent,
    IdealsComponent,
    TsuncanvasComponent,
    TformComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

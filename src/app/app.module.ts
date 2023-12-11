import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnuncioListComponent } from './anuncio-list/anuncio-list.component';
import { AnuncioDetailsComponent } from './anuncio-details/anuncio-details.component';
import { AnuncioCreateEditComponent } from './anuncio-create-edit/anuncio-create-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    AnuncioListComponent,
    AnuncioDetailsComponent,
    AnuncioCreateEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

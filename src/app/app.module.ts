///<reference path="app.component.ts"/>
import { BrowserModule } from '@angular/platform-browser';
//import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule,  ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule }  from '@angular/common/http';
//import { MatCardModule } from '@angular/material/card';
//import { FlexLayoutModule } from '@angular/flex-layout';
///import { MatSelectModule } from '@angular/material/select';


import { AppComponent } from './app.component';

// Components
import { TransformersComponent } from './transformers/transformers.component';

// Services
import { TransformersService } from './transformers.service';
import { FactionsComponent } from './factions/factions.component';
import { FeaturesComponent } from './features/features.component';

//Routing
import { RoutingModule } from './routing/routing.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    TransformersComponent,
    FactionsComponent,
    FeaturesComponent
  
  ],
  imports: [
    FormsModule,  
	ReactiveFormsModule,
    BrowserModule,
    HttpClientModule,
    RoutingModule,
    NoopAnimationsModule
  ],
  providers: [TransformersService],
  bootstrap: [AppComponent]
})
export class AppModule {


 }

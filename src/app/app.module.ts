import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PassengerDashbordComponent } from './components/passenger-dashbord/passenger-dashbord.component';
import { PassengerCountComponent } from './components/passenger-dashbord/passenger-count/passenger-count.component';
import { PassengerCardComponent } from './components/passenger-dashbord/passenger-card/passenger-card.component';

@NgModule({
  declarations: [
    AppComponent,
    PassengerDashbordComponent,
    PassengerCountComponent,
    PassengerCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

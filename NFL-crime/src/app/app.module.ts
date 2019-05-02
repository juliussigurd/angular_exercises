import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopCrimeComponent } from './top-crime/top-crime.component';
import { TopPlayersForCrimeComponent } from './top-players-for-crime/top-players-for-crime.component';
import { TopTeamsForCrimeComponent } from './top-teams-for-crime/top-teams-for-crime.component';
import { CrimeTimeLineComponent } from './crime-time-line/crime-time-line.component';
import { TopTeamsComponent } from './top-teams/top-teams.component';
import { TopPlayersComponent } from './top-players/top-players.component';

@NgModule({
  declarations: [
    AppComponent,
    TopCrimeComponent,
    TopPlayersForCrimeComponent,
    TopTeamsForCrimeComponent,
    CrimeTimeLineComponent,
    TopTeamsComponent,
    TopPlayersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

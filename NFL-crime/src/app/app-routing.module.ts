import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TopCrimeComponent } from './top-crime/top-crime.component';
import { TopPlayersForCrimeComponent } from './top-players-for-crime/top-players-for-crime.component';
import { TopTeamsForCrimeComponent } from './top-teams-for-crime/top-teams-for-crime.component';
import { CrimeTimeLineComponent } from './crime-time-line/crime-time-line.component';
import { CHART } from 'chart.js';

const routes: Routes = [  
  { path: '', component: TopCrimeComponent },  
  { path: 'topPlayers/:crimeID', component: TopPlayersForCrimeComponent},
  { path: 'topTeams/:crimeID', component: TopTeamsForCrimeComponent},
  // { path: 'crimeTimeLine/:crimeID', component: CrimeTimeLineComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

//Chart


import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Team, Crime } from '../module';
import { NFLArrestService } from '../nfl-arrest.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-top-teams-for-crime',
  templateUrl: './top-teams-for-crime.component.html',
  styleUrls: ['./top-teams-for-crime.component.css']
})
export class TopTeamsForCrimeComponent implements OnInit {
  teams: Observable<Team[]>
  crimeID: string|null = null;

  constructor(
    private service: NFLArrestService,
    private routing: ActivatedRoute
  ) { }

  ngOnInit() {
    this.crimeID = this.routing.snapshot.paramMap.get('crimeID')
    this.teams = this.service.getTopTeamsForCrime(this.crimeID)
  }

}

import { Component, OnInit } from '@angular/core';
import { NFLArrestService } from '../nfl-arrest.service';
import { Observable } from 'rxjs';
import { Crime, Team, TopTeam } from '../module';

@Component({
  selector: 'app-top-teams',
  templateUrl: './top-teams.component.html',
  styleUrls: ['./top-teams.component.css']
})
export class TopTeamsComponent implements OnInit {
  TopTeams: Observable<TopTeam[]>

  constructor(private service: NFLArrestService) { }

  ngOnInit() {
    this.TopTeams = this.service.getTopTeams()
  }

}

import { Component, OnInit } from '@angular/core';
import { NFLArrestService } from '../nfl-arrest.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Player } from '../module';

@Component({
  selector: 'app-top-players-for-crime',
  templateUrl: './top-players-for-crime.component.html',
  styleUrls: ['./top-players-for-crime.component.css'],
  providers: [NFLArrestService],
})

export class TopPlayersForCrimeComponent implements OnInit {
  players: Observable<Player[]>
  crimeID: string|null = null;

  constructor(
    private service: NFLArrestService, 
    private routing: ActivatedRoute
    ) { }

  ngOnInit() {
    this.crimeID = this.routing.snapshot.paramMap.get('crimeID')
    this.players = this.service.getTopPlayersForCrime(this.crimeID)
  }

}

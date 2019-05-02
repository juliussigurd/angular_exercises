import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TopPlayer } from '../module';
import { NFLArrestService } from '../nfl-arrest.service';

@Component({
  selector: 'app-top-players',
  templateUrl: './top-players.component.html',
  styleUrls: ['./top-players.component.css']
})
export class TopPlayersComponent implements OnInit {
  TopPlayers: Observable<TopPlayer[]>

  constructor(private service: NFLArrestService) { }

  ngOnInit() {
    this.TopPlayers = this.service.getTopPlayers()
  }

}

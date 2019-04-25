import { Component, OnInit } from '@angular/core';
import { NFLArrestService } from '../nfl-arrest.service';
import { Crime, TimeLine } from '../module';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-top-crime',
  templateUrl: './top-crime.component.html',
  styleUrls: ['./top-crime.component.css'],
  providers: [NFLArrestService]
})

export class TopCrimeComponent implements OnInit {
  crimes: Observable<Crime[]>

  constructor(private service: NFLArrestService) { }

  ngOnInit() {
    this.crimes = this.service.getTopCrimes()
  }
  
}
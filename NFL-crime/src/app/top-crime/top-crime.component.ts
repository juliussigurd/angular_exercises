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

  numberLoaded: number = 2;

  constructor(private service: NFLArrestService) { }

  ngOnInit() {
    this.getTopCrimes(this.numberLoaded);
  }

  showMore() {
    this.numberLoaded += 2;
    this.getTopCrimes(this.numberLoaded);
  }

  getTopCrimes(limit) {
    this.crimes = this.service.getTopCrimes(limit);
  }
  
}
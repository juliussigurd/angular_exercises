import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TimeLine } from '../module';
import { NFLArrestService } from '../nfl-arrest.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-crime-time-line',
  templateUrl: './crime-time-line.component.html',
  styleUrls: ['./crime-time-line.component.css']
})
export class CrimeTimeLineComponent implements OnInit {
  timelines: Observable<TimeLine[]>
  crimeID: string|null = null;

  constructor(
    private service: NFLArrestService,
    private routing: ActivatedRoute 
  ) { }

  ngOnInit() {
    this.crimeID = this.routing.snapshot.paramMap.get('crimeID')
    this.timelines = this.service.getCrimeTimeLine(this.crimeID)
  }

}

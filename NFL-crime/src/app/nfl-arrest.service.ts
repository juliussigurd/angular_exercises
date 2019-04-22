import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Crime, Team, Player } from './module';

@Injectable({
  providedIn: 'root'
})
export class NFLArrestService {
  private nflUrl = 'http://NflArrest.com/api/v1';

  constructor(
    private http: HttpClient
  ) { }

  getTopCrimes(): Observable<Crime[]> {
    return this.http.get<Crime[]>(this.nflUrl+'/crime')
  }

  getTopPlayersForCrime(crimeID: string): Observable<Player[]> {
    return this.http.get<Player[]>(this.nflUrl+`/crime/topPlayers/${crimeID}`)
  }

  getTopTeamsForCrime(crimeID: string): Observable<Team[]> {
    return this.http.get<Team[]>(this.nflUrl+`/crime/topTeams/${crimeID}`)
  }

}


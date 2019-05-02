import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Crime, Team, Player, TimeLine, TopTeam, TopPlayer } from './module';

@Injectable({
  providedIn: 'root' //provides service in app.module, with the alias 'root' 
})
export class NFLArrestService {
  private nflUrl = 'http://NflArrest.com/api/v1';

  constructor(
    private http: HttpClient
  ) { }

  //Top Crimes
  getTopCrimes(): Observable<Crime[]> {
    return this.http.get<Crime[]>(this.nflUrl+'/crime')
  }

  //Top Teams
  getTopTeams():Observable<TopTeam[]> {
    return this.http.get<TopTeam[]>(this.nflUrl+'/team')
  }

  //Top Players
  getTopPlayers():Observable<TopPlayer[]> {
    return this.http.get<TopPlayer[]>(this.nflUrl+'/player')
  }

  //Top Players For Crime
  getTopPlayersForCrime(crimeID: string): Observable<Player[]> {
    return this.http.get<Player[]>(this.nflUrl+`/crime/topPlayers/${crimeID}`)
  }

  //Top Teams For Crime
  getTopTeamsForCrime(crimeID: string): Observable<Team[]> {
    return this.http.get<Team[]>(this.nflUrl+`/crime/topTeams/${crimeID}`)
  }

    //Crime Timeline
    getCrimeTimeLine(crimeID): Observable<TimeLine[]> {
      return this.http.get<TimeLine[]>(this.nflUrl+`/crime/timeline/${crimeID}`)
    }
    

}

export class Crime {
    Category: string;
    arrest_count: string
}

export class TimeLine{
    Month: string;
    Year: string;
    arrest_count: string;
}

export class TopTeam {
    Team:                     string;
    Team_preffered_name:      string;
    Team_name:                string;
    Team_city:                string;
    Team_Conference:          string;
    Team_Conference_Division: string;
    Team_logo_id:             string;
    arrest_count:             string;
}


export class Team {
    Team: string;
    Team_name: string;
    Team_city: string; 
    arrest_count: string;
}

export class TopPlayer {
    Name:         string;
    Team:         string;
    Team_name:    string;
    Team_city:    string;
    Position:     string;
    arrest_count: string;
}

export class Player {
    Name: string;
    arrest_count: string;
}

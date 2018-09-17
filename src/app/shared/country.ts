
export class Country {
    name:           string;
    callingCodes:   string[];
    capital:        string;
    altSpellings:   string[];
    region:         string;
    subregion:      string;
    population:     number;
    demonym:        string;
    area:           number;
    timezones:      string[];
    borders:        string[];
    currencies:     Currency[];
    languages:      Language[];
    flag:           string;
}

export interface Currency {
    code:   string;
    name:   string;
    symbol: string;
}

export interface Language {
    name:       string;
    nativeName: string;
}

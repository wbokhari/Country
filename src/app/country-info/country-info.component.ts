import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import {Country} from '../shared/country';

@Component({
  selector: 'app-country-info',
  templateUrl: './country-info.component.html',
  styleUrls: ['./country-info.component.css']
})
export class CountryInfoComponent implements OnInit {

   public search: string;
   public title: string;
   private apiUrl: string = 'https://restcountries.eu/rest/v2/name/';
   public countries: Country[];

  constructor(private http: Http) {
  }

  ngOnInit() {
  }

  public searchCountry(searchText: string): void{
    this.search = searchText;
    this.http.get(this.apiUrl + searchText).subscribe((res:Response) => {
      this.countries = res.json();
      console.log(this.countries);
    })
    console.log("searchCountry", this.search);
  }


}

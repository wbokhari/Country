import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';

@Component({
  selector: 'app-country-info',
  templateUrl: './country-info.component.html',
  styleUrls: ['./country-info.component.css']
})
export class CountryInfoComponent implements OnInit {

   public search: string;
   public title: string;
   private apiUrl: string = 'https://restcountries.eu/rest/v2/name/';
   public data: any;

  constructor(private http: Http) {
  }

  ngOnInit() {
  }

  public searchCountry(searchText: string): void{
    this.search = searchText;
    this.http.get(this.apiUrl + searchText).subscribe((res:Response) => {
      console.log(res.json());
      this.data = res.json();
    })
    console.log("searchCountry", this.search);
  }


}

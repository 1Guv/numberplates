import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PlateListingsService {

  awsUrl = 'https://46pkjw13ag.execute-api.eu-west-2.amazonaws.com/prod/';

  headerDict = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Origin': '*',
    'x-api-key': environment.awsConfig.xApiKey
  };

  requestOptions = {
    headers: new HttpHeaders(this.headerDict),
    method: 'GET',
    mode: 'no-cors',
  };

  constructor(
    private http: HttpClient
  ) { }

  getPlates() {
    return this.http.get(`${this.awsUrl} + 'platelistings'`, this.requestOptions);
  }

  getPlate(id: number) {
    return this.http.get(`${this.awsUrl} + 'plateListing' + 'id=' ${id}`, this.requestOptions);
  }

  createPlate(newPlate: any) {
    return this.http.post(`${this.awsUrl}plateListing`, newPlate, this.requestOptions);
  }
}

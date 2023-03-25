import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PlateListingsService {

  awsUrl = 'https://46pkjw13ag.execute-api.eu-west-2.amazonaws.com/prod/';

  headerDict = {
    // 'Content-Type': 'application/json',
    // 'Access-Control-Allow-Headers': 'Content-Type',
    // 'Access-Control-Allow-Origin': '*',
    'x-api-key': environment.awsConfig.xApiKey
  };

  requestOptionsGet = {
    headers: new HttpHeaders(this.headerDict),
    method: 'GET',
    mode: 'no-cors',
  };

  requestOptionsPost = {
    headers: new HttpHeaders(this.headerDict),
    method: 'POST',
    mode: 'no-cors',
  };

  requestOptionsDelete = {
    headers: new HttpHeaders(this.headerDict),
    method: 'DELETE',
    mode: 'no-cors',
  };

  constructor(
    private http: HttpClient
  ) { }

  getPlates() {
    console.log('requestOptionsGet:', this.requestOptionsGet);
    return this.http.get(`${this.awsUrl} + 'platelistings'`, this.requestOptionsGet);
  }

  getPlate(id: number) {
    return this.http.get(`${this.awsUrl} + 'plateListing' + 'id=' ${id}`, this.requestOptionsGet);
  }

  createPlate(newPlate: any) {
    return this.http.post(`${this.awsUrl}plateListing`, newPlate, this.requestOptionsPost);
  }

  deletePlate(plateId: string) {
    console.log('requestOptionsDelete:', this.requestOptionsDelete);

    const body = { id: plateId };
    this.requestOptionsDelete['body'] = body;
    return this.http.delete(`${this.awsUrl}plateListing`, this.requestOptionsDelete);
  }
}

// clb8jm3ff00133b9xvqnsb6ia-plate-MR-58NGA-47
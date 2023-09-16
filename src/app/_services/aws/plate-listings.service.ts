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
    // 'Access-Control-Request-Headers': 'content-type',
    // 'Access-Control-Request-Headers': 'content-type',
    // 'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE',
    // 'Access-Control-Request-Method': 'POST'
    // 'Access-Control-Allow-Headers': 'Content-Type',
    // 'Access-Control-Allow-Origin': '*',
    // 'Access-Control-Allow-Credentials': 'true',
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

  requestOptionsPut = {
    headers: new HttpHeaders(this.headerDict),
    method: 'PUT',
    mode: 'no-cors',
  };

  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: environment.awsConfig.xApiKey
    })
  };

  constructor(
    private http: HttpClient
  ) { }

  getPlates() {
    console.log('requestOptionsGet:', this.requestOptionsGet);
    return this.http.get(`${this.awsUrl} + 'platelistings'`, this.requestOptionsGet);
  }

  getPlateById(id: number) {
    return this.http.get(`${this.awsUrl}platelisting?id=${id}`, this.requestOptionsGet);
  }

  createPlate(newPlate: any) {
    return this.http.post(`${this.awsUrl}platelisting`, newPlate, this.requestOptionsPost);
  }

  updatePlate(id: number, fieldToUpdate: any, fieldData: any) {
    if (id && fieldToUpdate && fieldData) {
      const obj = {
        id,
        updateKey: fieldToUpdate,
        updateValue: fieldData
      };
      return this.http.patch(`${this.awsUrl}platelisting`, obj, this.requestOptionsPut);
    }
  }

  deletePlate(plateId: string) {
    console.log('requestOptionsDelete:', this.requestOptionsDelete);

    const body = { id: plateId };
    this.requestOptionsDelete['body'] = body;
    return this.http.delete(`${this.awsUrl}platelisting`, this.requestOptionsDelete);
  }

  // Users
  getUsers() {
    return this.http.get(`${this.awsUrl}users`, this.requestOptionsGet);
  }

  getHealth() {
    return this.http.get(`${this.awsUrl}health`, this.requestOptionsGet);
  }

  getUserById(id: number) {
    return this.http.get(`${this.awsUrl}user?userId=${id}`, this.requestOptionsGet);
  }

  createUser(user?: any) {
    let objUser;
    user
      ? objUser = user
      : objUser = {
        "userId": "24",
        "first_name": "Guv",
        "middle_name": "Singh",
        "last_name": "Sandhu",
        "nickname": "Guv",
        "email": "gurvinder.singh.sandhu@gmail.com",
        "mobile": "7540840803",
        "address1": "100 Burgoyne Avenue",
        "address2": "Wootton",
        "city": "Bedford",
        "postcode": "MK43 9RRR"
      };

    return this.http.post(`${this.awsUrl}user`, objUser, this.requestOptionsPost);
  }

  updateUser(userId: string, fieldToUpdate: any, fieldData: any) {
    if (userId && fieldToUpdate && fieldData) {
      const obj = {
        userId,
        updateKey: fieldToUpdate,
        updateValue: fieldData
      };
      return this.http.patch(`${this.awsUrl}user`, obj, this.requestOptionsPut);
    }
  }

  // Valuations
  getValuations() {
    return this.http.get(`${this.awsUrl}valuations`, this.requestOptionsGet);
  }

  getValuationById(id: number) {
    return this.http.get(`${this.awsUrl}valuation?id=${id}`, this.requestOptionsGet);
  }

  createValuation(valuation?:any) {
    let objValuation;
    valuation
      ? objValuation = valuation
      : objValuation = {
        "id": "3",
        "userId": "1",
        "plate": "FA57 NEW",
        "priceBrought": "5000",
        "plateType": "DATELESS",
        "plateYear": "dateless has no year",
        "meaning": {
            "str1": "guv",
            "str2": "gurvinder",
            "str3": "1 guv",
            "str4": "gov"
        },
        "q1": false,
        "q2": false,
        "q3": false,
        "q4": false,
        "q5": true,
        "q6": false,
        "plateValB4Q": "5000",
        "valuationPrice": "35500"
    };

    return this.http.post(`${this.awsUrl}valuation`, objValuation, this.requestOptionsPost);
  }

  // Messages
  getMessages() {
    return this.http.get(`${this.awsUrl}messages`, this.requestOptionsGet);
  }

  getMessageById(id: number) {
    return this.http.get(`${this.awsUrl}message?id=${id}`, this.requestOptionsGet);
  }

  createMessage(message?: any) {
    let objMessage;
    message
      ? objMessage = message
      : objMessage = {
        "id": "23",
        "userId": "1",
        "plate": "6 54NDU",
        "sellingPrice": "25000",
        "contactName": "David Beckham",
        "contactNumber": "123456789",
        "contactEmail": "db@gmail.com",
        "contactMessage": "Hi i would like to enquire about your plate and offer 20,000. Thanks",
        "type": ["form","email","whatsapp"]
    };

    return this.http.post(`${this.awsUrl}message`, objMessage, this.requestOptionsPost);
  }

}

// clb8jm3ff00133b9xvqnsb6ia-plate-MR-58NGA-47
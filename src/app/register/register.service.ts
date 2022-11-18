import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Register } from './register';

@Injectable({
  providedIn: 'root',
})

export class RegisterService {

  constructor(private httpClient: HttpClient) {}

  public getAllRegisterService() {
    return this.httpClient.get('http://localhost:8080/register/');
  }

  public getRegisterService(id) {
    return this.httpClient.get('http://localhost:8080/register/' + id);
  }

  public deleteRegisterService(id) {
    return this.httpClient.delete('http://localhost:8080/register/' + id);
  }
  
  public createRegisterService(register: Register) {
   // alert(JSON.stringify(ticketbooking));
    const headers = { 'content-type': 'application/json' };
    return this.httpClient.post(
      'http://localhost:8080/register/',
      JSON.stringify(register),
      {
        headers: headers,
      }
    );
  }
  
  public updateRegisterService(id, register: Register) {
    const headers = { 'content-type': 'application/json' };
    return this.httpClient.put(
      'http://localhost:8080/register/' + id,
      JSON.stringify(register),
      {
        headers: headers,
      }
    );
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ThingRS } from '../Models/Class/ThingRS';

@Injectable({
  providedIn: 'root'
})
export class ThinkSpeakService {

  private url = environment.thingSpeakUrlRead;

  constructor(private http: HttpClient) { }

  getDataDHT() {
    return this.http.get<ThingRS>(this.url);
  }
}

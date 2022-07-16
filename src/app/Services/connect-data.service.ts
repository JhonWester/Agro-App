import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireObject } from '@angular/fire/compat/database';
import { SensorDHT } from '../Models/Class/SensorDHT';


@Injectable({
  providedIn: 'root'
})
export class ConnectDataService {

  private pathSensorDTH = '/Sensores/dht11';

  private mySensorRef: AngularFireObject<SensorDHT>;


  constructor(private db: AngularFireDatabase) { 
    this.mySensorRef = db.object(this.pathSensorDTH);
  }

  getSensorDHT() {
    return this.mySensorRef.valueChanges();
  }
}

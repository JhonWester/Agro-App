import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/compat/database';
import { Environment } from '../Models/Class/Environment';
import { SensorFT } from '../Models/Class/SensorFT';
import { SensorLDR } from '../Models/Class/SensorLDR';


@Injectable({
  providedIn: 'root'
})
export class ConnectDataService {

  private pathSensorDTH = '/Sensors/Environment';
  private pathSensorFT = '/Sensors/Humidity';
  private pathSensorLDR = '/Sensors/Light';
  private pathIndex = '/Indices';

  private myDTH: AngularFireObject<Environment>;
  private myFT: AngularFireObject<SensorFT>;
  private myLDR: AngularFireObject<SensorLDR>;
  private myIndex: AngularFireList<number>;


  constructor(private db: AngularFireDatabase) { 
    this.myDTH = db.object(this.pathSensorDTH);
    this.myFT = db.object(this.pathSensorFT);
    this.myLDR = db.object(this.pathSensorLDR);
    this.myIndex = db.list(this.pathIndex);
  }

  getIndexFT() {
    return this.myIndex.valueChanges();
  }

  getSensorDHT() {
    return this.myDTH.valueChanges();
  }

  getSensorFT() {
    return this.myFT.valueChanges();
  }

  getSensorLDR() {
    return this.myLDR.valueChanges();
  }
}

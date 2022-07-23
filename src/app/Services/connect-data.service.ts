import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/compat/database';
import { Bomb } from '../Models/Class/Bomb';
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
  private pathIndexFT = '/Indices/Humedad/';
  private pathIndexLG = '/Indices/Luz/';
  private pathBomb = '/Bomb';

  private myDTH: AngularFireObject<Environment>;
  private myFT: AngularFireObject<SensorFT>;
  private myLDR: AngularFireObject<SensorLDR>;
  private myIndexLG: AngularFireList<number>;
  private myIndexFT: AngularFireList<number>;
  private myBomb:  AngularFireObject<Bomb>;


  constructor(private db: AngularFireDatabase) { 
    this.myDTH = db.object(this.pathSensorDTH);
    this.myFT = db.object(this.pathSensorFT);
    this.myLDR = db.object(this.pathSensorLDR);
    this.myIndexFT = db.list(this.pathIndexFT);
    this.myIndexLG = db.list(this.pathIndexLG);
    this.myBomb = db.object(this.pathBomb);
  }

  getBombState() {
    return this.myBomb.valueChanges();
  }

  getIndexLG() {
    return this.myIndexLG.valueChanges();
  }

  getIndexFT() {
    return this.myIndexFT.valueChanges();
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

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Property } from './property';
import { Reservation } from './reservation';

@Injectable({
  providedIn: 'root'
})
export class PropertyService {
  baseUrlProperty="http://localhost:3000/property"
  baseUrlReservation="http://localhost:3000/reservation"
  uploadUrl="http://localhost:9090"
  constructor(private http:HttpClient) { }
  getProperties(){
    return this.http.get<Property[]>(this.baseUrlProperty)
  }
  
  getPropertyById(id:number){
    return this.http.get<Property>(this.baseUrlProperty+'/'+id)
  }

  addReservation(reservation:Reservation){
    return this.http.post(this.baseUrlReservation,reservation)
  }
  
  getSameValueOf(list: any[], criteria1: string, value1: any,criteria2: string, value2: any) {
    return list.filter((e)=>e[criteria1] >= value1 && e[criteria2] <= value2)
  } 
  
}

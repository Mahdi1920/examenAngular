import { Property } from "./property";

export class Reservation{
    id!:number;
    name!:string;
    phoneNumber!:string;
    startDate!:string;
    endDate!:string;
    available!:boolean;
    property!:Property;
}
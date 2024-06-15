import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PropertyService } from '../property.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Property } from '../property';

@Component({
  selector: 'app-reservation-form',
  templateUrl: './reservation-form.component.html',
  styleUrls: ['./reservation-form.component.css']
})
export class ReservationFormComponent {
  id!:number
  property!:Property

  constructor(private ps:PropertyService,private ar:ActivatedRoute,private router:Router){}
reservation:FormGroup=new FormGroup({
  name:new FormControl('',[Validators.required , Validators.minLength(5)]),
  phoneNumber:new FormControl('',[Validators.required ,Validators.pattern("['0-9']*")]),
  startDate:new FormControl('',[Validators.required]),
  endDate:new FormControl('',[Validators.required]),
  available:new FormControl()
});

reserver(){
  this.id=this.ar.snapshot.params['id'];
  (this.reservation.value.property).push(this.property)
  //this.reservation.value.available=false
  this.ps.addReservation(this.reservation.value).subscribe({
    next:()=>this.router.navigate(['/properties'])
  })
}
}

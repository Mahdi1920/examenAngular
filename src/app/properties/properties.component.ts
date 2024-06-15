import { Component } from '@angular/core';
import { PropertyService } from '../property.service';
import { Property } from '../property';

@Component({
  selector: 'app-properties',
  templateUrl: './properties.component.html',
  styleUrls: ['./properties.component.css']
})
export class PropertiesComponent {
  properties:Property[]=[]
  propertiesSearched:Property[]=[]
  searchText1!: string;
  searchText2!: string;
constructor(private ps:PropertyService){
this.getProperties();
}
getProperties(){
  this.ps.getProperties().subscribe({
    next:(data)=>this.properties=data
  });
}
searchPrixMaxMin() {
  console.log(this.propertiesSearched);
  console.log(this.properties);
  
  this.propertiesSearched = this.ps.getSameValueOf(
    this.properties,'price',Number(this.searchText1),'price',Number(this.searchText2)
  );
  console.log(this.propertiesSearched);
  Number(this.searchText1)
  Number(this.searchText2)
  
}


}

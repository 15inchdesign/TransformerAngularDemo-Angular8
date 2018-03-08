import { Component, OnInit } from '@angular/core';

// Import Service
import { TransformersService } from '../transformers.service';
// Import Model
import { T } from '../model/faction';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.css']
})
export class FeaturesComponent implements OnInit {
  
  vehicle: any = [];
  groups: any = [];
  types: any = [];
  models: any = [];
  features = 'Features';

  constructor(private transformersService: TransformersService) { }

  ngOnInit() {

  	this.getVehicleType();
  }

     // Vehicle Types
    getVehicleType(): void {
    this.transformersService.getVehicleType()
        .subscribe(vehicle => {
          console.log(vehicle); 
          this.vehicle = vehicle;
          for ( let v of this.vehicle ){
            if (this.types.indexOf(v.type) == -1) this.types.push(v.type);
            if (this.groups.indexOf(v.group) == -1) this.groups.push(v.group);
            if (this.models.indexOf(v.model) == -1) this.models.push(v.model);
          }
          console.log(this.types,this.groups,this.models);
        }); 
    }

}

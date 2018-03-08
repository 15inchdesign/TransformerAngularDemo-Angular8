import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

// Import Service
import { TransformersService } from '../transformers.service';
// Import Model
import { T } from '../model/faction';

@Component({
  selector: 'app-factions',
  templateUrl: './factions.component.html',
  styleUrls: ['./factions.component.css']
})
export class FactionsComponent implements OnInit {

  factions: any;
  transformersId: any;
  select = 'Select your faction';

  constructor(private transformersService: TransformersService,
  			  private route: ActivatedRoute,
              private location: Location) { }

  ngOnInit() {

  	 this.getFaction();
  	 this.getT();
  }

   // Factions
   getFaction(): void {
    this.transformersService.getFaction()
        .subscribe(factions => {
          console.log(factions); 
          this.factions = factions; 

          });
     }

    getT(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.transformersService.getT(id)
      .subscribe(transformersId => this.transformersId = transformersId);
      ////////////////console.log(this.transformersId);
  } 
}

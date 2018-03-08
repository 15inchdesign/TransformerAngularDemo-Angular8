import { Component, OnInit, VERSION } from '@angular/core';

// Import Service
import { TransformersService } from '../transformers.service';
// Import Model
import { T } from '../model/faction';

@Component({
  selector: 'app-transformers',
  templateUrl: './transformers.component.html',
  styleUrls: ['./transformers.component.css']
})
export class TransformersComponent implements OnInit {

  transformer: any;
  stat: any = [];
  status: any;
  currentStatus: any = this.status;
  name: string;
 


  
  constructor( private transformersService: TransformersService ) {
    this.name = `Angular! v${VERSION.full}`

   }

  ngOnInit() {
  
  this.getTransformer();

  }
     //Transformer 
     getTransformer(): void {
       this.transformersService.getTransformer()
        .subscribe( transformer => {
         console.log(transformer); 
          this.transformer = transformer;
          this.status = status;
          this.currentStatus = transformer[0].status;
            for ( let s of this.transformer ){
            if (this.stat.indexOf(s.status) == -1) this.stat.push(s.status);
            }
              
            console.log(this.stat,this.status); 
          });
      }
}
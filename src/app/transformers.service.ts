import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

//import { Observable } from 'rxjs/Observable';
//import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

 //Import model
 import { T } from './model/faction';


// Let us see 200 or 400
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })

};

/*export interface Faction {
  name: string;
};*/

@Injectable()
export class TransformersService {

 factionsUrl = 'http://localhost:3000/factions';
 vehicleTypesUrl = 'http://localhost:3000/vehicleTypes';
 transformerUrl = 'http://localhost:3000/transformers';

 	constructor(private http: HttpClient) { }

 	getFaction(): Observable<T[]> {
		return this.http.get<T[]>(this.factionsUrl);
	}

	 /** GET transformer by id. */
   getT(id: number): Observable<any> {
    const url = `${this.transformerUrl}/${id}`;
    return this.http.get<any>(this.transformerUrl);
    
  }

	getVehicleType(): Observable<any[]>{
		return this.http.get<any[]>(this.vehicleTypesUrl);
	}

	getTransformer(): Observable<any[]>{
		return this.http.get<any[]>(this.transformerUrl);
	}
}

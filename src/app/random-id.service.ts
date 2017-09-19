import { Injectable } from '@angular/core';
import { Observable }     from 'rxjs/Observable';
import { Subject }    from 'rxjs/Subject';

@Injectable()
export class RandomIdService {
 
  private data_old = -1;
  private data_new : number;
  // Observable string streams
  private caseNumber = new Subject<number>();
  caseNumber$ = this.caseNumber.asObservable();
  constructor() { }
  
  GetId() {
    this.data_new = Math.ceil((Math.random()*4));
    
    while(this.data_new === this.data_old ){
      this.data_new = Math.ceil((Math.random()*4));
    }
    
    this.caseNumber.next(this.data_new);
    this.data_old=this.data_new;
    
    return this.data_new;
  }
}
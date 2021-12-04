import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Endpoints } from '../../../config/endpoints';
import { Bolo } from '../../interfaces/bolo';

@Injectable({
  providedIn: 'root'
})
export class BolosService {

  constructor(public http: HttpClient) { }

  listarBolos(){
    return this.http.get<Bolo[]>(Endpoints.bolos);
  }
}

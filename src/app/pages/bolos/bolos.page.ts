import { Component, OnInit } from '@angular/core';
import { BolosService } from '../bolos/bolos.service';
import { Bolo } from '../../interfaces/bolo';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-bolos',
  templateUrl: './bolos.page.html',
  styleUrls: ['./bolos.page.scss'],
})
export class BolosPage implements OnInit {

  bolos: Bolo[];
  bolo;

  constructor(private bolosService: BolosService, private http: HttpClient) { }

  ngOnInit() {
    this.bolosService.listarBolos().subscribe((data) => {
      this.bolos = data;
    });
  }



}

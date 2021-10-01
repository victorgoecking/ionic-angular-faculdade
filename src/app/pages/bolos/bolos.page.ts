import { Component, OnInit } from '@angular/core';
import { BolosService } from './bolos.service';

@Component({
  selector: 'app-bolos',
  templateUrl: './bolos.page.html',
  styleUrls: ['./bolos.page.scss'],
})
export class BolosPage implements OnInit {


  constructor(private bolosService: BolosService) { }

  public bolos = this.bolosService.listarBolos();


  ngOnInit() {
    return this.bolos;
  }

}

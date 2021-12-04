import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Bolo } from 'src/app/interfaces/bolo';
import { BolosService } from '../bolos/bolos.service';

@Component({
  selector: 'app-detalhe-bolo',
  templateUrl: './detalhe-bolo.page.html',
  styleUrls: ['./detalhe-bolo.page.scss'],
})
export class DetalheBoloPage implements OnInit {

  bolos: Bolo[];
  bolo: Bolo;
  private id: string;

  constructor(private route: ActivatedRoute, private bolosService: BolosService, private router: Router, private http: HttpClient) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');

    this.bolosService.listarBolos().subscribe((data) => {
      this.bolos = data;
      this.bolo = this.bolos?.find(el => el.id === +this.id);
    });

  }

}

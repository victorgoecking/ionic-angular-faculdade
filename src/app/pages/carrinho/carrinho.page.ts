import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { Bolo } from 'src/app/interfaces/bolo';
import { BolosService } from '../bolos/bolos.service';

interface Pedido {
  nomePedido: string;
}
@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.page.html',
  styleUrls: ['./carrinho.page.scss'],
})
export class CarrinhoPage implements OnInit {

  pedido: Pedido = {
    nomePedido: 'Bolo de milho',
  };

  bolos: Bolo[];
  bolo: Bolo;
  private id: string;

  constructor(public loadingController: LoadingController,
      private alertController: AlertController,
      private route: ActivatedRoute,
      private bolosService: BolosService,
      private router: Router,
      private http: HttpClient
      ) {}

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');

    this.bolosService.listarBolos().subscribe((data) => {
      this.bolos = data;
      this.bolo = this.bolos?.find(el => el.id === +this.id);
    });

  }

  async carregandoConfirmacaoPedido() {
    const loading = await this.loadingController.create({
      message: '',
      spinner: 'crescent',
      duration: 800,
    });
    await loading.present();

    await loading.onDidDismiss();

    const alert = await this.alertController.create({
      header: 'Pedido confirmado!',
      message: 'Daqui a pouco chega :)',
      buttons: [
        {
          text: 'Ok',
          handler: () => {
          },
        },
      ],
    });

    await alert.present();
  }


}

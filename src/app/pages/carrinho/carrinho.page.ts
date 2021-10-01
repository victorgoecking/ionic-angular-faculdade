import { Component, OnInit } from '@angular/core';
import { AlertController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.page.html',
  styleUrls: ['./carrinho.page.scss'],
})
export class CarrinhoPage implements OnInit {

  constructor(
    public loadingController: LoadingController,
    private alertController: AlertController
    ) {}

  ngOnInit() {
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

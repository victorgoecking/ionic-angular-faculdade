import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BolosService {

  
  bolos = [
    {
      id: 1,
      nome: 'Bolo caramelo de abacaxi',
      valor: 19.00,
      descricao: 'A banana é um tipo de pseudofruto ...',
      urlImagem: 'https://www.receitadevovo.com.br/_next/image?url=https%3A%2F%2Famp.receitadevovo.com.br%2Fwp-content%2Fuploads%2F2021%2F02%2Fbolo-de-abacaxi.jpg&w=1920&q=75',
    },
    {
      id: 2,
      nome: 'Bolo fofinho de claras',
      valor: 15.00,
      descricao: 'O castella ou kasutera é um popular bolo japonês feito à base de açúcar, farinha, ovos e xarope de milho ...',
      urlImagem: 'https://www.receitadevovo.com.br/_next/image?url=https%3A%2F%2Famp.receitadevovo.com.br%2Fwp-content%2Fuploads%2F2021%2F02%2Fbolo-de-claras.jpg&w=1920&q=75',
    },
  ]

  constructor() { }

  listarBolos(){
    return this.bolos;
  }
}

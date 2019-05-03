import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.scss']
})
export class ListagemComponent implements OnInit {
  
  constructor() { }

  ngOnInit() {
  }
  /**
   * @author Silvio Siqueira
   * @description declaração do array e será utilizado para compor o rastreio do carros que ainda não foram 
   * entregues na contagem do pátio
  */
  listaCarrosRastreados = [];

  /**
   * @author Silvio Siqueira
   * @description mock referente a lista de carros utilizado no software
  */
  listaCarros = [
    {
      id: 1,
      modelo: 'Palio Weekend ELX 1.4 mpi Fire Flex 8V',
      codEntrega: '09131517000',
      status: 'Alugado'
    },
    {
      id: 2,
      modelo: 'HB20 Premium 1.6 Flex 16V Aut.',
      codEntrega: '29445119444',
      status: 'Alugado'
    },
    {
      id: 3,
      modelo: 'Megane Grand Tour Dynamique 2.0 16V Aut.',
      codEntrega: '62815955782',
      status: 'Alugado'
    },
    {
      id: 4,
      modelo: 'Parati COMFORTLINE 1.6 Mi Tot.Flex 8V 4p',
      codEntrega: '99511559894',
      status: 'Alugado'
    },
    {
      id: 5,
      modelo: 'Fiesta SE 1.6 16V Flex 5p',
      codEntrega: '68082449634',
      status: 'Alugado'
    },
    {
      id: 6,
      modelo: 'Sentra S 2.0/ 2.0 Flex Fuel 16V Mec.',
      codEntrega: '29578944454',
      status: 'Alugado'
    },
    {
      id: 7,
      modelo: '208 Allure inconcert 1.5 Flex 8V 5p Mec.',
      codEntrega: '95852885713',
      status: 'Alugado'
    },
    {
      id: 1,
      modelo: 'Palio Weekend ELX 1.4 mpi Fire Flex 8V',
      codEntrega: '09131517000',
      status: 'Devolvido'
    },
    {
      id: 2,
      modelo: 'HB20 Premium 1.6 Flex 16V Aut.',
      codEntrega: '29445119444',
      status: 'Devolvido'
    },
    {
      id: 3,
      modelo: 'Megane Grand Tour Dynamique 2.0 16V Aut.',
      codEntrega: '62815955782',
      status: 'Devolvido'
    },
    {
      id: 4,
      modelo: 'Parati COMFORTLINE 1.6 Mi Tot.Flex 8V 4p',
      codEntrega: '99511559894',
      status: 'Devolvido'
    },
    {
      id: 5,
      modelo: 'Fiesta SE 1.6 16V Flex 5p',
      codEntrega: '68082449634',
      status: 'Devolvido'
    }
  ]

  /**
   * @author Silvio Siqueira
   * @description método público que faz o filtro no array 'listaCarros' para buscar os id únicos 
   * referente ao carros que não retornaram ao pátio
  */
  public rastrearCarros() {
    this.listaCarrosRastreados = this.listaCarros.filter((el,idx, array) => array.filter(j => j.id === el.id).length < 2)
  }

}

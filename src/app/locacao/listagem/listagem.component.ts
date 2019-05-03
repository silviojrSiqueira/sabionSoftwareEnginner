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

  listaCarrosRastreados = [];

  listaCarros = [
    {
      id: 1,
      modelo: 'Fiesta',
      codEntrega: '123',
      status: 'Alugado'
    },
    {
      id: 2,
      modelo: 'Gol',
      codEntrega: '25441',
      status: 'Alugado'
    },
    {
      id: 3,
      modelo: 'HB20',
      codEntrega: '32114',
      status: 'Alugado'
    },
    {
      id: 4,
      modelo: 'Argo',
      codEntrega: '32214',
      status: 'Alugado'
    },
    {
      id: 5,
      modelo: 'Siena',
      codEntrega: '11214',
      status: 'Alugado'
    },
    {
      id: 6,
      modelo: 'Fox',
      codEntrega: '55521',
      status: 'Alugado'
    },
    {
      id: 1,
      modelo: 'Fiesta',
      codEntrega: '123',
      status: 'Devolvido'
    },
    {
      id: 2,
      modelo: 'Gol',
      codEntrega: '25441',
      status: 'Devolvido'
    },
    {
      id: 3,
      modelo: 'HB20',
      codEntrega: '32114',
      status: 'Devolvido'
    },
    {
      id: 4,
      modelo: 'Argo',
      codEntrega: '32214',
      status: 'Devolvido'
    },
    {
      id: 5,
      modelo: 'Siena',
      codEntrega: '11214',
      status: 'Devolvido'
    },
  ]

  public rastrearCarros() {

    this.listaCarrosRastreados = this.listaCarros.filter((el, i , a) => { 
      return a.indexOf(el) === i;
    });
  }

}

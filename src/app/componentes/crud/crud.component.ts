import { Imagens } from './../../models/placeholder.model';
import { getLocaleExtraDayPeriodRules } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/services/crud.service';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
})
export class CrudComponent implements OnInit {

  imagem: Imagens;
  erro: any;

  //chamando o service pelo construtor
  constructor(private crudService: CrudService) {
    //chamando o metodo getter para passar para o componente
    this.getter();
  }

  ngOnInit() {

  }

  //criar um metodo para consumir o outro metodo do Service
  getter() {
    //puxando o metodo getFotos do arquivo services
    //subscribe, subscrevendo no metodo observable - O subscribe está pedindo as informaçoes para o Observable
    //precisa passar duas funções no subscribe, os dados e o erro
    //this.crudService.getFotos().subscribe(dados => {}, erro => {})
    //vai executar uma função quando receber os dados
    this.crudService.getFotos().subscribe(
      (dados: Imagens) => {
        //variavel imagem vai receber os dados da função
        this.imagem = dados;
        console.log("Dados que a função recebeu: "+dados);
        console.log("Dados que a variagem imagem recebeu: "+this.imagem);
    },
      (error: any) => {
        this.erro = error;
        console.log(this.erro)
    });
  }

}

//

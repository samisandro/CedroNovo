import { Component, Input } from '@angular/core';
import { Http, Headers } from '@angular/http';

import { RestauranteComponent } from '../restaurante.component';

@Component({
  moduleId: module.id,
  selector: 'listar',
  templateUrl: './listar.component.html',
})
export class ListarComponent {


    restaurantes: Object[] = []
    http: Http;
    mensagem: string = '';

    constructor(http: Http) {
        this.http = http;

        this.http.get('http://localhost:50576/api/Restaurante/')
            .map(res => res.json())
            .subscribe(restaurantes => {
                this.restaurantes = restaurantes;
                console.log(this.restaurantes);
            }, erro => console.log(erro));
    }

    excluir(restaurante: RestauranteComponent = new RestauranteComponent()) {

        this.http.delete('http://localhost:50576/api/Restaurante/' + restaurante.id_restaurante)
            .subscribe(() => {
                let indiceDoRestaurante = this.restaurantes.indexOf(restaurante);

                if (indiceDoRestaurante > -1) {
                    this.mensagem = 'O Restaurante foi removido da base de dados.';                   
                    this.restaurantes.slice(indiceDoRestaurante, 1);
                    this.atualizarLista();

                }


            }, erro => {
                console.log(erro);
                this.mensagem = 'Não foi possível remover o Restaurante da base de dados.';
            });
    }

    atualizarLista() {
        this.http.get('http://localhost:50576/api/Restaurante/')
            .map(res => res.json())
            .subscribe(restaurantes => {
                this.restaurantes = restaurantes;
            }, erro => console.log(erro));
    }
}

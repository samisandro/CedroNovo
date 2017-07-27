import { Component } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { URLSearchParams } from '@angular/http';
import { RestauranteComponent } from '../restaurante.component';

@Component({
    moduleId: module.id,
    selector: 'cadastrar',
    templateUrl: './restaurante.cadastrar.component.html',
})
export class RestauranteCadastrarComponent {

    restaurante: RestauranteComponent = new RestauranteComponent();
    http: Http;
    mensagem: string = "";

    constructor(http: Http) {
        this.http = http;
    }

    cadastrar() {
        console.log(this.restaurante);

        let headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');

        let urlSearchParams = new URLSearchParams();
        urlSearchParams.append('id_restaurante', this.restaurante.id_restaurante);
        urlSearchParams.append('nome_restaurante', this.restaurante.nome_restaurante);
        let body = urlSearchParams.toString()
        console.log(body);

        this.http.post('http://localhost:50576/api/Restaurante/', body, { headers: headers })
            .subscribe(() => {
                this.restaurante.nome_restaurante = "";
                this.mensagem = "O Restaurante foi cadastrado na base de dados."                
            });

    }

}

﻿import { Component, Input } from '@angular/core';
import { Http } from '@angular/http';

import { PratoComponent } from '../prato.component';

@Component({
    moduleId: module.id,
    selector: 'lista',
    templateUrl: './prato.listar.component.html',
})
export class PratoListaComponent {

    pratos: Object[] = []
    http: Http;
    mensagem: string = '';

    constructor(http: Http) {
        this.http = http;

        this.http.get('http://localhost:50576/api/Prato/')
            .map(res => res.json())
            .subscribe(pratos => {
                this.pratos = pratos;
            }, erro => console.log(erro));
    }

    excluir(prato: PratoComponent = new PratoComponent()) {

        this.http.delete('http://localhost:50576/api/Prato/' + prato.id_pratos)
            .subscribe(() => {
                let indiceDoPrato = this.pratos.indexOf(prato);

                if (indiceDoPrato > -1) {
                    this.mensagem = 'O Prato foi removido da base de dados.';                    
                    this.pratos.slice(indiceDoPrato, 1);
                    this.atualizarLista();
                }
            }, erro => {
                console.log(erro);
                this.mensagem = 'Não foi possível remover o Prato base de dados.';
            });
    }

    atualizarLista() {
        this.http.get('http://localhost:50576/api/Prato/')
            .map(res => res.json())
            .subscribe(pratos => {
                this.pratos = pratos;
            }, erro => console.log(erro));
    }
}

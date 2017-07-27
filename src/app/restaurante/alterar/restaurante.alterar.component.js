"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var router_1 = require("@angular/router");
var restaurante_component_1 = require("../restaurante.component");
var RestauranteAlterarComponent = (function () {
    function RestauranteAlterarComponent(rota, http) {
        var _this = this;
        this.rota = rota;
        this.restaurante = new restaurante_component_1.RestauranteComponent();
        this.mensagem = '';
        this.http = http;
        this.id = rota.snapshot.params['id'];
        this.http.get('http://localhost:50576/api/Restaurante/' + this.id)
            .map(function (res) { return res.json(); })
            .subscribe(function (restaurantes) {
            _this.restaurante = restaurantes;
        }, function (erro) { return console.log(erro); });
    }
    RestauranteAlterarComponent.prototype.alterar = function () {
        var _this = this;
        console.log(this.restaurante);
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        var urlSearchParams = new http_1.URLSearchParams();
        urlSearchParams.append('id_restaurante', this.restaurante.id_restaurante);
        urlSearchParams.append('nome_restaurante', this.restaurante.nome_restaurante);
        var body = urlSearchParams.toString();
        this.http.put('http://localhost:50576/api/Restaurante/', body, { headers: headers })
            .subscribe(function () {
            _this.mensagem = 'O Restaurante foi alterado na base de dados.';
        });
    };
    return RestauranteAlterarComponent;
}());
RestauranteAlterarComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'cadastrar',
        templateUrl: './restaurante.alterar.component.html',
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute, http_1.Http])
], RestauranteAlterarComponent);
exports.RestauranteAlterarComponent = RestauranteAlterarComponent;
//# sourceMappingURL=restaurante.alterar.component.js.map
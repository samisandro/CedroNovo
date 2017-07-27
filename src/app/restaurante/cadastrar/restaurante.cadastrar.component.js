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
var http_2 = require("@angular/http");
var restaurante_component_1 = require("../restaurante.component");
var RestauranteCadastrarComponent = (function () {
    function RestauranteCadastrarComponent(http) {
        this.restaurante = new restaurante_component_1.RestauranteComponent();
        this.mensagem = "";
        this.http = http;
    }
    RestauranteCadastrarComponent.prototype.cadastrar = function () {
        var _this = this;
        console.log(this.restaurante);
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        var urlSearchParams = new http_2.URLSearchParams();
        urlSearchParams.append('id_restaurante', this.restaurante.id_restaurante);
        urlSearchParams.append('nome_restaurante', this.restaurante.nome_restaurante);
        var body = urlSearchParams.toString();
        console.log(body);
        this.http.post('http://localhost:50576/api/Restaurante/', body, { headers: headers })
            .subscribe(function () {
            _this.restaurante.nome_restaurante = "";
            _this.mensagem = "O Restaurante foi cadastrado na base de dados.";
        });
    };
    return RestauranteCadastrarComponent;
}());
RestauranteCadastrarComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'cadastrar',
        templateUrl: './restaurante.cadastrar.component.html',
    }),
    __metadata("design:paramtypes", [http_1.Http])
], RestauranteCadastrarComponent);
exports.RestauranteCadastrarComponent = RestauranteCadastrarComponent;
//# sourceMappingURL=restaurante.cadastrar.component.js.map
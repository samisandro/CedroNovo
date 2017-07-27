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
var prato_component_1 = require("../prato.component");
var PratoCadastrarComponent = (function () {
    function PratoCadastrarComponent(http) {
        var _this = this;
        this.restaurantes = [];
        this.mensagem = "";
        this.prato = new prato_component_1.PratoComponent();
        this.http = http;
        this.http.get('http://localhost:50576/api/Restaurante/')
            .map(function (res) { return res.json(); })
            .subscribe(function (restaurantes) {
            _this.restaurantes = restaurantes;
        }, function (erro) { return console.log(erro); });
    }
    PratoCadastrarComponent.prototype.cadastrar = function () {
        var _this = this;
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        var urlSearchParams = new http_1.URLSearchParams();
        urlSearchParams.append('nome_prato', this.prato.nome_prato);
        urlSearchParams.append('preco_prato', this.prato.preco_prato);
        urlSearchParams.append('id_restaurante', this.prato.id_restaurante);
        var body = urlSearchParams.toString();
        this.http.post('http://localhost:50576/api/Prato/', body, { headers: headers })
            .subscribe(function () {
            _this.prato.nome_prato = "";
            _this.prato.preco_prato = "";
            _this.prato.id_restaurante = "";
            _this.mensagem = "O Prato foi cadastrado na base de dados.";
        });
    };
    return PratoCadastrarComponent;
}());
PratoCadastrarComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'cadastro',
        templateUrl: './prato.cadastrar.component.html',
    }),
    __metadata("design:paramtypes", [http_1.Http])
], PratoCadastrarComponent);
exports.PratoCadastrarComponent = PratoCadastrarComponent;
//# sourceMappingURL=prato.cadastrar.component.js.map
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
var RestauranteComponent = (function () {
    function RestauranteComponent(http) {
        var _this = this;
        this.restaurantes = [];
        http.get('http://localhost:50176/api/Restaurante/')
            .map(function (res) { return res.json(); })
            .subscribe(function (restaurantes) {
            _this.restaurantes = restaurantes;
            console.log(_this.restaurantes);
        }, function (erro) { return console.log(erro); });
    }
    return RestauranteComponent;
}());
RestauranteComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'restaurante',
        templateUrl: './restaurante.component.html',
    }),
    __metadata("design:paramtypes", [http_1.Http])
], RestauranteComponent);
exports.RestauranteComponent = RestauranteComponent;
//# sourceMappingURL=restaurante.component.js.map
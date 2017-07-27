"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var http_1 = require("@angular/http");
var app_routes_1 = require("../app.routes");
var prato_component_1 = require("./prato.component");
var prato_listar_pipes_1 = require("./listar/prato.listar.pipes");
var PratoModule = (function () {
    function PratoModule() {
    }
    return PratoModule;
}());
PratoModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, http_1.HttpModule, app_routes_1.routing],
        declarations: [prato_component_1.PratoComponent, prato_listar_pipes_1.FiltroNomePrato],
        bootstrap: [prato_component_1.PratoComponent]
    })
], PratoModule);
exports.PratoModule = PratoModule;
//# sourceMappingURL=prato.module.js.map
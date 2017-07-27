"use strict";
var router_1 = require("@angular/router");
var home_component_1 = require("./home/home.component");
var listar_component_1 = require("./restaurante/listar/listar.component");
var restaurante_cadastrar_component_1 = require("./restaurante/cadastrar/restaurante.cadastrar.component");
var restaurante_alterar_component_1 = require("./restaurante/alterar/restaurante.alterar.component");
var prato_listar_component_1 = require("./prato/listar/prato.listar.component");
var prato_cadastrar_component_1 = require("./prato/cadastrar/prato.cadastrar.component");
var prato_alterar_component_1 = require("./prato/alterar/prato.alterar.component");
var appRoutes = [
    { path: '', component: home_component_1.HomeComponent },
    { path: 'restaurante', component: listar_component_1.ListarComponent },
    { path: 'restaurante/cadastrar', component: restaurante_cadastrar_component_1.RestauranteCadastrarComponent },
    { path: 'restaurante/alterar/:id', component: restaurante_alterar_component_1.RestauranteAlterarComponent },
    { path: 'prato', component: prato_listar_component_1.PratoListaComponent },
    { path: 'prato/cadastrar', component: prato_cadastrar_component_1.PratoCadastrarComponent },
    { path: 'prato/alterar/:id', component: prato_alterar_component_1.PratoAlterarComponent },
    { path: '**', component: home_component_1.HomeComponent }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routes.js.map
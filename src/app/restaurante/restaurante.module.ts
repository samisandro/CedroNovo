import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { routing } from '../app.routes';

import { RestauranteComponent } from './restaurante.component';
import { FiltroPorNome } from './listar/listar.pipes';
import { RestauranteCadastrarComponent } from './cadastrar/restaurante.cadastrar.component';
import { RestauranteAlterarComponent } from './alterar/restaurante.alterar.component';


@NgModule({
    imports: [BrowserModule, routing, HttpModule],
    declarations: [RestauranteComponent, RestauranteCadastrarComponent, FiltroPorNome, RestauranteAlterarComponent ],
    bootstrap: [RestauranteComponent]
})
export class RestauranteModule { }

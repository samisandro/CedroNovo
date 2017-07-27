import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { routing } from './app.routes';
import { FormsModule } from '@angular/forms';
import 'rxjs/add/operator/map';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RestauranteComponent } from './restaurante/restaurante.component';
import { FiltroPorNome } from './restaurante/listar/listar.pipes';
import { RestauranteCadastrarComponent } from './restaurante/cadastrar/restaurante.cadastrar.component';
import { ListarComponent } from './restaurante/listar/listar.component';
import { RestauranteAlterarComponent } from './restaurante/alterar/restaurante.alterar.component';
import { PratoComponent } from './prato/prato.component';
import { PratoListaComponent } from './prato/listar/prato.listar.component';
import { FiltroNomePrato } from './prato/listar/prato.listar.pipes';
import { PratoCadastrarComponent } from './prato/cadastrar/prato.cadastrar.component';
import { PratoAlterarComponent } from './prato/alterar/prato.alterar.component';
@NgModule({
    imports: [BrowserModule, HttpModule, routing, FormsModule],
    declarations: [AppComponent, HomeComponent, RestauranteComponent, ListarComponent, FiltroPorNome, RestauranteCadastrarComponent, RestauranteAlterarComponent,
        PratoComponent, PratoListaComponent, FiltroNomePrato, PratoCadastrarComponent, PratoAlterarComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }

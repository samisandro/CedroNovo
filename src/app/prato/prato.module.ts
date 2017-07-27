import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { routing } from '../app.routes';

import { PratoComponent } from './prato.component';
import { FiltroNomePrato } from './listar/prato.listar.pipes';

@NgModule({
    imports: [BrowserModule, HttpModule, routing],
    declarations: [PratoComponent, FiltroNomePrato],
    bootstrap: [PratoComponent]
})
export class PratoModule { }

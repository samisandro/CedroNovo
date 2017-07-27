import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RestauranteComponent } from './restaurante/restaurante.component';
import { ListarComponent } from './restaurante/listar/listar.component';
import { RestauranteCadastrarComponent } from './restaurante/cadastrar/restaurante.cadastrar.component';
import { RestauranteAlterarComponent } from './restaurante/alterar/restaurante.alterar.component';
import { PratoComponent } from './prato/prato.component';
import { PratoListaComponent } from './prato/listar/prato.listar.component';
import { PratoCadastrarComponent } from './prato/cadastrar/prato.cadastrar.component';
import { PratoAlterarComponent } from './prato/alterar/prato.alterar.component';



const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'restaurante', component: ListarComponent },
    { path: 'restaurante/cadastrar', component: RestauranteCadastrarComponent },
    { path: 'restaurante/alterar/:id', component: RestauranteAlterarComponent },
    { path: 'prato', component: PratoListaComponent },
    { path: 'prato/cadastrar', component: PratoCadastrarComponent },
    { path: 'prato/alterar/:id', component: PratoAlterarComponent },
    { path: '**', component: HomeComponent }
];

export const routing = RouterModule.forRoot(appRoutes);


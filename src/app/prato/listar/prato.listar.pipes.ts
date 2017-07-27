import { Pipe, PipeTransform } from '@angular/core';
import { PratoListaComponent } from './prato.listar.component';

@Pipe({
    name: 'filtroNomePrato'
})
export class FiltroNomePrato implements PipeTransform {

    transform(items: any[], criteria: any): any {

        return items.filter(item => {
            for (let key in item) {
                if (("" + item[key]).includes(criteria)) {
                    return true;
                }
            }
            return false;
        });
    }

}
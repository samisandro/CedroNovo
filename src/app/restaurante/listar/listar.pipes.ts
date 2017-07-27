import { Pipe, PipeTransform } from '@angular/core';
import { ListarComponent } from './listar.component';

@Pipe({
    name: 'filtroPorNome'
})
export class FiltroPorNome implements PipeTransform {

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
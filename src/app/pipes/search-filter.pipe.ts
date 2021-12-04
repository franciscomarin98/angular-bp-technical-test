import { Pipe, PipeTransform } from '@angular/core';
import {Pokemon} from "../interfaces/pokemon";

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {

  transform(value: Pokemon[], args?: any): any {
    if(!value)return null;
    if(!args)return value;

    args = args.toLowerCase();

    return value.filter(function(data: Pokemon){
      return JSON.stringify(data).toLowerCase().includes(args);
    });
  }

}

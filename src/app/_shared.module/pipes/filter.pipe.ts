

import { Pipe, PipeTransform } from '@angular/core';

/**
 * it's a pipe named 'filter' that receives a array of objects and find the objects that have (value)'s value
 */
@Pipe({name: 'filter'})

export class FilterPipe implements PipeTransform {


    transform(arr: any[], value: string): any[]{

        let result:any[]=[];

        if(value==''||!value){
            if(arr){
              arr.map((e)=>{
                result.push(e);
              })
            }
        }else{
            for(let item of arr){
                for(let key in item){
                    if (!item.hasOwnProperty(key)) continue;
                    if(typeof item[key] != 'object' && typeof item[key] != 'number'&&key!='image'){
                        if(item[key].search(value)>-1){
                            result.push(item);
                        }
                    }else if(typeof item[key]=='object'){
                      let arr=item[key];
                      let temp=item;
                      for(let item of arr){
                        for(let key in item){
                          if (!item.hasOwnProperty(key)) continue;
                          if(typeof item[key] != 'object' && typeof item[key] != 'number'){
                            if(item[key].search(value)>-1){
                              result.push(temp);
                            }
                          }
                        }
                      }
                    }
                }
            }
        }

        console.log(result);
        return result;
    }
}



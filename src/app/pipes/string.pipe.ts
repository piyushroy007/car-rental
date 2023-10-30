import { Pipe,PipeTransform } from '@angular/core';

@Pipe({
    name: 'StringP'
})
export class StringPipe implements PipeTransform{
    transform(value: string):number {
        let len = 0;
        if(value.length){
            len=value.length;
        }
        return len;
    }
}
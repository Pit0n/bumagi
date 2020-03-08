import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'lastUpdateInSeconds'
})
export class LastUpdateInSecondsPipe implements PipeTransform {

  transform(time: string ): number {
    const now = new Date().getTime();
    const updateDate = new Date(time).getTime();

    return (now - updateDate) / 1000 | 0;
  }

}

import { Pipe, PipeTransform } from '@angular/core';
import { UserModel } from "../models/user.model";

@Pipe({
  name: 'shortFullName'
})
export class ShortFullNamePipe implements PipeTransform {

  transform(user: UserModel): string {
    if (!user) {
      return '';
    }

    const firstName = user.fname || '';
    const shortName = user.name ? `${user.name[0]}.` : '';
    const shortPatronymic = user.mname ? `${user.mname[0]}.` : '';

    return `${firstName} ${shortName}${shortPatronymic}`;
  }
}


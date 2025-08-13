import {inject, Pipe, PipeTransform} from '@angular/core';
import {LocalizeService} from '../services/localize.service';

@Pipe({
  name: 'translate'
})
export class TranslatePipe implements PipeTransform {
  localizeService = inject(LocalizeService);

  transform(text: string): string {
    return this.localizeService.translate(text);
  }
}

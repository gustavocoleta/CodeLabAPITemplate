import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';
import { EMensagem } from '../enums/mensagem.enum';
import { IFindAllFilter } from '../interfaces/find-all-filter.interface';

@Injectable()
export class ParseFindAllFilter implements PipeTransform {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  transform(value: any, metadata: ArgumentMetadata) {
    try {
      if (value) {
        return JSON.parse(value as unknown as string) as IFindAllFilter;
      }
    } catch (error) {
      throw new Error(EMensagem.FilterInvalido);
    }
  }
}

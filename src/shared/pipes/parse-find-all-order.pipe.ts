import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';
import { EMensagem } from '../enums/mensagem.enum';
import { IFindAllOrder } from '../interfaces/find-all-order.interface';

@Injectable()
export class ParseFindAllOrder implements PipeTransform {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  transform(value: any, metadata: ArgumentMetadata) {
    try {
      return JSON.parse(value as unknown as string) as IFindAllOrder;
    } catch (error) {
      throw new Error(EMensagem.OrderInvalido);
    }
  }
}

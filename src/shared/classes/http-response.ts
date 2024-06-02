import { EMensagem } from '../enums/mensagem.enum';
import { IResponse } from '../interfaces/response.interface';

export class HttpResponse<T> implements IResponse<T> {
  message = '';
  data: T | null | undefined;

  constructor(data: T | null | undefined, message?: '') {
    this.message = message;
    this.data = data;
  }

  onSuccess(message: string): IResponse<T> {
    this.message = message;
    return this;
  }

  onCreated(): IResponse<T> {
    this.message = EMensagem.SalvoSucesso;
    return this;
  }

  onUpdated(): IResponse<T> {
    this.message = EMensagem.AtualizadoSucesso;
    return this;
  }

  onDeleted(): IResponse<T> {
    this.message = EMensagem.ExcluidoSucesso;
    return this;
  }

  onUnactivated(): IResponse<T> {
    this.message = EMensagem.DesativadoSucesso;
    return this;
  }
}

import { CallHandler, ExecutionContext, NestInterceptor } from '@nestjs/common';
import { Observable, map } from 'rxjs';
import { IResponse } from '../interfaces/response.interface';

export class ResponseTransformInterceptor<T>
  implements NestInterceptor<T, IResponse<T>>
{
  intercept(
    context: ExecutionContext,
    next: CallHandler<T>,
  ): Observable<IResponse<T>> | Promise<Observable<IResponse<T>>> {
    return next
      .handle()
      .pipe(map((returned) => this.transformResponse(returned)));
  }

  private transformResponse(returned: T): IResponse<T> {
    const data = returned as IResponse<T>;
    const responseFormated = {
      message: data?.message ?? null,
      data: data?.data ?? data,
    };

    return responseFormated as IResponse<T>;
  }
}

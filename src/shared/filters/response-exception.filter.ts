import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { Response } from 'express';
import { IResponseException } from '../interfaces/response-exception.interface';

@Catch()
export class ResponseExceptionsFilter<T> implements ExceptionFilter {
  catch(exception: T, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();

    const status =
      exception instanceof HttpException
        ? exception.getStatus()
        : HttpStatus.INTERNAL_SERVER_ERROR;

    return response.status(status).json({
      message: this.transformResponse(
        exception as unknown as IResponseException,
      ),
      data: null,
    });
  }

  transformResponse(exception: IResponseException): string {
    if (exception.response?.message) {
      return exception.response.message;
    }

    return exception.message;
  }
}

import { Injectable, Logger, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  private readonly logger = new Logger(LoggerMiddleware.name);
  use(req: Request, res: Response, next: NextFunction) {
    this.logger.log('***********REQ-INFO************');
    this.logger.log('IP: ' + req.ip);
    this.logger.log('URL: ' + req.url);
    this.logger.log('Method: ' + req.method);
    this.logger.log('Headers:' + JSON.stringify(req.headers));
    this.logger.log('Body:' + JSON.stringify(req.body));
    this.logger.log('Params:' + JSON.stringify(req.params));
    this.logger.log('Query:' + JSON.stringify(req.query));

    this.logger.log('***********RES-DATA************');

    const send = res.send;
    res.send = (exitData) => {
      if (
        res?.getHeader('content-type')?.toString().includes('application/json')
      ) {
        this.logger.log(exitData.toString());
      }
      res.send = send;
      return res.send(exitData);
    };

    next();
  }
}

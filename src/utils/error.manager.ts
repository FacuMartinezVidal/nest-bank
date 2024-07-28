import { HttpException, HttpStatus } from '@nestjs/common';

export class ErrorManager extends HttpException {
  constructor(
    message: string,
    status: HttpStatus,
    public readonly details?: any,
  ) {
    super(message, status);
    this.name = this.constructor.name;
  }
}

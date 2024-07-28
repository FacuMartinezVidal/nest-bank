import { HttpStatus } from '@nestjs/common';

export class ResponseError extends Error {
  status: HttpStatus;
  message: string;

  super(status: HttpStatus, message: string) {
    this.status = status;
    this.message = message;
  }
}

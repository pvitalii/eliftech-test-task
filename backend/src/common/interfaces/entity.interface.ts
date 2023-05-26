import { ObjectLiteral } from 'typeorm';

export interface Entity extends ObjectLiteral {
  id: number;
}

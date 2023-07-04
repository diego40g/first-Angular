import { Address } from './address';

export class User {
  id?: number;
  username?: string;
  name?: string;
  email?: string;
  address?: Address;

  constructor() {
    this.address = new Address();
  }
}

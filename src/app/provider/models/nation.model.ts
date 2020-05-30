import { Religion } from './religion.model';

export interface Nation {
  _id?: string;
  name: string;
  religion: Religion[];
}


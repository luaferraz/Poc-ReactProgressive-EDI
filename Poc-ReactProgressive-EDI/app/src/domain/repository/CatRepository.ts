import { CatFact } from '../model/CatFact';

export interface CatRepository {
  getFact(): Promise<CatFact[]>;
}

import { CatFact } from '../../domain/model/CatFact';

export default interface CatDataSource {
  getFact(): Promise<CatFact[]>;
}

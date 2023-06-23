import { CatFact } from '../../domain/model/CatFact';
import { CatRepository } from '../../domain/repository/CatRepository';
import CatDataSource from '../datasource/CatDataSource';

export class ICatRepository implements CatRepository {
  dataSource: CatDataSource;

  constructor(_datasource: CatDataSource) {
    this.dataSource = _datasource;
  }

  async getFact(): Promise<CatFact[]> {
    return this.dataSource.getFact();
  }
}

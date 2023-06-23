import { CatFact } from '../model/CatFact';
import { CatRepository } from '../repository/CatRepository';

export interface GetFactUseCase {
  invoke: () => Promise<CatFact[]>;
}

export class GetFact implements GetFactUseCase {
  private catRepo: CatRepository;

  constructor(_catRepo: CatRepository) {
    this.catRepo = _catRepo;
  }

  async invoke() {
    return this.catRepo.getFact();
  }
}

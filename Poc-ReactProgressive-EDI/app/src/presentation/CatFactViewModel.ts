import { useState } from 'react';
import { CatFact } from '../domain/model/CatFact';
import { GetFact } from '../domain/usecase/GetFact';
import { ICatRepository } from '../data/repository/ICatRepository';
import ICatAPIDataSource from '../data/datasource/api/CatAPIDataSource';

export default function CatFactViewModel() {
  const [catFact, setCatFact] = useState<CatFact[]>([]);

  const useCase = new GetFact(new ICatRepository(new ICatAPIDataSource()));

  async function getFact() {
    setCatFact(await useCase.invoke());
  }

  return {
    getFact,
    catFact,
  };
}

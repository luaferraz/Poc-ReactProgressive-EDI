import { CatFact } from '../../../domain/model/CatFact';
import CatDataSource from '../CatDataSource';
import { CatFactAPIEntity } from './entity/CatFactAPIEntity';

const BASE_URL = 'https://catfact.ninja';

interface TypedResponse<T> extends Response {
  json(): Promise<T>;
}

function myFetch<T>(...args: [RequestInfo, RequestInit?]): Promise<TypedResponse<T>> {
  return fetch(...args);
}

export default class ICatAPIDataSource implements CatDataSource {
  async getFact(): Promise<CatFact[]> {
    let response = await myFetch<CatFactAPIEntity>(`${BASE_URL}/fact`);
    let data = await response.json();
    return [
      {
        fact: data.fact,
        length: data.length,
      },
    ];
  }
}

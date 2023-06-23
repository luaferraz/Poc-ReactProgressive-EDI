import { useEffect } from 'react';
import useViewModel from './CatFactViewModel';

export default function CatFactView() {
  const { getFact, catFact } = useViewModel();

  useEffect(() => {
    getFact();
  }, []); // Passando um array vazio como dependência

  return (
    <>
      <h1>Fatos sobre gatos</h1>
      <p>Atualize para um novo fato sobre gatos</p>
      {catFact.map((fact, i) => (
        <div key={i}>
          <h3>{fact.fact}</h3>
        </div>
      ))}
    </>
  );
}

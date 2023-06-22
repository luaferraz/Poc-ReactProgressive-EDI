import { useGetCardLogQuery } from '../../services';

import './CardLog.scss';

import CardLogViewModel from '../../services/types/CardLogViewModel';

const CardLogList = (): JSX.Element => {
  const { data, error, isLoading } = useGetCardLogQuery();

  return (
    <div className="book">
      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data && Array.isArray(data) ? (
        <div>
          {data.map((cardLog: CardLogViewModel) => (
            <div key={cardLog.origem} className="card">
              <h3>{cardLog.origem}</h3>
              <p>Log Count: {cardLog.logCount}</p>
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default CardLogList;

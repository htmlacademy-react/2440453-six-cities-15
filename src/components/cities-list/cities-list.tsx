import { CITY_LIST } from '../../consts';
import { TCityName } from '../../types';
import CitiesItem from './cities-item';

type TCitiesListProps = {
  activeCity: TCityName;
}

function CitiesList({activeCity}: TCitiesListProps) : JSX.Element {
  const cities = CITY_LIST.map((item) => <CitiesItem isActive={item === activeCity} name={item}/>);
  return(
    <>
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <section className="locations container">
          <ul className="locations__list tabs__list">
            {cities}
          </ul>
        </section>
      </div>
    </>
  );
}

export default CitiesList;

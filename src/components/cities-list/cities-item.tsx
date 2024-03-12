import { TCityName } from '../../types';

type TCitiesItemProps = {
  isActive: boolean;
  name: TCityName;
}

function CitiesItem({isActive, name}: TCitiesItemProps) : JSX.Element {
  const activeClass = isActive ? " tabs__item--active" : "";
  return (
    <li className="locations__item">
      <a className={`locations__item-link tabs__item${activeClass}`} href="#">
        <span>{name}</span>
      </a>
    </li>
  );
}

export default CitiesItem;

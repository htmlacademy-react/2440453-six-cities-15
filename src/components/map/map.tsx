import { useRef, useEffect } from 'react';
import useMap from '../../hooks/use-map';
import leaflet, { layerGroup } from 'leaflet';
import { CITY_LIST_LOCATION, MAP_CENTER_TYPES, URL_MARKER_CURRENT, URL_MARKER_DEFAULT } from '../../consts';
import { TCityName, TMapCenterType, TOfferList } from '../../types';
import 'leaflet/dist/leaflet.css';

type TMapProps = {
  activeOfferId: string | null;
  offers: TOfferList;
  prefixName: string;
  type: TMapCenterType;
  cityName? : TCityName;
};

function Map({offers, activeOfferId, prefixName, type, cityName}: TMapProps): JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef);
  const city = CITY_LIST_LOCATION.find((item) => item.name === cityName);
  const center = type === MAP_CENTER_TYPES[0] && city ? city.location : offers.find((item) => item.id === activeOfferId)?.location;

  const defaultCustomIcon = leaflet.icon({
    iconUrl: URL_MARKER_DEFAULT,
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

  const currentCustomIcon = leaflet.icon({
    iconUrl: URL_MARKER_CURRENT,
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

  useEffect(() => {

    if (center && map) {
      const loc: leaflet.LatLngExpression = {
        lat: center.latitude,
        lng: center.longitude};
      map.setView(loc, center.zoom);
    }
  }, [map, center]);
  useEffect(() => {
    if (offers) {
      if (map) {
        const markerLayer = layerGroup().addTo(map);
        offers.forEach((offer) => {
          leaflet
            .marker({
              lat: offer.location.latitude,
              lng: offer.location.longitude,
            }, {
              icon: offer.id === activeOfferId ? currentCustomIcon : defaultCustomIcon,
            })
            .addTo(markerLayer);
        });
      }
    }
  }, [map, offers, activeOfferId, currentCustomIcon, defaultCustomIcon]);

  return (
    <section ref={mapRef} data-id={activeOfferId} className={`${prefixName}__map map`}></section>
  );
}

export default Map;

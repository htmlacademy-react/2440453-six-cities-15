import { CITY_LIST, MAP_CENTER_TYPES } from '../consts';

export type TCityName = typeof CITY_LIST[number];

export type TLocation = {
  latitude: number;
  longitude: number;
  zoom: number;
}

export type TMapCenterType = typeof MAP_CENTER_TYPES[number];

export type TCity = {
location: TLocation;
name: TCityName;
}



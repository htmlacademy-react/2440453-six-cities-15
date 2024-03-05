import { CITY_LIST } from '../consts';

export type TCityName = typeof CITY_LIST[number];

export type TLocation = {
  latitude: number;
  longitude: number;
  zoom: number;
}

export type TCity = {
location: TLocation;
name: TCityName;
}



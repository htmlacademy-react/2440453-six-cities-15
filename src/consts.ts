import { TCardSizes, TCity } from './types';

enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

const ROUTE_LIST = {
  'Root' : '/',
  'Unknown' : '*',
  'Favourites' : '/favorites',
  'Login' : '/login',
  'Offer' : '/offer/:id',
} as const;

const SIZES = {
  'offers' : <TCardSizes>{
    width: '260',
    height: '200',
  },
  'favorites': <TCardSizes>{
    width: '150',
    height: '110',
  },
} as const;

const CITY_LIST = ['Paris', 'Cologne', 'Brussels', 'Amsterdam','Hamburg', 'Dusseldorf', ] as const;

const MAP_CENTER_TYPES = ['city', 'offer'] as const;

const RATING = {
  'terribly':'1',
  'badly':'2',
  'not bad':'3',
  'good':'4',
  'perfect':'5',
} as const;

const DEFAULT_CITY: TCity = {
  name: 'Amsterdam',
  location: {
    latitude: 52.37454,
    longitude: 4.897976,
    zoom: 13
  },
} as const;

const MIN_COMMENT_LENGHT = 50;
const MAX_COMMENT_LENGHT = 300;

const URL_MARKER_DEFAULT = '/img/pin.svg';
const URL_MARKER_CURRENT = '/img/pin-active.svg';

const MAX_GALLERY_SIZE = 6;
const MAX_NEAREST_OFFERS_COUNT = 3;


export {
  AuthorizationStatus,
  ROUTE_LIST,
  SIZES,
  CITY_LIST,
  RATING,
  MIN_COMMENT_LENGHT,
  MAX_COMMENT_LENGHT,
  DEFAULT_CITY,
  URL_MARKER_DEFAULT,
  URL_MARKER_CURRENT,
  MAX_GALLERY_SIZE,
  MAX_NEAREST_OFFERS_COUNT,
  MAP_CENTER_TYPES,
};



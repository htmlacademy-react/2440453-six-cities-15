import { StatusCodes } from 'http-status-codes';
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

const OFFERS_LOADED_STATUS = ['Unrequested', 'Loaded', 'Success', 'Error'] as const;

const CITY_LIST_LOCATION :TCity[] = [
  {
    name: 'Paris',
    location: {
      latitude: 48.85661,
      longitude: 2.351499,
      zoom: 13
    },
  },
  {
    name: 'Cologne',
    location: {
      latitude: 50.938361,
      longitude: 6.959974,
      zoom: 13
    },
  },
  {
    name: 'Brussels',
    location: {
      latitude: 50.846557,
      longitude: 4.351697,
      zoom: 13
    },
  },
  {
    name: 'Amsterdam',
    location: {
      latitude: 52.37454,
      longitude: 4.897976,
      zoom: 13
    },
  },
  {
    name: 'Hamburg',
    location: {
      latitude: 53.550341,
      longitude: 10.000654,
      zoom: 13
    },
  },
  {
    name: 'Dusseldorf',
    location: {
      latitude: 51.225402,
      longitude: 6.776314,
      zoom: 13
    },
  },
];

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

const TIMEOUT = 5000;
const BASE_URL = 'https://15.design.htmlacademy.pro/six-cities';
const TIMEOUT_SHOW_ERROR = 2000;

const StatusCodeMapping: Record<number, boolean> = {
  [StatusCodes.BAD_REQUEST]: true,
  [StatusCodes.UNAUTHORIZED]: true,
  [StatusCodes.NOT_FOUND]: true
};

enum SortItems {
  Popular = 'Popular',
  Low2High = 'Price: low to high',
  High2Low = 'Price: high to low',
  TopRatedFirst = 'Top rated first',
}


export {
  AuthorizationStatus,
  SortItems,
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
  CITY_LIST_LOCATION,
  TIMEOUT,
  BASE_URL,
  OFFERS_LOADED_STATUS,
  TIMEOUT_SHOW_ERROR,
  StatusCodeMapping,
};



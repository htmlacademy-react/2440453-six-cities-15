import { CITY_LIST } from '../consts';
import { TOfferList } from '../types';
import { TCityName } from '../types/city';

function calcHiddenPremiumClass(isPremium: boolean, className: string): string {
  const classHiddenPremium = !isPremium ? ' visually-hidden' : '';
  return (`${className}${classHiddenPremium}`);
}

function calcBookmarkActiveClass(isFavorite: boolean, className: string): string {
  const classActive = isFavorite ? ` ${className}--active` : '';
  return (classActive);
}

function calcRaitingPersent(rating:number): string {
  const roundRating = Math.round(+rating);
  return (`${roundRating * 20}%`);
}

function randomCity(): TCityName {
  const num = Math.floor(Math.random() * (CITY_LIST.length));
  return CITY_LIST[num];
}

function getNearbyOffers(offersList: TOfferList, count: number): TOfferList {
  return offersList.slice(0, count);
}

function getCount(listCount:number, maxCount:number): number {
  return (listCount < maxCount ? listCount : maxCount);
}

export { calcHiddenPremiumClass, calcRaitingPersent, calcBookmarkActiveClass, randomCity, getNearbyOffers, getCount };

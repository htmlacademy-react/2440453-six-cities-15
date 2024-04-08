import { CITY_LIST, SortItems } from '../consts';
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

function setCorrectEnding (count: number) : string {
  if (count === 1) {
    return '';
  } else {
    return 's';
  }
}

function changeFirstSym (word: string) : string {
  return word[0].toUpperCase() + word.slice(1,).toLowerCase();
}

function sortOfferList (offerList: TOfferList, sortType: SortItems) : TOfferList {
  switch (sortType) {
    case SortItems.High2Low:
      return offerList.sort((a, b) => -(a.price - b.price));
    case SortItems.Popular:
      return offerList.sort((a, b) => a.rating - b.rating);
    case SortItems.Low2High:
      return offerList.sort((a, b) => a.price - b.price);
    case SortItems.TopRatedFirst:
      return offerList.sort((a, b) => b.rating - a.rating);
  }
}

export { calcHiddenPremiumClass, calcRaitingPersent, calcBookmarkActiveClass, randomCity, getNearbyOffers, getCount, setCorrectEnding, sortOfferList, changeFirstSym };

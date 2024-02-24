import { TOfferList } from './types/offer';

const OFFER_COUNT = 13;

const OFFERS_LIST : TOfferList = [
  {
    title: 'Beautiful &amp; luxurious apartment at great location',
    isFavorite: false,
    isPremium: true,
    previewImage: 'img/apartment-01.jpg',
    type: 'Apartment',
    rating: 4,
    price: 120,
    id: '1',
  },
  {
    title: 'Wood and stone place',
    isFavorite: true,
    isPremium: false,
    previewImage: 'img/room.jpg',
    type: 'Private room',
    rating: 4.5,
    price: 80,
    id: '2',
  },
  {
    title: 'Canal View Prinsengracht',
    isFavorite: false,
    isPremium: true,
    previewImage: 'img/apartment-02.jpg',
    type: 'Apartment',
    rating: 4.3,
    price: 132,
    id: '3',
  },
  {
    title: 'Nice, cozy, warm big bed apartment',
    isFavorite: false,
    isPremium: false,
    previewImage:'img/apartment-03.jpg',
    type: 'Apartment',
    rating: 5.0,
    price: 180,
    id: '4',
  },
  {
    title: 'Wood and stone place',
    isFavorite: false,
    isPremium: false,
    previewImage: 'img/room.jpg',
    type: 'Private room',
    rating: 4.0,
    price: 80,
    id: '5',
  },
];

export {
  OFFER_COUNT,
  OFFERS_LIST,
};

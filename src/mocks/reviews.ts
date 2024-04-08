

import { TOfferReview } from '../types';

const REVIEWS_LIST: TOfferReview[] = [
  {
    'id':'e928cd36-5aac-41a0-a715-0a6e406b089e',
    'user': {
      'isPro': true,
      'name': 'Emely',
      'avatarUrl': 'https://15.design.htmlacademy.pro/static/avatar/7.jpg'
    },
    'rating': 1,
    'comment': 'I stayed here for one night and it was an unpleasant experience.',
    'date': new Date('2023-11-02T11:13:12.982Z'),
    'offerId': '1',
  },
  {
    'id': '8203d444-1e59-4e10-bc47-0ac9cf1d1be1',
    'user': {
      'isPro': false,
      'name': 'Kendall',
      'avatarUrl': 'https://15.design.htmlacademy.pro/static/avatar/7.jpg'
    },
    'rating': 4,
    'comment': 'This villa is perfect in every way: the view on mountains and waterfalls, the hot tub and the villa itself. The evening here became a great continuation of our journeys over country.',
    'date': new Date('2023-10-10T11:13:12.982Z'),
    'offerId': '3',
  },
  {
    'id': 'b5993286-fdf3-4a5e-8345-362f4d86d27d',
    'user': {
      'isPro': true,
      'name': 'Christina',
      'avatarUrl': 'https://15.design.htmlacademy.pro/static/avatar/5.jpg'
    },
    'rating': 3,
    'comment': 'What an amazing view! The house is stunning and in an amazing location. The large glass wall had an amazing view of the river!',
    'date': new Date('2023-10-10T11:13:12.982Z'),
    'offerId': '3',
  },
];

export default REVIEWS_LIST;

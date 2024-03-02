

import { TReviewList } from '../types';

const REVIEWS_LIST: TReviewList = [
  {
    'id': 1,
    'user': {
      'id': 17,
      'isPro': false,
      'name': 'Emely',
      'avatarUrl': 'https://14.react.pages.academy/static/avatar/8.jpg'
    },
    'rating': 3,
    'comment': 'What an amazing view! The house is stunning and in an amazing location. The large glass wall had an amazing view of the river!',
    'date': new Date('2023-11-02T11:13:12.982Z'),
    'offerId': '1',
  },
  {
    'id': 3,
    'user': {
      'id': 19,
      'isPro': false,
      'name': 'Christina',
      'avatarUrl': 'https://14.react.pages.academy/static/avatar/10.jpg'
    },
    'rating': 4,
    'comment': 'This villa is perfect in every way: the view on mountains and waterfalls, the hot tub and the villa itself. The evening here became a great continuation of our journeys over country.',
    'date': new Date('2023-10-10T11:13:12.982Z'),
    'offerId': '3',
  },
  {
    'id': 2,
    'user': {
      'id': 18,
      'isPro': true,
      'name': 'Sophie',
      'avatarUrl': 'https://14.react.pages.academy/static/avatar/9.jpg'
    },
    'rating': 3,
    'comment': 'What an amazing view! The house is stunning and in an amazing location. The large glass wall had an amazing view of the river!',
    'date': new Date('2023-10-10T11:13:12.982Z'),
    offerId: '3',
  },
];

export default REVIEWS_LIST;

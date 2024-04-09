import { TUser } from '.';

export type TReview = {
  'id': string;
  'user': TUser;
  'rating': number;
  'comment': string;
  'date': Date;
}

export type TOfferReview = TReview & {
  'offerId': string;
}

export type TReviewList = TReview [];

export type TCommentData = {
  'rating': number;
  'id': string;
  'comment': string;
}

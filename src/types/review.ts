import { TUser } from '.';

export type TReview = {
  'id': number;
  'user': TUser;
  'rating': number;
  'comment': string;
  'date': Date;
}

export type TOfferReview = TReview & {
  'offerId': string;
}

export type TReviewList = TOfferReview [];

export type TCommentData = {
  'rating': number;
  'id': string;
  'comment': string;
}

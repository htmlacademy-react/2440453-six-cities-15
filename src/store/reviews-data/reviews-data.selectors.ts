import { State } from '..';
import { StateNamespace } from '../../consts';
import { TOfferLoadStatus, TReviewList } from '../../types';

export const getReviews = (state: State): TReviewList => state[StateNamespace.Review].reviews;
export const getReviewsLoadStatus = (state: State): TOfferLoadStatus => state[StateNamespace.Review].reviewsLoadStatus;
export const getReviewsPostStatus = (state: State): TOfferLoadStatus => state[StateNamespace.Review].reviewPostStatus;

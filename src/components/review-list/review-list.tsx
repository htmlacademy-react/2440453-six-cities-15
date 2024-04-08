import { MAX_REVIEW_COUNT } from '../../consts';
import { TReviewList } from '../../types';
import { getCount, setCorrectEnding } from '../../utils';
import ReviewItem from './review-item';

type TReviewListProps = {
  reviewList: TReviewList;
}

function ReviewList({reviewList}: TReviewListProps) : JSX.Element {
  const reviewCount = getCount(reviewList.length, MAX_REVIEW_COUNT);
  const sortedReviews = reviewList && reviewList.length > 0 ? [...reviewList] : [];
  sortedReviews.sort((a, b) => new Date(b.date).valueOf() - new Date(a.date).valueOf());
  const reviews = sortedReviews.map((item, i) => {
    if (i < reviewCount) {
      return <ReviewItem key={item.id} item={item}/>;
    }
  });
  return(
    <>
      <h2 className="reviews__title">{`Review${setCorrectEnding(reviewList.length)}`} &middot; <span className="reviews__amount">{reviewList.length}</span></h2>
      <ul className="reviews__list">
        {reviews}
      </ul>
    </>
  );
}

export default ReviewList;

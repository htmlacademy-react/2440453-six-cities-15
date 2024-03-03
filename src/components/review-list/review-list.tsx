import { TReviewList } from '../../types';
import ReviewItem from './review-item';

type TReviewListProps = {
  reviewList: TReviewList;
}

function ReviewList({reviewList}: TReviewListProps) : JSX.Element {
  const reviews = reviewList.map((item) => <ReviewItem key={item.id} item={item}/>);
  return(
    <>
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviewList.length}</span></h2>
      <ul className="reviews__list">
        {reviews}
      </ul>
    </>
  );
}

export default ReviewList;

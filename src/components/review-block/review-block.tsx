import { AuthorizationStatus, OFFERS_LOADED_STATUS } from '../../consts';
import { useAppSelector } from '../../hooks';
import { getReviews, getReviewsLoadStatus } from '../../store';
import CommentForm from '../comment-form/comment-form';
import ErrorMessage from '../error-message/error-message';
import ReviewList from '../review-list/review-list';

type TReviewBlockProps = {
  authStatus: AuthorizationStatus;
  offerId: string;
}
function ReviewBlock({authStatus, offerId}: TReviewBlockProps) : JSX.Element {
  const reviewsList = useAppSelector(getReviews);
  const reviewsLoadStatus = useAppSelector(getReviewsLoadStatus);
  const isAuth = authStatus === AuthorizationStatus.Auth;
  return(
    <section className="offer__reviews reviews">
      {reviewsLoadStatus === OFFERS_LOADED_STATUS[2] && <ReviewList reviewsList={reviewsList}/>}
      {reviewsLoadStatus === OFFERS_LOADED_STATUS[3] && <ErrorMessage/>}
      {isAuth && <CommentForm offerId={offerId}/>}
    </section>
  );
}

export default ReviewBlock;

import { AuthorizationStatus } from '../../consts';
import { useAppSelector } from '../../hooks';
import CommentForm from '../comment-form/comment-form';
import ReviewList from '../review-list/review-list';

type TReviewBlockProps = {
  authStatus: AuthorizationStatus;
  offerId: string;
}
function ReviewBlock({authStatus, offerId}: TReviewBlockProps) : JSX.Element {
  const reviewList = useAppSelector((state) => state.reviewsList);
  // const reviewsLoadStatus = useAppSelector((state) => state.reviewsLoadStatus); //если загрузка - блок загрузки, если ошибка - блок ошибки,
  const isAuth = authStatus === AuthorizationStatus.Auth;
  return(
    <section className="offer__reviews reviews">
      {reviewList && <ReviewList reviewList={reviewList}/>}
      {isAuth && <CommentForm offerId={offerId}/>}
    </section>
  );
}

export default ReviewBlock;

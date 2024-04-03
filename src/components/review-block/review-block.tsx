import { AuthorizationStatus } from '../../consts';
import { REVIEWS_LIST } from '../../mocks';
import CommentForm from '../comment-form/comment-form';
import ReviewList from '../review-list/review-list';

type TReviewBlockProps = {
  authStatus: AuthorizationStatus;
}
function ReviewBlock({authStatus}: TReviewBlockProps) : JSX.Element {
  const reviewList = REVIEWS_LIST;
  const isAuth = authStatus === AuthorizationStatus.Auth;
  return(
    <section className="offer__reviews reviews">
      <ReviewList reviewList={reviewList}/>
      {isAuth && <CommentForm/>}
    </section>
  );
}

export default ReviewBlock;

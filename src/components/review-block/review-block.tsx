import { REVIEWS_LIST } from '../../mocks';
import CommentForm from '../comment-form/comment-form';
import ReviewList from '../review-list/review-list';

function ReviewBlock() : JSX.Element {
  const reviewList = REVIEWS_LIST;
  const isAuth = true;
  return(
    <section className="offer__reviews reviews">
      <ReviewList reviewList={reviewList}/>
      {isAuth && <CommentForm/>}
    </section>
  );
}

export default ReviewBlock;

import { TReview } from '../../types';
import { calcRaitingPersent } from '../../utils';

type TReviewItemProps = {
  item: TReview;
}

function ReviewItem({item}: TReviewItemProps) : JSX.Element {
  const {id, user, rating, comment, date} = item;
  const {avatarUrl, name, isPro} = user;
  const ratPersent = calcRaitingPersent(rating);
  const formattedDate = new Date(date).toLocaleString('en-US', {
    month: 'long',
    year: 'numeric',
  });
  return(
    <li className="reviews__item" data-id={id}>
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={avatarUrl} width="54" height="54" alt="Reviews avatar"/>
        </div>
        <span className="reviews__user-name">
          {name}
        </span>
        {isPro && <span className="offer__user-status">Pro</span>}
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: ratPersent}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {comment}
        </p>
        <time className="reviews__time" dateTime={date.toString()}>{formattedDate}</time>
      </div>
    </li>
  );
}

export default ReviewItem;

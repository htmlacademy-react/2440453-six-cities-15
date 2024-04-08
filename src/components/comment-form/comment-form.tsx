import { ChangeEvent, FormEvent, useState } from 'react';
import { MAX_COMMENT_LENGHT, MIN_COMMENT_LENGHT, RATING } from '../../consts';
import RatingInput from './rating-input';
import { useAppDispatch } from '../../hooks';
import { postReview } from '../../store/api-actions';

type TCommentFormProps = {
  offerId : string;
}

function CommentForm({offerId}: TCommentFormProps) :JSX.Element {
  const [rating, setRating] = useState('');
  const [comment, setComment] = useState('');
  const isValidComment = comment.length >= MIN_COMMENT_LENGHT && comment.length <= MAX_COMMENT_LENGHT && rating !== '';
  const dispatch = useAppDispatch();

  function handleTextChange(e:ChangeEvent<HTMLTextAreaElement>) {
    setComment(e.target.value);
  }

  function handleRatingChange(e:ChangeEvent<HTMLInputElement>) {
    setRating(e.target.value);
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    dispatch(postReview({id: offerId, comment: comment, rating: parseInt(rating)}));
    setRating('');
    setComment('');
  }

  const ratings = Object.entries(RATING).reverse().map(([key, value]) => <RatingInput key={key} title={key} value={value} checked={rating.toString() === value.toString()} onChange={handleRatingChange}/>);
  return (
    <form className="reviews__form form" action="#" method="post" onSubmit={handleSubmit}>
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {ratings}
      </div>
      <textarea className="reviews__textarea form__textarea" id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved" onChange={handleTextChange} value={comment}></textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={!isValidComment}>Submit</button>
      </div>
    </form>
  );
}

export default CommentForm;

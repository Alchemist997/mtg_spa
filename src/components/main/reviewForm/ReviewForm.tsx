import React, { FormEvent } from 'react';
import { connect } from 'react-redux';
import { addReview } from './../../../redux/actionCreators/reviews';
import { ReviewFormState, ReviewFormProps } from './types';

class ReviewForm extends React.Component<ReviewFormProps, ReviewFormState> {

  constructor(props: ReviewFormProps) {
    super(props);

    this.state = {
      name: '',
      review: '',
    };

    this.onSubmitHandler = this.onSubmitHandler.bind(this);
  }

  onSubmitHandler(evt: FormEvent) {
    evt.preventDefault();
    const name = this.state.name;
    const review = this.state.review;
    if (!name || !review) return;

    this.props.dispatch(addReview(name, review));
    this.setState({ name: '', review: '' });
  };

  render() {
    return (
      <form className='review-form' action="#" onSubmit={this.onSubmitHandler}>
        <p className='review-form__title'>Добавить отзыв</p>

        <input
          className='review-form__textarea'
          type="text"
          value={this.state.name}
          placeholder='Имя'
          onChange={evt => this.setState({ name: evt.target.value })}
        />

        <textarea
          className='review-form__textarea'
          value={this.state.review}
          placeholder='Отзыв'
          onChange={evt => this.setState({ review: evt.target.value })}
        />

        <button className='review-form__btn' type="submit">
          Отправить
        </button>

      </form>
    );
  }
};

export default connect()(ReviewForm);

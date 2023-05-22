import React from 'react';
import { connect } from 'react-redux';
import { RootState } from '../../../redux/store';
import ReviewsListItem from './../reviewsListItem/ReviewsListItem';
import { ReviewsListItemProps } from './../reviewsListItem/types';
import { ReviewsListProps } from './types';

class ReviewsList extends React.Component<ReviewsListProps> {
  render() {
    return (
      <div className="reviews-list-wrap">
        <p className="reviews-title">Отзывы</p>

        <ul className='reviews-list'>{
          Object.entries<ReviewsListItemProps>(this.props.reviewsList)
            .map(([key, val]) => {
              return <ReviewsListItem
                key={key}
                name={val.name}
                review={val.review}
                date={val.date}
              />;
            })
        }</ul>
      </div>
    );
  }
}

function mapStateToProps(state: RootState) {
  const reviewsList = { ...state.reviews[state.reviews.currentLang] };
  return { reviewsList };
}

export default connect(mapStateToProps)(ReviewsList);

import React from 'react';
import { connect } from 'react-redux';
import { RootState } from '../../../redux/store';
import ReviewsListItem from './../reviewsListItem/ReviewsListItem';
import { ReviewsListProps } from './types';
import Pagination from './../../ui/pagination/Pagination';

class ReviewsList extends React.Component<ReviewsListProps> {

  render() {
    const props = this.props;
    const qtyPerPage = 10;
    const reviewsList = Object.entries(props.reviewsList);
    const pagesQty = Math.ceil(reviewsList.length / qtyPerPage);
    const currentReviews = reviewsList
      .slice(props.currentPage * qtyPerPage - qtyPerPage,
        props.currentPage * qtyPerPage);

    return (
      <div className="reviews-list-wrap">
        <p className="reviews-title">Отзывы</p>

        {reviewsList.length
          ? <ul className='reviews-list'>{
            currentReviews.map(([key, val]) => {
              return <ReviewsListItem
                key={key}
                name={val.name}
                review={val.review}
                date={val.date}
              />;
            })
          }</ul>

          : <div>В этой категории ещё нет отзывов</div>}

        {pagesQty > 1
          ? <Pagination
            currentPage={props.currentPage}
            pagesQty={pagesQty}
          />
          : null}
      </div>
    );
  }
}

function mapStateToProps(state: RootState) {
  const reviewsList = { ...state.reviews[state.reviews.currentLang] };
  return { reviewsList, currentPage: state.reviews.currentPage };
}

export default connect(mapStateToProps)(ReviewsList);

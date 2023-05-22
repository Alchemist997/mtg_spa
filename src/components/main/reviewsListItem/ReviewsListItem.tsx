import React from 'react';
import { ReviewsListItemProps } from './types';

class ReviewsListItem extends React.Component<ReviewsListItemProps> {

  getFormattedName(fullName: string) {
    let [surname, name] = fullName.split(' ').slice(0, 2);
    if (name) name = `${name[0]}.`;
    return `${surname} ${name ?? ''}`;
  }

  render() {
    const { name, review, date } = this.props;

    return (
      <li className='review'>
        <div className="review__name">{this.getFormattedName(name)}</div>
        <div className="review__text">{review}</div>
        <div className="review__date">{date}</div>
      </li>
    );
  }
};

export default ReviewsListItem;

import { ReviewsListItemProps } from './../reviewsListItem/types';

export interface ReviewsListProps {
  reviewsList: {
    [key: string]: ReviewsListItemProps;
  };
}

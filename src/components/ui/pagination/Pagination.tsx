import React from 'react';
import { connect } from 'react-redux';
import { PaginationProps } from './types';
import { setPage } from './../../../redux/actionCreators/reviews';

class Pagination extends React.Component<PaginationProps> {

  render() {
    const props = this.props;

    return (
      <nav className="pagination">
        <button
          className='pagination__btn'
          title='Первая страница'
          disabled={props.currentPage <= 1}
          onClick={() => { props.dispatch(setPage(1)); }}
        >1</button>

        <button
          className='pagination__btn pagination__btn--prev'
          title='Предыдущая страница'
          disabled={props.currentPage <= 1}
          onClick={() => { props.dispatch(setPage(props.currentPage - 1)); }}
        />

        <div className="pagination__item">{props.currentPage}</div>

        <button
          className='pagination__btn pagination__btn--next'
          title='Следующая страница'
          disabled={props.currentPage >= props.pagesQty}
          onClick={() => { props.dispatch(setPage(props.currentPage + 1)); }}
        />

        <button
          className='pagination__btn'
          title='Последняя страница'
          disabled={props.currentPage >= props.pagesQty}
          onClick={() => { props.dispatch(setPage(props.pagesQty)); }}
        >{props.pagesQty}</button>
      </nav>
    );
  }
};

export default connect()(Pagination);

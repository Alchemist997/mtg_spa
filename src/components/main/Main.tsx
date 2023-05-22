import React from 'react';
import ReviewsList from './reviewsList/ReviewsList';
import ReviewForm from './reviewForm/ReviewForm';

class Main extends React.Component {
  render() {
    return (
      <main className='main'>
        <ReviewsList />
        <ReviewForm />
      </main>
    );
  }
};

export default Main;
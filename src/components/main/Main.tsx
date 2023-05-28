import React from 'react';
import ReviewsList from './reviewsList/ReviewsList';
import ReviewForm from './reviewForm/ReviewForm';

class Main extends React.Component {
  render() {
    return (
      <div className="main-wrap">
        <div className="container">
          <main className='main'>
            <ReviewsList />
            <ReviewForm />
          </main>
        </div>
      </div>
    );
  }
};

export default Main;
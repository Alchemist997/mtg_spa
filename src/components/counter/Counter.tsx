import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../redux/store';
import { decrement, increment } from '../../redux/actionCreators/counter';

const Counter: React.FC = () => {
  const count = useSelector((store: RootState) => store.count.value);
  const dispatch = useDispatch();

  return (
    <>
      <div className="row">
        <button
          type="button"
          onClick={() => dispatch(decrement())}
        >
          decrement
        </button>
        <button
          type="button"
          onClick={() => dispatch(increment())}
        >
          increment
        </button>
      </div>

      <div>{count}</div>
    </>
  );
};

export default Counter;

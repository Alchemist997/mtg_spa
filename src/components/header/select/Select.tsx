import React from 'react';
import { connect } from 'react-redux';
import { RootState } from './../../../redux/store';
import { setLang } from './../../../redux/actionCreators/reviews';
import { SelectProps } from './types';

class Select extends React.Component<SelectProps> {
  render() {
    const props = this.props;

    return (
      <div className="select">
        {props.lang}

        <div className="select__options-wrap">
          <label className='radio-label'>
            <input
              type="radio"
              name='lang'
              value='ru'
              checked={props.lang === 'ru'}
              onChange={evt => { props.dispatch(setLang(evt.target.value)); }}
            />
            ru
          </label>

          <label className='radio-label'>
            <input
              type="radio"
              name='lang'
              value='en'
              checked={props.lang === 'en'}
              onChange={evt => { props.dispatch(setLang(evt.target.value)); }}
            />
            en
          </label>
        </div>
      </div>
    );
  }
};

function mapStateToProps(state: RootState) {
  return { lang: state.reviews.currentLang };
}

export default connect(mapStateToProps)(Select);

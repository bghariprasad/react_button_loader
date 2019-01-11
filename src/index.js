import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './ButtonLoader.css';

class ButtonLoader extends Component {
  render() {
    const {
      width, height, background, isLoading, children, onClick
    } = this.props;
    const loaderHeight = parseInt(Number(height.split('px')[0]) * 0.5, 10);
    return (
      <button
        type="button"
        className={`button ${isLoading ? 'disabled' : ''}`}
        disabled={isLoading}
        onClick={() => onClick()}
        style={
              {
                background,
                minWidth: width,
                minHeight: height
              }
            }
      >
        {isLoading ?
          <div
            className="loader"
            style={{ width: `${loaderHeight}px`, height: `${loaderHeight}px` }}
          />
          :
          children
          }
      </button>

    );
  }
}

ButtonLoader.propTypes = {
  children: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  background: PropTypes.string,
  onClick: PropTypes.func,
  isLoading: PropTypes.bool
};

ButtonLoader.defaultProps = {
  width: '125px',
  height: '35px',
  background: '#22b686',
  children: 'Click Me!',
  onClick: () => null,
  isLoading: false
};

export default ButtonLoader;


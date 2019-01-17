import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './ButtonLoader.css';

class ButtonLoader extends Component {
  constructor(){
    super();
    this.renderLoader = this.renderLoader.bind(this)
  }
  
  renderLoader(loaderHeight, loaderType) {
    if (loaderType === 'bouncing-ball' || loaderType === 'fading-ball' || loaderType === 'jiggling-lines') {
      return (
        <div
          id={loaderType}
        >
          <span />
          <span />
          <span />
          <span />
        </div>
      );
    }
    return (
      <div
        className="react-button-loader"
        style={{ width: `${loaderHeight}px`, height: `${loaderHeight}px` }}
      />
    );
  };

  render() {
    const {
      width, height, background, isLoading, children, onClick, loaderType, disabled
    } = this.props;
    const loaderHeight = parseInt(Number(height.split('px')[0]) * 0.5, 10);
    return (
      <button
        type="button"
        className={`button ${(isLoading || disabled) ? 'react-button-disabled' : ''}`}
        disabled={isLoading || disabled}
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
          this.renderLoader(loaderHeight, loaderType)
          :
          children
        }
      </button>
    );
  }
}

ButtonLoader.propTypes = {
  children: PropTypes.string,
  loaderType: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  background: PropTypes.string,
  onClick: PropTypes.func,
  isLoading: PropTypes.bool,
  disabled: PropTypes.bool
};

ButtonLoader.defaultProps = {
  width: '125px',
  height: '35px',
  loaderType: 'spinner',
  background: '#22b686',
  children: 'Click Me!',
  onClick: () => null,
  isLoading: false,
  disabled: false
};

export default ButtonLoader;
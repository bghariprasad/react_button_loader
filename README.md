# React Button Loader

React button with loader feature.

[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install
```
npm install react_button_loader --save
```

## Demo
<img src="https://github.com/bghariprasad/react_button_loader/raw/master/green-spinner.gif" alt="green-spinner" width="125px" />

## Usage Example
```
React default button loader
```
```js
import ButtonLoader from 'react_button_loader';

class ReactButtonLoader extends Component {
  constructor() {
    super();
    this.state = {
      toggleLoader: false
    };
  }

  render() {
    return (
      <ButtonLoader
        isLoading={this.state.toggleLoader} // Toggle loader (true/false)
        onClick={() => this.setState({ toggleLoader: !this.state.toggleLoader })}
      >
        Click Me
      </ButtonLoader>
    );
  }
}
```
## Demo
<img src="https://github.com/bghariprasad/react_button_loader/raw/master/violet-spinner.gif" alt="violet-spinner" width="125px" />

## Usage Example
```
React custom button loader
```
```js
import ButtonLoader from 'react_button_loader';

class ReactButtonLoader extends Component {
  constructor() {
    super();
    this.state = {
      toggleLoader: false
    };
  }

  render() {
    return (
      <ButtonLoader
        width="100px"
        height="35px"
        background="#6f42c1"
        isLoading={this.state.toggleLoader} // Toggle loader (true/false)
        onClick={() => this.setState({ toggleLoader: !this.state.toggleLoader })}
      >
        Click Me
      </ButtonLoader>
    );
  }
}
```

## Demo
<img src="https://github.com/bghariprasad/react_button_loader/raw/master/bouncing-ball.gif" alt="bouncing-ball" width="125px" />

## Usage Example
```js
import ButtonLoader from 'react_button_loader';

class ReactButtonLoader extends Component {
  constructor() {
    super();
    this.state = {
      toggleLoader: false
    };
  }

  render() {
    return (
      <ButtonLoader
        isLoading={this.state.toggleLoader}
        background="#c93b3b"
        loaderType= 'bouncing-ball'
        onClick={() => {
          this.setState({toggleLoader: true})
        }}
      >
        Click Me 
      </ButtonLoader>
    );
  }
}
```

## Demo
<img src="https://github.com/bghariprasad/react_button_loader/raw/master/jiggling-lines.gif" alt="jiggling-lines" width="125px" />

## Usage Example
```js
import ButtonLoader from 'react_button_loader';

class ReactButtonLoader extends Component {
  constructor() {
    super();
    this.state = {
      toggleLoader: false
    };
  }

  render() {
    return (
      <ButtonLoader
        isLoading={this.state.toggleLoader}
        background="#42b5c1"
        loaderType= 'jiggling-lines'
        onClick={() => {
          this.setState({toggleLoader: true})
        }}
      >
        Click Me 
      </ButtonLoader>
    );
  }
}
```

## PROPTYPES
| Prop | Type | Default |
| ---- | ---- | ------- |
| isLoading | Boolean | true |
| disabled | Boolean | false |
| width | String | '125px' |
| height | String | '35px' |
| loaderType | String | 'spinner' |
| background | String | '#22b686' |
| onClick | Function | () => null |
# react_button_loader
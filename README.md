# React Button Loader
## Install
```
npm install react_button_loader --save

```

## Demo
<img src="https://github.com/bghariprasad/react_button_loader/raw/master/demo.gif" alt="demo" width="100%" />

## Usage
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

## PROPTYPES
| Prop | Type | Default |
| ---- | ---- | ------- |
| isLoading | Boolean | true |
| children | String | 'Click Me!' |
| width | String | '125px' |
| height | String | '35px' |
| background | String | '#22b686' |
| onClick | Function | () => null |
# react_button_loader

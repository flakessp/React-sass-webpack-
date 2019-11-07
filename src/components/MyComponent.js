import React from 'react';
import './MyComponent.scss';

class MyComponent extends React.Component {
  render() {
    console.log('wewe');
    return <h1 className='X'>{this.props.title}</h1>
    // return React.createElement('h1', null, `Title: ${this.props.title}`)
  } 
}
// ReactDom.render(<MyComponent title="hey" />, document.getElementById('root'));

export default MyComponent; 
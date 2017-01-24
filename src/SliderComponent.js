import React from 'react';
import ReactDOM from 'react-dom';
import { Slider } from 'e2open-design-system';

class SliderComponent extends React.Component {
  render() {
    return <div/>;
  }

  /**
   * Once a component has been inserted into the DOM, init the slider.
   */
  componentDidMount() {
    this.node = ReactDOM.findDOMNode(this);
    const options = [{
      value: 5,
      min: 0,
      max: 100,
      step: 1,
      name: 'input-name'
    }];
    this.slider = new Slider(Object.assign({ el: this.node, handles: options }, this.props));
    this.slider.on('change:values', function(values, oldValues) {
      console.log('oldValues:', oldValues, 'newValues:', values);
    });
  }

  /**
   * When a component is going to be removed, kill the slider.
   */
  componentWillUnmount() {
    ReactDOM.unmountComponentAtNode(this.node);
    this.slider.remove();
    delete this.slider;
  }

  /**
   * Update the slider with new properties.
   * @param  {Object} props
   */
  componentWillReceiveProps(props) {
    this.slider.setValue(props.value);
  }
}

export default SliderComponent;

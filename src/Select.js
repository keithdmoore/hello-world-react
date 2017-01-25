import React from 'react';
import ReactDOM from 'react-dom';
import { SelectInput } from 'e2open-design-system';

class Select extends React.Component {
  render() {
    return <div/>;
  }

  /**
   * Once a component has been inserted into the DOM, init the slider.
   */
  componentDidMount() {
    console.log('props in componentDidMount', this.props);
    this.node = ReactDOM.findDOMNode(this);
    this.selectInput = new SelectInput(Object.assign({el: this.node}, this.props));
  }

  /**
   * When a component is going to be removed, kill the table.
   */
  componentWillUnmount() {
    ReactDOM.unmountComponentAtNode(this.node);
    this.selectInput.remove();
    delete this.selectInput;
  }

  /**
   * Update the selectInput with new properties.
   * @param  {Object} props
   */
  componentWillReceiveProps(props) {
    console.log('props', props);
    this.selectInput.setValue(props.value);
  }
}

export default Select;

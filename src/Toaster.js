import React from 'react';
import ReactDOM from 'react-dom';
import { ToastContainer, MessageBlock } from 'e2open-design-system';

class Toaster extends React.Component {

  render() {
    console.log('inside Toaster render.....');
    return <div className="eto-toast-container"><span></span></div>;
  }

  /**
   * Once a component has been inserted into the DOM, init the modal.
   */
  componentDidMount() {
    this.node = ReactDOM.findDOMNode(this);
    console.log('this.node',this.node);

    this.toaster = new ToastContainer({ el: this.node, duration: 3000 });
    console.log('toaster was created', this.toaster);
    if (this.props.onCreate) {
      this.props.onCreate(this.toaster);
    }
  }
  
  /**
   * When a component is going to be removed, kill the modal.
   */
  componentWillUnmount() {
    ReactDOM.unmountComponentAtNode(this.node);
    this.toaster.remove();
    delete this.toaster;
  }

  /**
   * Update the ConfigMigrationComponent with new properties.
   * @param  {Object} props
   */
  componentWillReceiveProps(props) {
    console.log('Yo, receiving some props ****************************');
    console.log('props', props);
  }
}
export default Toaster;
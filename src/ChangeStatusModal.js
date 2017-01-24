import React from 'react';
import ReactDOM from 'react-dom';
import { Modal } from 'e2open-design-system';
import Toaster from './Toaster.js';
import ComboBoxComponent from './ComboBox.js';
import SelectInputComponent from './SelectInputComponent.js';

class ChangeStatusModal extends React.Component {
  constructor(props) {
    super(props);
    this.handleClose = this.handleClose.bind(this);
    this.onCreateToaster = this.onCreateToaster.bind(this);
    this.handleStatusChange = this.handleStatusChange.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.statusOptions = [{ value: 'value', description: 'desc'}, { value: 'value2', description: 'desc2'}];
  }
  
  render() {
    console.log('inside ChangeStatusModal render.....');
    const statusOptions = [
      { label: 'Select an option...', value: '', selected: true },
      { label: 'All', value: 'All' },
      { label: 'label1', value: 'value1'},
      { label: 'label2', value: 'value2'}
    ];

    const reasonCodeOptions = [
      { label: 'Select an option...', value: '', selected: true },
      { label: 'All', value: 'All' },
      { label: 'label3', value: 'value3'},
      { label: 'label4', value: 'value4'}
    ];
	  return <div className="eto-modal" id="change-status-modal">
	    <div className="eto-modal__content col-xs-10 col-sm-8 col-md-6 col-lg-4 col-xl-2">
          <header className="eto-modal__header">
            <h3>Change Status for Part</h3>
            <button className="eto-modal__close" onClick={this.handleClose}></button>
          </header>
          <Toaster onCreate={this.onCreateToaster}/>
	        <section className="eto-modal__body">
            <section className="eto-well">
              <form className="eto-form eto-form--responsive container">
                <SelectInputComponent 
                    className="row" 
                    containerClassName="col-xs-12 col-sm-8" 
                    labelClassName="col-xs-12 col-sm-4"
                    label="Status"
                    value="Select an option..."
                    id="select_status"
                    name="select_status"
                    horizontal="true"
                    options={statusOptions}
                    />
                <SelectInputComponent 
                    className="row" 
                    containerClassName="col-xs-12 col-sm-8" 
                    labelClassName="col-xs-12 col-sm-4"
                    label="Reason Code"
                    value="Select an option..."
                    id="select_reason_code"
                    name="select_reason_code"
                    horizontal="true"
                    options={reasonCodeOptions}
                    />                    
              </form>
              <label>Model</label>
              <span className="col-xs-12 col-sm-8">Production</span>
            </section> 
		 	    </section>
	          <footer className="eto-modal__footer">
	          	<button type="button" id="cancel-status-button" name="cancel-status-button" className="eto-btn margin-left-xs-1" 
	          		    onClick={this.handleClose}>Cancel</button>
    		    	<button type="button" id="save-status-button" name="save-status-button" className="eto-btn eto-btn--primary"
    		 		          disabled={ false }>Save</button>
	          </footer>
		  </div>
	  </div>
  }

  handleClose() {
    console.log('close called......');
    this.modal.close();
  }
  
  handleStatusChange(val) {
		if (val==='pleaseSelect') {
			//this.selectedFileType = null;
		}
		else {
			//this.selectedFileType = val;
		}
	}

  onCreateToaster(toaster) {
    this.toaster = toaster;
  }

  /**
   * Once a component has been inserted into the DOM, init the modal.
   */
  componentDidMount() {
    this.node = ReactDOM.findDOMNode(this);
    console.log('this.node',this.node);
    this.modal = new Modal({ el: this.node });
    this.props.onCreate(this.modal);

    // const options = [
    //   { label: 'Select Config Type', value: '', selected: true },
    //   { label: 'All', value: 'All' },
    //   { label: 'label1', value: 'value1'},
    //   { label: 'label2', value: 'value2'}
    // ];
    // this.selectInput = new SelectInput({ 
    //     el: this.node,
    //     label: 'Config Type',
    //     value: 'Select Config Type',
    //     id: 'select_config_type',
    //     name: 'select_config_type',
    //     options: options,
    //     horizontal: false 
    //   }
    // );

    // Manipulate the DOM to make it pretty
    // const select_label = document.querySelector("label.eto-select__label");
    // select_label.className += " col-xs-12 col-sm-4";

    // const select_field_container = document.querySelector("div.eto-select__field-container");
    // select_field_container.className += " col-xs-12 col-sm-8";
  }
  
  /**
   * When a component is going to be removed, kill the modal.
   */
  componentWillUnmount() {
    ReactDOM.unmountComponentAtNode(this.node);
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
export default ChangeStatusModal;
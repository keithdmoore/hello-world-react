import React from 'react';
import ReactDOM from 'react-dom';
import { Modal } from 'e2open-design-system';
import Toaster from './Toaster.js';
import ComboBoxComponent from './ComboBox.js';
import Select from './Select.js';

class ChangeStatusModal extends React.Component {
  // URL to invoke a GET pcChangeStatus.do?from=ajaxCall&tableName=Product&recordId=116049
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
      { label: 'All'},
      { label: 'label1'},
      { label: 'label2'}
    ];

    const reasonCodeOptions = [
      { label: 'Select an option...', value: '', selected: true },
      { label: 'All', value: 'All' },
      { label: 'label3', value: 'value3'},
      { label: 'label4', value: 'value4'}
    ];
	  return <div className="eto-modal" id="change-status-modal">
	    <div className="eto-modal__content col-xs-8 col-sm-4 col-md-4 col-lg-2 col-xl-2">
          <header className="eto-modal__header">
            <h3>Change Status for Part</h3>
            <button className="eto-modal__close" onClick={this.handleClose}></button>
          </header>
          <Toaster onCreate={this.onCreateToaster}/>
             <form className="eto-form eto-form--responsive">
             <section className="eto-well eto-well-dull">
                <Select
                    className="row" 
                    containerClassName="col-xs-12 col-sm-8" 
                    labelClassName="col-xs-12 col-sm-4"
                    label="Status Action"
                    value="Select an option..."
                    id="select_status"
                    name="select_status"
                    horizontal="true"
                    options={statusOptions}
                    />    
                <Select
                    className="row margin-top-xs-2" 
                    containerClassName="col-xs-12 col-sm-8" 
                    labelClassName="col-xs-12 col-sm-4"
                    label="Reason Code"
                    value="Select an option..."
                    id="select_reason_code"
                    name="select_reason_code"
                    horizontal="true"
                    options={reasonCodeOptions}
                    />  
                </section>  
                <section className="eto-well eto-well-light">                
                  <div className="eto-select row">
                    <label className="eto-select__label col-xs-12 col-sm-4"><strong>Model</strong></label>
                    <div className="eto-select__label col-xs-12 col-sm-8">PRODUCTION</div>
                  </div>
                  <div className="eto-select row margin-top-xs-1">
                    <label className="eto-select__label col-xs-12 col-sm-4"><strong>Product Name</strong></label>
                    <div className="eto-select__label col-xs-12 col-sm-8">67655854</div>
                  </div>
                  <div className="eto-select row margin-top-xs-1">
                    <label className="eto-select__label col-xs-12 col-sm-4"><strong>Version</strong></label>
                    <div className="eto-select__label col-xs-12 col-sm-8">&mdash;</div>
                  </div>
                  <div className="eto-select row margin-top-xs-1">
                    <label className="eto-select__label col-xs-12 col-sm-4"><strong>Description</strong></label>
                    <div className="eto-select__label col-xs-12 col-sm-8">M1591_A14_C_NA_000126</div>
                  </div>
                  <div className="eto-select row margin-top-xs-1">
                    <label className="eto-select__label col-xs-12 col-sm-4"><strong>Current Status</strong></label>
                    <div className="eto-select__label col-xs-12 col-sm-8">Engineering</div>
                  </div>                                                                      
                </section>
              </form>

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
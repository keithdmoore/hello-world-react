import React from 'react';
import ReactDOM from 'react-dom';
import { Modal } from 'e2open-design-system';

class ConfigMigrationComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { disabled: false };
    this.disableAll = this.disableAll.bind(this);
    this.createRows = this.createRows.bind(this);
    this.createRow = this.createRow.bind(this);
    this.onModalCreate = this.onModalCreate.bind(this);
  }
  createRows(configTypes) {
    return configTypes.map(this.createRow);
  }
  createRow(configType) {
    console.log(this.state);
    if (configType === 'All Configs') return '';
    return <ConfigMigrationRowComponent key={configType} configType={configType} disabled={this.state.disabled} disableAll={this.disableAll}/>;
  }
  render() {
    return <div>
             <table className="eto-table margin-left-xs-3">
                <tbody>{this.createRows(this.props.configTypes)}</tbody>
              </table>
              <br />
              <div className="margin-left-xs-3">
                <button type="button" id="download-all-button" name="download-all-button"  className="eto-btn eto-btn--primary"
                        onClick={(e)=>this.download(e, "All Configs")}>
                  <i className="md-icon margin-right-xs-1">file_download</i>
                  Download All
                </button>          
                <button type="button" id="upload-all-button" name="upload-all-button" className="eto-btn margin-left-xs-1"
                        onClick={(e)=>this.upload(e, "All Configs")}>
                  <i className="md-icon margin-right-xs-1">file_upload</i>
                  Upload All
                </button>
              </div>  
              <br />  
              <br />
              <ConfigFileUploadModalComponent onCreate={this.onModalCreate}/>                                                  
           </div>;
  }

  disableAll() {
    console.log('disableAll called......');
    // this.setState({ disabled: true });
  }

  upload(event, configType) {
    console.log('upload configType', configType);
    //this.modal = document.querySelector('#config-file-upload-modal');
    this.modal.open();
  }

  download(event, configType) {
    console.log('download configType', configType);
  }

  onModalCreate(modal) {
    console.log('onModalCreate.....', modal); 
    this.modal = modal;
  }

  // uploadAll() {
  //   console.log('uploadAll clicked.......');
  // }
  
  // downloadAll() {
  //   console.log('downloadAll clicked.......');
  // }

  /**
   * Once a component has been inserted into the DOM, init the slider.
   */
  componentDidMount() {
    console.log('props in componentDidMount', this.props);
  }

  /**
   * When a component is going to be removed, kill the table.
   */
  componentWillUnmount() {
    ReactDOM.unmountComponentAtNode(this.node);
  }

  /**
   * Update the ConfigMigrationComponent with new properties.
   * @param  {Object} props
   */
  componentWillReceiveProps(props) {
    console.log('props', props);
  }
}

class ConfigMigrationRowComponent extends React.Component {
  render() {
    return  <tr>
              <td>{this.props.configType}</td>
              <td>
                <button type="button" id="download-button1" name="download-button1"  className="eto-btn eto-btn--link " disabled={this.props.disabled}
                        onClick={(e)=>this.download(e, this.props.configType)}>
                  <i className="md-icon margin-right-xs-1">file_download</i>
                  Download
                </button>                     
              </td>              
              <td>
                <button type="button" id="upload-button1" name="upload-button1" className="eto-btn eto-btn--link" disabled={this.props.disabled}
                        onClick={(e)=>this.upload(e, this.props.configType)}>
                  <i className="md-icon margin-right-xs-1">file_upload</i>
                  Upload
                </button>
              </td>
            </tr>;
  }

  upload(event, configType) {
    console.log('upload configType', configType);
    this.props.disableAll();
  }

  download(event, configType) {
    console.log('download configType', configType);
    this.props.disableAll();
  }

  uploadAll() {
    console.log('uploadAll clicked.......');
  }
  
  downloadAll() {
    console.log('downloadAll clicked.......');
  }

  /**
   * Once a component has been inserted into the DOM, init the slider.
   */
  componentDidMount() {
    console.log('props in componentDidMount', this.props);
  }

  /**
   * When a component is going to be removed, kill the table.
   */
  componentWillUnmount() {
    ReactDOM.unmountComponentAtNode(this.node);
  }

  /**
   * Update the ConfigMigrationRowComponent with new properties.
   * @param  {Object} props
   */
  componentWillReceiveProps(props) {
    console.log('props', props);
  }
}

class ConfigFileUploadModalComponent extends React.Component {
  render() {
    return  <div className="eto-modal" id="config-file-upload-modal">
              <div className="eto-modal__content col-xs-12 col-sm-10 col-lg-8 col-xl-6">
                <header className="eto-modal__header">
                  <h1>Hot New Modal</h1>
                  <button className="eto-modal__close" data-modal-close></button>
                </header>
                <section className="eto-modal__body">
                  <p>
                    Put a Form here which will have the FileUpload component in it.
                    Lorem ipsum Excepteur deserunt proident reprehenderit aute aliqua consequat esse nisi consequat enim sint reprehenderit reprehenderit esse occaecat aliqua ad nulla exercitation incididunt laboris magna Ut laboris exercitation veniam irure nostrud anim magna proident esse in incididunt minim ut ex commodo enim dolor consequat officia.
                  </p>
                </section>
                <footer className="eto-modal__footer">
                  <button className="eto-btn" data-modal-close>Close</button>
                  <button className="eto-btn eto-btn--primary" data-modal-close>Save</button>  
                </footer>
              </div>
            </div>
  }

  /**
   * Once a component has been inserted into the DOM, init the modal.
   */
  componentDidMount() {
    this.node = ReactDOM.findDOMNode(this);
    this.modal = new Modal({ el: this.node });
    // TODO: Determine if this is the proper way to do this.  I feel dirty.
    console.log('modal was created', this.modal);
    console.log(this.props);
    this.props.onCreate(this.modal);
  }
  
  /**
   * When a component is going to be removed, kill the modal.
   */
  componentWillUnmount() {
    ReactDOM.unmountComponentAtNode(this.node);
    this.modal.remove();
    delete this.modal;
  }
  
}

class ConfigFileUploadComponent extends React.Component {
  render() {

  }
}

export default ConfigMigrationComponent;
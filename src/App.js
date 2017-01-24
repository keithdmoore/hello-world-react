import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { MessageBlock } from 'e2open-design-system';
import ChangeStatusModal from './ChangeStatusModal.js';
// import SliderComponent from './SliderComponent.js';
// import TableComponent from './TableComponent.js';
// import ConfigMigrationComponent from './ConfigMigrationComponent.js';
// import ConfigMigrationFileUploadComponent from './ConfigMigrationFileUploadComponent.js';
import Toaster from './Toaster.js';
class App extends Component {
  constructor(props) {
    super(props);
    this.onToasterCreate = this.onToasterCreate.bind(this);
    this.toastIt = this.toastIt.bind(this);
    this.onCreateModal = this.onCreateModal.bind(this);
    this.openModal = this.openModal.bind(this);
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div>
          <Toaster onCreate={this.onToasterCreate} />
          <button onClick={this.toastIt}>Toast It!</button>
          <button onClick={this.openModal}>Open Modal</button>
          <ChangeStatusModal onCreate={this.onCreateModal}></ChangeStatusModal>        
        </div>
      </div>
    );
  }

  onToasterCreate(toaster) {
    this.toaster = toaster;
  }

  onCreateModal(modal) {
    this.modal = modal;
  }

  openModal() {
    this.modal.open();
  }

  toastIt() {
    const messageBlock = new MessageBlock({
			  messageType: 'success',
			  messageContent: 'Upload process completed successfully',
			  permanent: false
		});
    
   // this.node.appendChild(messageBlock.el);
   // this.node.el = <div></div>;
    console.log('messageBlock.el', messageBlock.el);
	  this.toaster.addToast(messageBlock);
    // this.toaster.addMessage(messageBlock);
    console.log('this.toaster.el', this.toaster.el);
  }

  /**
   *           <ConfigMigrationFileUploadComponent />
          <ConfigMigrationComponent configTypes={configTypes}/>

       <SelectInputComponent></SelectInputComponent>;
        <button type="button" id="upload-button" name="upload-button" className="eto-btn">Upload</button>
        <button type="button" id="download-button" name="download-button"  className="eto-btn eto-btn--primary">Download</button>
   
   */
  //     <ConfigMigrationComponent></ConfigMigrationComponent>
  //    <SliderComponent></SliderComponent>
  //    <TableComponent></TableComponent>
}

export default App;

import React from 'react';
import ReactDOM from 'react-dom';
import { FileUpload } from 'e2open-design-system';

class ConfigMigrationFileUploadComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
   return <div className="eto-upload">
   <form name="uploadForm" method="POST"  action="configMigrationUpload.do" encType="multipart/form-data">
   <label className="eto-upload__dropzone">
    <span className="eto-upload__icon">
      <span className="md-icon">cloud_upload</span>
    </span>
    <span className="eto-upload__text">Drag and drop files here to upload.</span>
    <span className="eto-upload__manual">
      <span className="eto-btn" tabIndex="0">Or Select Files</span>
        <input type="file" name="test-name" />
    </span>
  </label>

  <div className="eto-upload__loading">
    <span className="eto-upload__text">
      <span className="eto-upload__filenames"></span>
      <span className="eto-btn--link eto-btn--icon-only cancel">
        <span className="md-icon">close</span>
      </span>
    </span>

    
    <span className="eto-upload__determinate">
      <span className="eto-upload__progress-bar">
        <span className="eto-upload__progress-bar__fill" style={{width: 0 + '%'}}></span>
      </span>
      <span className="eto-upload__progress-label">0%</span>
    </span>

    
    <span className="eto-upload__indeterminate">
    </span>
  </div>

  <ul className="eto-upload__files"></ul>
  <button type="submit">Upload</button>
</form>
</div>;
  }
  
  /**
   * Once a component has been inserted into the DOM, init the slider.
   */
  componentDidMount() {
    console.log('props in componentDidMount', this.props);
    this.node = ReactDOM.findDOMNode(this);
    console.log('this.node', this.node);
    this.fileUpload = new FileUpload({
      el: this.node
    });
  }

  /**
   * When a component is going to be removed, kill the table.
   */
  componentWillUnmount() {
    ReactDOM.unmountComponentAtNode(this.node);
    this.fileUpload.remove();
    delete this.fileUpload;
  }

  /**
   * Update the ConfigMigrationComponent with new properties.
   * @param  {Object} props
   */
  componentWillReceiveProps(props) {
    console.log('props', props);
  }
}

export default ConfigMigrationFileUploadComponent;
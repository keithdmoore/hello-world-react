import React from 'react';
import ReactDOM from 'react-dom';
import { Combobox } from 'e2open-design-system';
/**
 * Wrapper component of eto.Combobox Please look at example syntax below
 * Properties 
 * onChange function 
 * selectOptions Array    
 * pleaseSelectDesc String
 */
class ComboBoxComponent extends React.Component {
	
	constructor(props) {
		super(props);
		this.myArr = [];
		if(this.props.pleaseSelectDesc!==''){
		  this.myArr.push(<option key='pleaseSelect' value='pleaseSelect'>{this.props.pleaseSelectDesc}</option>);
		} 
		for (var i=0;i<this.props.selectOptions.length;i++) {
			var myOption = this.props.selectOptions[i];
			if(myOption.value!==-1){
			  this.myArr.push(<option key={myOption.value} value={myOption.value}>{myOption.description}</option>);
			}  
			  
		}
	}
	
	/**
	 * Just Render Combobox select. Introduce value field in select in future as per https://facebook.github.io/react/docs/forms.html
	 */
	render() {				 
				
		return (			     
				<label className="eto-combobox">
				  <span className="eto-combobox__field-container" aria-hidden="true">
				    <input className="eto-combobox__field" type="text" autoComplete="off" />
				    <span className="eto-combobox__btn">
				      <button type="button" className="eto-btn"><span className="md-icon">expand_more</span></button>
				    </span>
				  </span>
				  <div className="eto-results"></div>
				  <select name={this.props.name}>
				        {this.myArr}
				  </select>
				</label>
		);
	}
	
	/**
	 * Once a component has been inserted in DOM, initalize the ComboBox
	 */
	componentDidMount() {		
		this.node = ReactDOM.findDOMNode(this);
		this.comboBox = new Combobox(Object.assign({ el: this.node }, this.props));	
		this.renderComboBoxContent();
		//Handle events here
		this.comboBox.on('change:value', (newValue, oldValue, propertyName, instance) => {
            this.props.onChange(newValue);
        });
	}		
	
	/**
	 * When a component is going to be removed, remove and delete combobox 
	 */
	componentWillUnmount() {
        ReactDOM.unmountComponentAtNode(this.node);
		this.comboBox.remove();
		delete this.comboBox;
	}
	
	/**
	 * Override Upload the combobox with new properties
	 */
	componentWillReceiveProps(props) {
		this.comboBox.setValue(props.value);
		this.renderComboBoxContent();
	}
	
	/**
	* Render combobox content. This is to be implemented
	*/
	renderComboBoxContent() {
		//This is todo when needed		
	}
	
	
}

export default ComboBoxComponent;
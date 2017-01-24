import React from 'react';
import ReactDOM from 'react-dom';
import { Table } from 'e2open-design-system';

class TableComponent extends React.Component {
  render() {
    return <table className="eto-table">
    <thead>
      <tr>  
        <th>  
            <label className="eto-checkbox">
              <input className="eto-checkbox__field eto-all-rows-indicator" type="checkbox"/>
              <span className="eto-checkbox__box"></span>
            </label>
        </th>  
        <th>Name</th>
        <th>Date</th>
        <th>Number</th>
        <th>Money</th>
      </tr>
    </thead>
    <tbody></tbody>
    </table>;
  }
  /**
<table class="eto-table">
  <thead>
    <tr>
      
        <th>
          
            <label class="eto-checkbox">
              <input class="eto-checkbox__field eto-all-rows-indicator" type="checkbox">
              <span class="eto-checkbox__box"></span>
            </label>
          
        </th>
      
      
        <th>Name</th>
      
        <th>Date</th>
      
        <th>Number</th>
      
        <th>Money</th>
      
    </tr>
  </thead>
  <tbody>
    
      <tr class="active">
        
          <td>
            <label class="eto-checkbox">
                <input class="eto-checkbox__field eto-row-indicator" type="checkbox" name="table-checkbox" value="1">
                <span class="eto-checkbox__box"></span>
              </label>
            
          </td>
        
        
          <td class="">Burton Guster</td>
        
          <td class="">8/03/1954</td>
        
          <td class="text-align-right">300</td>
        
          <td class="">$4,000.00</td>
        
      </tr>
    
      <tr class="active">
        
          <td>
            <label class="eto-checkbox">
                <input class="eto-checkbox__field eto-row-indicator" type="checkbox" name="table-checkbox" value="2">
                <span class="eto-checkbox__box"></span>
              </label>
            
          </td>
        
        
          <td class="">Burton Guster</td>
        
          <td class="">8/03/1954</td>
        
          <td class="text-align-right">300</td>
        
          <td class="">$4,000.00</td>
        
      </tr>
    
      <tr class="active">
        
          <td>
            <label class="eto-checkbox">
                <input class="eto-checkbox__field eto-row-indicator" type="checkbox" name="table-checkbox" value="3">
                <span class="eto-checkbox__box"></span>
              </label>
            
          </td>
        
        
          <td class="">Burton Guster</td>
        
          <td class="">8/03/1954</td>
        
          <td class="text-align-right">300</td>
        
          <td class="">$4,000.00</td>
        
      </tr>
    
      <tr class="active">
        
          <td>
            <label class="eto-checkbox">
                <input class="eto-checkbox__field eto-row-indicator" type="checkbox" name="table-checkbox" value="4">
                <span class="eto-checkbox__box"></span>
              </label>
            
          </td>
        
        
          <td class="">Burton Guster</td>
        
          <td class="">8/03/1954</td>
        
          <td class="text-align-right">300</td>
        
          <td class="">$4,000.00</td>
        
      </tr>
    
      <tr class="active">
        
          <td>
            <label class="eto-checkbox">
                <input class="eto-checkbox__field eto-row-indicator" type="checkbox" name="table-checkbox" value="5">
                <span class="eto-checkbox__box"></span>
              </label>
            
          </td>
        
        
          <td class="">Burton Guster</td>
        
          <td class="">8/03/1954</td>
        
          <td class="text-align-right">300</td>
        
          <td class="">$4,000.00</td>
        
      </tr>
    
  </tbody>
</table>
   */

  /**
   * Once a component has been inserted into the DOM, init the slider.
   */
  componentDidMount() {
    this.node = ReactDOM.findDOMNode(this);
    this.table = new Table({ el: this.node });
  }

  /**
   * When a component is going to be removed, kill the table.
   */
  componentWillUnmount() {
    ReactDOM.unmountComponentAtNode(this.node);
    this.table.remove();
    delete this.table;
  }

  /**
   * Update the slider with new properties.
   * @param  {Object} props
   */
  componentWillReceiveProps(props) {
    //this.slider.setValue(props.value);
  }
}

export default TableComponent;

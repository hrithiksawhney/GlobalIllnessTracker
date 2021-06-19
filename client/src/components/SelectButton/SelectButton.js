import React from 'react';
import './SelectButton.css';

function SelectButton(props) {
  if(props.illness) {
    if(props.illness === 'covid_19') {
      return (
        <div className="selectButton selectFirst isSelected">
          COVID-19
        </div>
      )
    } else if(props.illness === 'hiv_aids') {
      return (
        <div className="selectButton">
          HIV/AIDS
        </div>
      )
    } else if(props.illness === 'hepatitis_all') {
      return (
        <div className="selectDropdown">
          <span className="selectDropdown_title">Hepatitis</span>
          <div className="selectDropdown_items">
            <span className="selectDropdown_item">...</span>
          </div>
        </div>
      )
    } else if(props.illness === 'flu') {
      return (
        <div className="selectButton">
          Flu
        </div>
      )
    } else if(props.illness === 'more') {
      return (
        <div className="selectDropdown selectLast">
          <span className="selectDropdown_title">More</span>
          <div className="selectDropdown_items">
            <span className="selectDropdown_item">...</span>
          </div>
        </div>
      )
    }
  } else {
    return (
      <div className="selectButton"></div>
    );
  }
}

export default SelectButton;
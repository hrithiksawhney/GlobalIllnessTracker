import React from 'react';
import './Selection.css';

import SelectButton from '../SelectButton/SelectButton.js';


function Selection(props) {
  let data = props.data;
  let setData = props.setState;
  let info = { data, setData };
  return (
    <div className="selection">
      <SelectButton illness="covid_19" states={info} />
      <SelectButton illness="hiv_aids" states={info} />
      <SelectButton illness="hepatitis_all" states={info} />
      <SelectButton illness="flu" states={info} />
      <SelectButton illness="more" states={info} />
    </div>
  )
}

export default Selection;
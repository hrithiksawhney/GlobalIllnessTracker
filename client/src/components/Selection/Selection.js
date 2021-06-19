import React from 'react';
import './Selection.css';

import SelectButton from '../SelectButton/SelectButton.js';

function Selection() {
  return (
    <div class="container">
      <div className="selection">
        <SelectButton illness="covid_19" />
        <SelectButton illness="hiv_aids" />
        <SelectButton illness="hepatitis_all" />
        <SelectButton illness="flu" />
        <SelectButton illness="more" />
      </div>
    </div>
  )
}

export default Selection;
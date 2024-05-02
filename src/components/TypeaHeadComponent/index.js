
import React from 'react';
import { Typeahead } from 'react-bootstrap-typeahead';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-typeahead/css/Typeahead.css';

const TypeaHeadComponent = ({options, onSelect}) => {

  return(
    <Typeahead 
    options={options}
    placeholder = 'Type something here.....'
    onChange = {selected => {
      if (selected && selected.length > 0) {
        onSelect(selected[0]);
      }
    }} />
  )

}

export default TypeaHeadComponent
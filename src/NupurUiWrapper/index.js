import React from 'react';
import PropTypes from 'prop-types';

const NupurUiWrapper = props => {

  return (
    <div className="relative">
      {
        props.children
      }
      <div id="portal" className="relative" style={{zIndex: 20}}/>
    </div>
  );
};

NupurUiWrapper.propTypes = {
  children: PropTypes.any.isRequired
};

export default NupurUiWrapper;

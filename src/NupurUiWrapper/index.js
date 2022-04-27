import React, {useEffect} from 'react';
import PropTypes from 'prop-types';

const NupurUiWrapper = props => {

  return (
    <div>
      {
        props.children
      }
      <div id="portal"></div>
    </div>
  );
};

NupurUiWrapper.propTypes = {
  children: PropTypes.any.isRequired
};

export default NupurUiWrapper;

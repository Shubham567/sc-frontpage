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
  children: PropTypes.oneOf([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]).isRequired
};

export default NupurUiWrapper;

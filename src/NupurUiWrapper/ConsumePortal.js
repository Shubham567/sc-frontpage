import React from 'react';
import PropTypes from 'prop-types';
import * as ReactDOM from "react-dom";

const ConsumePortal = props => {
  return (
    ReactDOM.createPortal(props.children,document.getElementById("portal"))
  )
};

ConsumePortal.propTypes = {
  children: PropTypes.oneOf([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]).isRequired
};

export default ConsumePortal;

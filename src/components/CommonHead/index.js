import React from 'react';
import PropTypes from 'prop-types';
import appDetails from "../../../config/appDetails";
import Head from "next/head";

const CommonHead = React.memo( ({title, children,...props}) => {
  return (
    <Head>
      <title>{title || appDetails.title}</title>
      {
        children
      }
    </Head>
  );
});

CommonHead.displayName = "CommonHead";

CommonHead.propTypes = {
  title : PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

export default CommonHead;

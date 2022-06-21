import React from 'react';
import PropTypes from 'prop-types';
import appDetails from "../../../config/appDetails";
import Head from "next/head";

const CommonHead = React.memo( ({title,metaDescription, children,...props}) => {
  return (
    <Head>
      <title>{title || appDetails.title}</title>
      <meta name="description" content={metaDescription || appDetails.metaDescription} />
      {
        children
      }
    </Head>
  );
});

CommonHead.displayName = "CommonHead";

CommonHead.propTypes = {
  title : PropTypes.string.isRequired,
  metaDescription : PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

export default CommonHead;

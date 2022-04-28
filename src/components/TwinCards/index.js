import React from 'react';
import PropTypes from 'prop-types';
import Card from "../Card";
import clsx from "clsx";

const TwinCards = ({upperCardContent,lowerCardContent,...props}) => {
  return (
    <Card className={clsx("-z-10 relative")} style={{minWidth: 450, minHeight: 400}}>
      {upperCardContent}
      <Card className={clsx("absolute w-2/3 h-2/3 top-1/2 left-1/2")} >
        {lowerCardContent}
      </Card>
    </Card>
  );
};

TwinCards.propTypes = {
  upperCardContent: PropTypes.any,
  lowerCardContent: PropTypes.any,
};

export default TwinCards;

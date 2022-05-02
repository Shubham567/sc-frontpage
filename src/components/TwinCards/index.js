import React from 'react';
import PropTypes from 'prop-types';
import Card from "../Card";
import clsx from "clsx";

const TwinCards = ({upperCardContent,lowerCardContent,reverse,...props}) => {
  return (
    <Card className={clsx("-z-10 relative")} style={{minWidth: 450, minHeight: 400}}>
      {upperCardContent}
      <Card className={clsx("absolute w-2/3 h-2/3 top-1/2", {"left-1/2" : !reverse, "right-1/2" : reverse})} >
        {lowerCardContent}
      </Card>
    </Card>
  );
};

TwinCards.propTypes = {
  upperCardContent: PropTypes.any,
  lowerCardContent: PropTypes.any,
  reverse: PropTypes.bool
};

export default TwinCards;

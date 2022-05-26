import React from 'react';
import ActionCard from "./ActionCard";
import EffectAppearOnView from "../../Effects/EffectAppearOnView";
import PropTypes from "prop-types";

const Actions = ({actionData}) => {
  return (
    <div style={{borderLeft: "36px solid #F28705", borderRight: "36px solid #F28705"}} className="pt-24 pb-24 border-l-8 border-l-yellow">
   <EffectAppearOnView>
     <div className="pt-16 flex justify-evenly items-center flex-col xl:flex-row xl:pl-16 xl:pr-16 pb-16 bg-orange-light">
       {
         actionData.map((item) => (<ActionCard key={item.id} {...item} />))
       }
     </div>
   </EffectAppearOnView>
    </div>
  );
};

export default Actions;

Actions.prototype = {
  actionData: PropTypes.arrayOf({
    id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    heading: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    buttonLabel: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    actionHandler: PropTypes.func
  })
}


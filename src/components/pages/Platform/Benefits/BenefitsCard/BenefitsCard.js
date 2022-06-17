import React from 'react';
import PropTypes from "prop-types";
import EffectAppearOnView from "../../../../Effects/EffectAppearOnView";

const BenefitsCard = ({image, description}) => {
  return (
    <EffectAppearOnView>
      <div className="m-12 w-64">
        <div className="flex justify-center items-center">
          {
            image && image
          }
        </div>
        <div className="mt-8">
          <p className="text-yellow text-justify">
            {
              description && description
            }
          </p>
        </div>
      </div>
    </EffectAppearOnView>
  );
};

export default BenefitsCard;

BenefitsCard.prototype = {
  image: PropTypes.node,
  description: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
}

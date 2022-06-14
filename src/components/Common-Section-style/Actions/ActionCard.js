import React from 'react';
import Button from "../../Button";
import PropTypes from "prop-types";
import EffectAppearOnView from "../../Effects/EffectAppearOnView";
import {useRouter} from "next/router";

const ActionCard = ({heading, buttonLabel}) => {
  const router = useRouter();

  const actionHandler = () => {
    router.push('/subscribe/start-trial').then();
  }

  return (
      <div className="m-4 w-full sm:w-1/2 p-4">
        <div>
          <h1 className="font-normal text-center text-4xl text-dark">
            {
              heading && heading
            }
          </h1>
          <div className="mt-8 flex justify-center items-center">
            <Button onClick={actionHandler} rounded className="bg-secondary hover:bg-orange ease-in-out duration-300 text-xl font-medium pl-8 pr-8 pt-2 pb-2 rounded-full text-white">{buttonLabel || "Button"}</Button>
          </div>
        </div>
      </div>
  );
};

export default ActionCard;

ActionCard.propTypes = {
  heading: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  buttonLabel: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
}

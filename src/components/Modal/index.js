import React from 'react';
import PropTypes from 'prop-types';
import clsx from "clsx";
import BackDrop from "../../BackDrop";
import Card from "../Card";

import {IoClose} from "react-icons/io5";
import useEscapeKey from "../../hooks/useEscapeKey";
import {useClickOutside, useFocusTrap} from "@mantine/hooks";

const Modal = ({children,title,actions,onClose,open,adjustable,className}) => {

  useEscapeKey(onClose);
  const focusTrapRef = useFocusTrap(open);

  const cardRef = useClickOutside(() => onClose?.())

  if(open) {
    return (
      <BackDrop>
        <Card role="dialog" aria-modal={true} ref={cardRef} className={clsx(className, "relative")} style={adjustable ? {minHeight: "10%"} : {minWidth: "66%", minHeight: "33%",}}>
          <div ref={focusTrapRef} className="flex flex-col w-full gap-6">
            <div className="flex w-full justify-between">
              <div className="flex font-semibold text-sm" aria-labelledby={title}>{title}</div>
              {onClose && <div className="flex justify-self-end">
                <button className="rounded" onClick={onClose}>
                  <IoClose/>
                </button>
              </div>}
            </div>
            <div className="flex justify-center">
              {
                children
              }
            </div>
            <div className="flex justify-end">
              {actions}
            </div>
          </div>
        </Card>
      </BackDrop>
    )
  }
  else {
    return  <></>
  }
};

Modal.propTypes = {
  title: PropTypes.string,
  children: PropTypes.any,
  actions: PropTypes.any,
  open: PropTypes.bool,
  onClose: PropTypes.func,
  className: PropTypes.string,

};

export default Modal;

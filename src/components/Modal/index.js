import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import clsx from "clsx";
import Popover from "../../Popover";
import Card from "../Card";

import { IoClose } from "react-icons/io5";
import useEscapeKey from "../../hooks/useEscapeKey";
import {useClickOutside} from "@mantine/hooks";

const Modal = ({children,title,actions,onClose,open,className}) => {

  useEscapeKey(onClose);

  const cardRef = useClickOutside(() => onClose?.())

  if(open) {
    return (
      <Popover>
        <Card role="dialog" aria-modal={true} ref={cardRef} className={clsx(className, "relative")} style={{minWidth: "66%", minHeight: "33%",}}>
          <div className="flex flex-col w-full gap-6">
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
      </Popover>
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

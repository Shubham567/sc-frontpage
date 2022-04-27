import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import clsx from "clsx";
import Popover from "../../Popover";
import Card from "../Card";

import { IoClose } from "react-icons/io5";
import useEscapeKey from "../../hooks/useEscapeKey";

const Modal = ({children,title,actions,onClose,open,className}) => {

  useEscapeKey(onClose);

  if(open) {
    return (
      <Popover>
        <Card className={clsx(className, "relative")} style={{minWidth: "66%", minHeight: "33%",}}>
          <div className="flex flex-col w-full gap-6">
            <div className="flex w-full justify-between">
              <div className="flex font-semibold text-sm">{title}</div>
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

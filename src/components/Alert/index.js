import React from 'react';
import PropTypes from 'prop-types';
import clsx from "clsx";
import BackDrop from "../../BackDrop";
import Card from "../Card";

import { IoClose } from "react-icons/io5";
import useEscapeKey from "../../hooks/useEscapeKey";
import {useClickOutside} from "@mantine/hooks";
import Button from "../Button";

const Alert = ({children,title,onClose,open,className, onAccept, onReject, acceptButtonText, rejectButtonText, acceptButtonProps, rejectButtonProps}) => {

  useEscapeKey(onClose);


  const cardRef = useClickOutside(() => onClose?.())

  if(open) {
    return (
      <BackDrop>
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
            <div className="flex justify-end gap-2">
              {
                onReject && <Button outlined onClick={onReject} {...rejectButtonProps}>
                  {rejectButtonText || "Cancel"}
                </Button>
              }
              {
                onAccept && <Button onClick={onAccept} {...acceptButtonProps}>
                  {acceptButtonText || "Ok"}
                </Button>
              }
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

Alert.propTypes = {
  title: PropTypes.string,
  children: PropTypes.any,
  open: PropTypes.bool,
  onClose: PropTypes.func,
  className: PropTypes.string,
  onAccept: PropTypes.func,
  onReject: PropTypes.func,
  acceptButtonText: PropTypes.string,
  rejectButtonText: PropTypes.string,
  acceptButtonProps : PropTypes.object,
  rejectButtonProps : PropTypes.object,
};

export default Alert;

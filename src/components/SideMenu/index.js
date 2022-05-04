import React from 'react';
import PropTypes from 'prop-types';
import PopOver from "../../Popover";
import {useClickOutside} from "@mantine/hooks";
import {AnimatePresence, motion} from "framer-motion";
import clsx from "clsx";

const menuWidth = 220;
const SideMenu = ({x = "left",open,onClose, children,...props}) => {
  const outRef = useClickOutside(() => {
    onClose?.()
  });


  return (
    <AnimatePresence>
      { open &&
        <PopOver x="left" y="top">
        <motion.div ref={outRef} className="bg-white h-screen shadow-xl shadow-primary"
                    style={{width: menuWidth}}
                    initial={{x: -menuWidth}}
                    animate={{x: 0}}
                    exit={{
                      x: -menuWidth, transition: {
                        duration: 0.1
                      }
                    }}
        >
          {
            children
          }
        </motion.div>
      </PopOver>}
    </AnimatePresence>
  );
};

SideMenu.propTypes = {

};

export default SideMenu;

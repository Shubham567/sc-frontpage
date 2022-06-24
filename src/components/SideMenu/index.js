import React from 'react';
import BackDrop from "../../BackDrop";
import {useClickOutside} from "@mantine/hooks";
import {AnimatePresence, motion} from "framer-motion";

const menuWidth = 260;
const SideMenu = ({x = "left",open,onClose, children,...props}) => {
  const outRef = useClickOutside(() => {
    onClose?.()
  });


  return (
    <AnimatePresence>
      { open &&
        <BackDrop x="left" y="top">
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
      </BackDrop>}
    </AnimatePresence>
  );
};

SideMenu.propTypes = {

};

export default SideMenu;

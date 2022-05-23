import React from 'react';
import PropTypes from 'prop-types';
import {motion} from "framer-motion";

const EffectAppearOnView = ({children,...props}) => {

  return (
    <motion.div initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.3 }}
                variants={{
                  visible: { opacity: 1, scale: 1, y: 0 },
                  hidden: { opacity: 0, scale: 0 , y: 50}
                }} {...props}>
      {children}
    </motion.div>
  );
};

EffectAppearOnView.propTypes = {

};

export default EffectAppearOnView;

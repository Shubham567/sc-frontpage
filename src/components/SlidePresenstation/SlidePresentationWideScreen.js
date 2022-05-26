import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Card from "../Card";
import clsx from "clsx";
import {AnimatePresence, motion} from "framer-motion";

const SlidePresentationWideScreen = ({data,...props}) => {

  const [currentActiveIndex,setCurrentActiveIndex] = useState(0);

  const toggleCurrentActiveIndexTo = (index) => () => {
    setCurrentActiveIndex(index);
  }


  return (
    <div className="flex w-full justify-center items-center gap-6 lg:gap-24" >
      <ul role="presentation" className="flex flex-col gap-8">
        {/* Controls */}
        {
          data.map((dataPoint, index) => {
            const isActiveItem = currentActiveIndex === index;
            return <li key={dataPoint.title} className="">
              <div className="flex items-center gap-6"
                   onClick={toggleCurrentActiveIndexTo(index)} role="button"
                   aria-label={dataPoint.title} aria-pressed={isActiveItem}>
                <div className="flex text-secondary text-2xl">
                  {dataPoint.icon}
                </div>
                <div className="flex" >
                  <h4 className={clsx("tracking-wider text-lg",
                    {
                      "font-semibold text-dark " : isActiveItem,
                      "text-gray-dark" : !isActiveItem
                    })}>
                    {dataPoint.title}
                  </h4>
                </div>
              </div>
            </li>
          })
        }
      </ul>
      <div className="flex max-w-lg">
        <Card fluid className="flex flex-col gap-4 px-6 py-6">
          {/*  Content Viewer section */}
          <AnimatePresence exitBeforeEnter>
            { data[currentActiveIndex].image &&
              <motion.div className=""
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: true }}
                          transition={{ duration: 0.3 }}
                          variants={{
                            visible: { opacity: 1, scale: 1, y: 0 },
                            hidden: { opacity: 0, scale: 0 , y: 20}
                          }}>
                {
                  data[currentActiveIndex].image
                }
              </motion.div>
            }
            <motion.div className=""
                        key={data[currentActiveIndex].title}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ duration: 0.3 }}
                        variants={{
                          visible: { opacity: 1, scale: 1, y: 0 },
                          hidden: { opacity: 0, scale: 0 , y: 20}}} >
              {
                data[currentActiveIndex].content
              }
            </motion.div>
          </AnimatePresence>
        </Card>
      </div>
    </div>
  );
};

SlidePresentationWideScreen.propTypes = {

};

export default SlidePresentationWideScreen;

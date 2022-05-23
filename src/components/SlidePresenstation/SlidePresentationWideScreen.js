import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Card from "../Card";
import clsx from "clsx";

const SlidePresentationWideScreen = ({data,...props}) => {

  const [currentActiveIndex,setCurrentActiveIndex] = useState(0);

  const toggleCurrentActiveIndexTo = (index) => () => {
    setCurrentActiveIndex(index);
  }


  return (
    <div className="flex w-full justify-center items-center gap-6" >
      <ul role="presentation" className="flex flex-col gap-8">
          {/* Controls */}
        {
          data.map((dataPoint, index) => {
            const isActiveItem = currentActiveIndex === index;
            return <li key={dataPoint.title} className="">
              <div className="flex items-center gap-6"
                   onClick={toggleCurrentActiveIndexTo(index)} role="button"
                   aria-label={dataPoint.title} aria-pressed={isActiveItem}>
                <div className="flex text-secondary">
                  {dataPoint.icon}
                </div>
                <div className="flex" >
                  <h4 className={clsx("tracking-wider",
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
        <Card fluid className="flex flex-col gap-4 px-10 py-6">
          {/*  Content Viewer section */}
          { data[currentActiveIndex].image &&
              <div className="">
              {
                data[currentActiveIndex].image
              }
            </div>
          }
          <div className="">
            {
              data[currentActiveIndex].content
            }
          </div>
        </Card>
      </div>
    </div>
  );
};

SlidePresentationWideScreen.propTypes = {

};

export default SlidePresentationWideScreen;

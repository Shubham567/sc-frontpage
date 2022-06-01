import React, {useState} from 'react';
import PropTypes from 'prop-types';
import clsx from "clsx";

const AlternateSlidePresentationForHome = ({data,...props}) => {
  const [activeItem,setActiveItem] = useState(0);
  const dumpActiveItem = itemIndex => () => setActiveItem(itemIndex);

  return (
    <div>
      <div role="presentation" className="flex gap-4 lg:gap-40 items-center">

        <div className="flex max-w-md">
          <div className="flex flex-col w-full gap-6">
            {
              data.map((di, i) => {
                const isActiveItem = i === activeItem;
               return <div role="button" onClick={dumpActiveItem(i)} key={di.title} className={clsx("text-primary shadow p-4 border-primary border rounded-lg transition-all",
                 {
                   "bg-primary text-white": isActiveItem,
                   "bg-white text-primary hover:bg-primary-light hover:border-primary-light": !isActiveItem
                 })}>
                  {di.title}
                </div>
              })
            }
          </div>
        </div>

        <div className="flex max-w-md">
          {
            data[activeItem].component
          }
        </div>
      </div>
    </div>
  );
};

AlternateSlidePresentationForHome.propTypes = {

};

export default AlternateSlidePresentationForHome;

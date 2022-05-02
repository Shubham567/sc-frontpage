import React from 'react';
import PropTypes from 'prop-types';
import clsx from "clsx";



const OnSolidBg = ({contents,...props}) => {
  return (
    <div className="flex flex-col md:flex-row lg:flex-row xl:flex-row items-center bg-primary justify-center my-8" style={{minHeight: 200}}>
      {
        contents.map((content, i) => <article key={content.title} className={clsx("flex flex-col px-5 py-8 text-white gap-3 self-stretch md:w-1/3 lg:w-1/3 xl:w-1/3",
          {"border-y-2 sm:border-y-2 md:border-y-0 md:border-x-2 lg:border-y-0 xl:border-y-0 lg:border-x-2 xl:border-x-2 border-gray-light" : i&1})}>
        <h3 className="text-2xl font-semibold tracking-wider">
          {content.title}
        </h3>
          <div className="font-light leading-6">
            <p>
              {
                content.content
              }
            </p>
          </div>
      </article>)}
    </div>
  );
};

OnSolidBg.propTypes = {

};

export default OnSolidBg;

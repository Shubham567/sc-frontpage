import React from 'react';
import PropTypes from 'prop-types';
import clsx from "clsx";

const contents = [
  // Max 4 items
  {title: "Something was good", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."},
  {title: "Something is good", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit."},
  {title: "Something will be good", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."},
]

const OnSolidBg = props => {
  return (
    <div className="flex items-center bg-primary justify-center py-8 my-8" style={{minHeight: 200}}>
      {
        contents.map((content, i) => <article key={content.title} className={clsx("flex flex-col p-5 text-white gap-5 self-stretch w-1/3",
          {"border-x-2 border-gray-light" : i&1})}>
        <h3 className="text-2xl font-semibold tracking-wider">
          {content.title}
        </h3>
          <div className="text-lg font-light leading-8">
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

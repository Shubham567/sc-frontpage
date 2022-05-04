import React from 'react';
import PropTypes from 'prop-types';
import clsx from "clsx";
import Card from "../Card";

const sampleData = [
  {keyName: "", heading: "Hello this is same", content : <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi aut dolores nesciunt nulla optio. Aliquam beatae consequuntur doloremque eligendi enim excepturi exercitationem expedita, explicabo in molestiae, odit quas temporibus, voluptatem</div>},
  {keyName: "", heading: "Hello this is samp", content : <div>Welcome</div>},
  {keyName: "", heading: "Hello this is sample", content : <div>Welcome</div>},
]

const ThreeCards = ({data,bgColor,mainTitle,...props}) => {
  return (
    <div className={clsx({"bg-primary": bgColor === "primary", "bg-secondary": bgColor === "secondary"},
      " p-2 py-8 sm:p-8 ")}>
      <div>
        <h2 className={clsx("mb-4 font-semibold text-xl sm:text-3xl",{"text-white": bgColor === "primary" || bgColor === "secondary"})}>
          {mainTitle}
        </h2>
      </div>
      <div className="flex flex-col sm:flex-row gap-6 justify-evenly">
      {
        (data || sampleData).map( d => <Card className="sm:w-1/3 p-6" key={d.keyName || d.heading}>
          <article className="flex flex-col gap-4">
            {d.heading && <h3 className="text-lg text-primary font-semibold">{d.heading}</h3>}
            <div>{d.content}</div>
          </article>
        </Card>)
        }
      </div>
    </div>
  );
};

ThreeCards.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    keyName: PropTypes.string,
    heading: PropTypes.string.isRequired,
    content: PropTypes.any
  })).isRequired,
  bgColor: PropTypes.oneOf(["primary", "secondary", null])

};

export default ThreeCards;

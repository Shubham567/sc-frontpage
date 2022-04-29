import React from 'react';
import PropTypes from 'prop-types';

const data = [
  {
    name: "Campus Recruitment",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, aliquam animi delectus dolores, dolorum eaque eius incidunt ipsam ipsum iste iure nulla obcaecati pariatur perferendis porro quam sit temporibus veritatis.",
  },
  {
    name: "Entrance Exams",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, aliquam animi delectus dolores, dolorum eaque eius incidunt ipsam ipsum iste iure nulla obcaecati pariatur perferendis porro quam sit temporibus veritatis.",
  },
  {
    name: "Learning Assessment",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, aliquam animi delectus dolores, dolorum eaque eius incidunt ipsam ipsum iste iure nulla obcaecati pariatur perferendis porro quam sit temporibus veritatis.",
  },
]

const UseCases = props => {
  return (
    <div className="p-4 my-4 text-dark">
      <div>
        <h2 className=" font-semibold text-3xl text-primary">
          Use Cases
        </h2>
      </div>
      <div className="flex mt-3 gap-4">
        {
          data.map( item => <div key={item.name} className="flex flex-col gap-3">
          <h3 className="text-lg font-semibold text-primary">{item.name}</h3>
          <p className="">
            {item.text}
          </p>
        </div>)}
      </div>
    </div>
  );
};

UseCases.propTypes = {

};

export default UseCases;

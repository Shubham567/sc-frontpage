import React from 'react';
import PropTypes from 'prop-types';
import clsx from "clsx";
import styles from "./CustomerList.module.css";
import Image from "next/image";

const customerListData = [
  {name : "Merck", image : "/images/brands/merck.png", alt : "Merck is our customer"},
  {name : "Merck", image : "/images/brands/merck.png", alt : "Merck is our customer"},
]

const CustomerList = props => {
  return (
    <div className={clsx(styles.customerListContainer,"flex flex-col p-6 mt-8 justify-center items-center gap-4")}>
      <div>
        <h2 className="text-3xl font-semibold text-purple-dark">
        Join the list of our Happy Customers
        </h2>
      </div>
      <div className="flex gap-3">
        {
          customerListData.map(ci => <div  key={ci.name} className="w-4">
            <Image src={ci.image} width={120} height={120} alt={ci.alt} />
          </div>)
          }
      </div>

    </div>
  );
};

CustomerList.propTypes = {

};

export default CustomerList;

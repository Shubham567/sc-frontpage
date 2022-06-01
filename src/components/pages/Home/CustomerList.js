import React from 'react';
import PropTypes from 'prop-types';
import clsx from "clsx";
import styles from "./CustomerList.module.css";
import Image from "next/image";

const customerListData = [
  {name : "Merck", image : "/images/brands/merckLogo.png", alt : "Merck is our customer", height: 60, width : 180},
  {name : "Maruti", image : "/images/brands/marutiLogo.png", alt : "Maruti Suzuki",  height: 70, width : 70},
  {name : "Merck", image : "/images/brands/merckLogo.png", alt : "Merck is our customer", height: 60, width : 180},
  {name : "Maruti", image : "/images/brands/marutiLogo.png", alt : "Maruti Suzuki",  height: 70, width : 70},
]

const CustomerList = props => {
  return (
    <div className={clsx(styles.customerListContainer,"flex flex-col p-6 mt-8 justify-center items-center gap-8")}>
      <h2 className={clsx("mb-12 text-lg text-primary sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-center",styles.mainTextShadow)}>
        Our Happy Customers
      </h2>
      <div className="flex justify-evenly flex-wrap gap-5">
        {
          customerListData.map(ci => <div  key={ci.name} className="p-5" width={ci.width} height={ci.height}>
            <Image src={ci.image} width={ci.width} height={ci.height} style={{zIndex: -1}} alt={ci.alt} />
          </div>)
          }
      </div>

    </div>
  );
};

CustomerList.propTypes = {

};

export default CustomerList;

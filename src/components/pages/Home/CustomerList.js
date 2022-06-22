import React from 'react';
import clsx from "clsx";
import styles from "./CustomerList.module.css";
import Image from "next/image";

const customerListData = [
  {name : "Sunbright Manpower", image : "/images/brands/sun-bright-manpower-logo.png", alt : "Sunbright Manpower", height: 70, width : 150},
  {name : "Maruti", image : "/images/brands/marutiLogo.png", alt : "Maruti Suzuki",  height: 70, width : 70},
  {name : "Merck", image : "/images/brands/merckLogo.png", alt : "Merck is our customer", height: 60, width : 180},
  {name : "Motherhood", image : "/images/brands/motherhood.png", alt : "Motherhood", height: 70, width : 150},
  {name : "PrimeWays", image : "/images/brands/primeways.png", alt : "Primeways", height: 50, width : 170},
]

const CustomerList = props => {
  return (
    <div className={clsx(styles.customerListContainer,"flex flex-col p-6 mt-12 md:mt-6 justify-center items-center gap-8")}>
      <h2 className={clsx("mb-12 text-lg text-primary font-medium text-2xl md:text-3xl lg:text-4xl text-center",styles.mainTextShadow)}>
        Our Happy Customers
      </h2>
      <div className="flex justify-evenly flex-wrap gap-5 items-center">
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

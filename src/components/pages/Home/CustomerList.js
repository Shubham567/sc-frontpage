import React from 'react';
import clsx from "clsx";
import styles from "./CustomerList.module.css";
import Image from "next/image";

const customerListData = [
  {name : "Sunbright Manpower", image : "/images/brands/sun-bright-manpower-logo.png", alt : "Sunbright Manpower", height: 100, width : 300},
  {name : "Motherhood", image : "/images/brands/motherhood.png", alt : "Motherhood", height: 100, width : 300},
  {name : "Maruti", image : "/images/brands/marutiLogo.png", alt : "Maruti Suzuki",  height: 75, width : 80},
  {name : "Expertrec", image : "/images/brands/expertrec.png", alt : "Expertrec",  height: 32, width : 32},
  {name : "PrimeWays", image : "/images/brands/primeways.png", alt : "Primeways", height: 80, width : 200},
  {name : "Merck", image : "/images/brands/merckLogo.png", alt : "Merck is our customer", height: 80, width : 200},
]

const CustomerList = props => {
  return (
    <div style={{backgroundImage: "url(/images/city.jpg)"}} className={clsx(styles.customerListContainer,"flex bg-center bg-cover pt-12 sm:p-20 flex-col mt-12 md:mt-6 justify-center items-center gap-8")}>
      <h2 className={clsx("mb-12 text-lg text-primary font-medium text-2xl md:text-3xl lg:text-4xl text-center",styles.mainTextShadow)}>
        Our Happy Customers
      </h2>

      <div  className="flex mb-36 justify-center w-full flex-wrap items-center">
        {
          customerListData.map(ci => <div style={{boxShadow: "2px 5px 14px rgba(0, 0, 0, 0.25)"}}  key={ci.name} className="p-4 rounded-lg w-full h-auto sm:w-48 sm:h-28 flex justify-center items-center m-4 bg-white" >
            <div className="x-10 m-2">
              <Image src={ci.image} width={ci.width} height={ci.height} alt={ci.alt} />
            </div>
          </div>)
        }
      </div>

      {/*<div className="-z-20 -mt-96">*/}
      {/*  <Image src={city} height="700px" width="1600px" layout="fixed"  />*/}
      {/*</div>*/}


    </div>
  );
};

CustomerList.propTypes = {

};

export default CustomerList;

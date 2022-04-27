import React from 'react';
import PropTypes from 'prop-types';
import ScLogo from "../svgs/ScLogo";
import Link from "next/link";
import Button from "../Button";
import {useWindowScroll} from "@mantine/hooks";
import clsx from "clsx";

import styles from "./TopNav.module.css";

const TopNav = props => {

  const [scroll] = useWindowScroll();

  return (
    <nav
      className={clsx("sticky top-0 flex items-center px-2 py-1 transition-all items-center", `${styles.navBg}`, {"shadow" : scroll.y > 50})}>
      <div className="w-full flex justify-between items-center text-primary font-semibold">
        <div className="flex gap-x-1">

            <div>
              {/*<Image src="/logo.svg"  alt="SkillCounty Logo" width={70} height={70}/>*/}
              <ScLogo width={30} height={30} className="fill-primary"/>
            </div>
            <div className="tracking-wide text-xl font-bold">
              <Link href="/">SkillCounty</Link>
            </div>
        </div>
        <div className="flex gap-x-5 font-semibold">
          <div>
            Campus Placement
          </div>
          <div>Pricing</div>
          <div>Solutions</div>
        </div>
        <div className="flex gap-x-5 justify-end items-center">
          <div>Login</div>
          <Button className="py-1.5 px-5">Get Started</Button>
        </div>
      </div>
    </nav>
  );
};

TopNav.propTypes = {

};

export default TopNav;

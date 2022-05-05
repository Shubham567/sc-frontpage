import React, {useState} from 'react';
import PropTypes from 'prop-types';
import ScLogo from "../svgs/ScLogo";
import Link from "next/link";
import Button from "../Button";
import {useToggle, useWindowScroll} from "@mantine/hooks";
import clsx from "clsx";


import styles from "./TopNav.module.css";
import useScreenSize from "../../hooks/useScreenSize";
import IconButton from "../IconButton";
import {IoMdMenu} from "react-icons/io"
import SideMenu from "../SideMenu";

const centralLinks = [
  {name: "Pricing", link: "/pricing"},
]

const sideMenuItems = [
  {name: "Home", link: "/"},
  {name: "Pricing", link: "/pricing"},
]

const breakPoint = 768;

const TopNav = props => {

  const [scroll] = useWindowScroll();
  const screen = useScreenSize();



  const [openSideMenu,toggleSideMenu] = useToggle(false, [false,true]);

  return (
    <nav
      className={clsx("sticky z-10 top-0 flex items-center px-2 py-1 transition-all items-center", `${styles.navBg}`, {"shadow" : scroll.y > 50})}>
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
        {
          screen.width > 768 &&
          <div className="flex gap-x-5 font-semibold">
            {
              centralLinks.map(cl => <Link key={cl.link} href={cl.link}>{cl.name}</Link>)
            }
          </div>
        }
        <div className="flex gap-x-5 justify-end items-center">
          {
            screen.width > breakPoint ?
              <>
                <Link href='https://app.skillcounty.com/auth'>Login</Link>
                <Button variant="contained" color="secondary" className="py-1.5 px-5">Get Started</Button>
              </>
              :
              <IconButton aria-label="menu" large onClick={toggleSideMenu}>
                <IoMdMenu />
              </IconButton>
          }
        </div>
      </div>
      <SideMenu open={openSideMenu} onClose={toggleSideMenu}>
        <div className="flex flex-col text-primary p-2">
          {
            sideMenuItems.map( menuItem => <div key={menuItem.name}>
              <Link href={menuItem.link}>
                {menuItem.name}
              </Link>
            </div>)
          }
        </div>
      </SideMenu>
    </nav>
  );
};

TopNav.propTypes = {

};

export default TopNav;

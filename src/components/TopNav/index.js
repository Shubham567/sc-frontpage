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
import {useRouter} from "next/router";

const centralLinks = [
  {name: "Platform", link: "/platform"},
  {name: "Solutions", link: "/solutions"},
  {name: "Pricing", link: "/pricing"},
]

const sideMenuItems = [
  {name: "Home", link: "/"},
  {name: "Platform", link: "/platform"},
  {name: "Solutions", link: "/solutions"},
  {name: "Pricing", link: "/pricing"},
]

const breakPoint = 768;

const TopNav = props => {

  const [scroll] = useWindowScroll();
  const screen = useScreenSize();
  const router = useRouter();


  const [openSideMenu, toggleSideMenu] = useToggle(false, [false, true]);

  return (
    <nav
      role="navigation" aria-label="SkillCounty quick navigation"
      className={clsx("fixed w-full z-10 top-0 flex items-center px-4 py-2.5 transition-all items-center", `${styles.navBg}`, {[`shadow ${styles.navBgScroll}`]: scroll.y > 50})}>
      <div className="w-full flex justify-between items-center text-primary font-semibold">
        <div className="flex items-center gap-x-1">
          <div>
            {/*<Image src="/logo.svg"  alt="SkillCounty Logo" width={70} height={70}/>*/}
            <ScLogo width={36} height={36} className="fill-primary"/>
          </div>
          <div className="tracking-wide text-primary text-2xl font-bold">
            <Link href="/">SkillCounty</Link>
          </div>
        </div>

        <div className="flex gap-x-5 justify-end items-center">
          {
            screen.width > 768 &&
            <div className="flex gap-x-5">
              {
                centralLinks.map(cl => <Link key={cl.link} href={cl.link}><span className={clsx("cursor-pointer", (router?.pathname.includes(cl.link) ? "font-bold text-primary" : "font-normal text-dark"))}>{cl.name}</span></Link>)
              }
            </div>
          }
          {
            screen.width > breakPoint ?
              <>
                <div className={"font-normal ml-8 text-dark text-bs"}>
                  <Link href='/subscribe/start-trial'>Try Yourself</Link>
                </div>
                <Button onClick={() => router.replace('https://app.skillcounty.com/auth')} variant="contained"
                        color="primary" className="py-1.5 px-5">Login</Button>
              </>
              :
              <IconButton aria-label="menu" large onClick={toggleSideMenu}>
                <IoMdMenu/>
              </IconButton>
          }
        </div>
      </div>
      <SideMenu open={openSideMenu} onClose={toggleSideMenu}>
        <div className="flex flex-col text-primary p-2">
          {
            sideMenuItems.map(menuItem => <div key={menuItem.name}>
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

TopNav.propTypes = {};

export default TopNav;

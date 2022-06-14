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
import DropDown from "../DropDown";

const centralLinks = [
  {name: "Platform", menuItems : [
      {
        name: "Customizable Assessments",
        href:"/platform/custom-assessments"
      },
      {
        name: "AI based Evaluations",
        href:"/platform/ai-based-evaluation"
      },
      {
        name: "Coding Assessments",
        href:"/platform/coding-assessments"
      },
      {
        name: "One way interviews",
        href:"/platform/one-way-interviews"
      },
      {
        name: "Proctoring",
        href:"/platform/proctoring"
      },
      {
        name: "Psychometric Assessments",
        href:"/platform/psychometric-assessments"
      },
      {
        name: "Question Library",
        href:"/platform/question-library"
      },
      {
        name: "Assessment MarketPlace",
        href:"/platform/assessment-marketplace"
      },
    ]},
  {name: "Solutions", href: "/solutions"},
  {name: "Pricing", href: "/pricing"},
]

const sideMenuItems = [
  {name: "Home", href: "/"},
  {name: "Pricing", href: "/pricing"},
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
            <div className="flex gap-x-5 font-medium text-dark text-bs">
              {
                centralLinks.map(cl =>
                  cl.menuItems ? <DropDown key={cl.name} data={cl} topBtnProps={{style:{fontWeight: 500}}} /> :
                  <Link key={cl.href} href={cl.href}>{cl.name}</Link>
                )
              }
            </div>
          }
          {
            screen.width > breakPoint ?
              <>
                <div className={"font-semibold ml-8 text-dark text-bs "}>
                  <Link href='https://app.skillcounty.com/subscribe/start-trial'>Sign Up for Free</Link>
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
        <div className="flex flex-col text-primary p-2 gap-2">
          {
            sideMenuItems.map(menuItem => <div key={menuItem.name}>
              <Link href={menuItem.href}>
                {menuItem.name}
              </Link>
            </div>)
          }
          {
            centralLinks.map(centralItem => {
              if(centralItem.menuItems){
                return <div className="flex flex-col">
                  <div>
                    <span className="text-gray-dark">
                      {centralItem.name}
                    </span>
                  </div>
                  <div className="flex flex-col pl-2">
                    {
                      centralItem.menuItems.map(mi => <Link href={mi.href} key={mi.name}>
                        {mi.name}
                      </Link>)
                    }
                  </div>
                </div>
              }
              else {

              }
            })
          }
        </div>
      </SideMenu>
    </nav>
  );
};

TopNav.propTypes = {};

export default TopNav;

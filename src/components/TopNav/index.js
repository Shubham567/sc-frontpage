import React, {useState} from 'react';
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
import {Toaster} from "react-hot-toast";
import Image from "next/image";
import {GiCrossedBones} from "react-icons/gi";
import SocialLinks from "../SocialLinks";
import CollapsibleLink from "../CollapsibleLink";

const centralLinks = [
  {
    name: "Platform",
    menuItems: [
      {
        name: "Customizable Assessments",
        href: "/platform/custom-assessments"
      },
      {
        name: "AI based Evaluations",
        href: "/platform/ai-based-evaluations"
      },
      {
        name: "Coding Assessments",
        href: "/platform/coding-assessments"
      },
      {
        name: "One way interviews",
        href: "/platform/one-way-interviews"
      },
      {
        name: "Proctoring",
        href: "/platform/proctoring"
      },
      {
        name: "Psychometric Assessments",
        href: "/platform/psychometric-assessments"
      },
      {
        name: "Question Library",
        href: "/platform/question-library"
      },
      {
        name: "Assessment MarketPlace",
        href: "/platform/assessment-marketplace"
      },
    ]
  },
  {name: "Solutions", href: "/solutions"},
  {name: "Pricing", href: "/pricing"},
]

const sideMenuItems = [
  {name: "Home", href: "/"},
  {name: "Pricing", href: "/pricing"},
  {name: "Solutions", href: "/solutions"},
]

const breakPoint = 768;

const TopNav = props => {

  const [scroll] = useWindowScroll();
  const screen = useScreenSize();
  const router = useRouter();

  const [openSideMenu, setOpenSideMenu] = useState(false);
  const toggleSideMenu = () => setOpenSideMenu(!openSideMenu);

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
            <div className="flex gap-x-5 text-bs">
              {
                centralLinks.map(cl =>
                  cl.menuItems ?
                    <DropDown key={cl.name} data={cl} activeTab={"/platform"} topBtnProps={{style: {fontWeight: 500}}}
                              router={router}/> :
                    <Link key={cl.href} href={cl.href}><span
                      className={clsx(router?.pathname?.includes(cl.href) ? "font-bold cursor-pointer" : "font-normal cursor-pointer")}>{cl.name}</span></Link>
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
                <Button onClick={() => router.replace('https://app.skillcounty.com')} variant="contained"
                        color="primary" className="py-1.5 px-5">Login</Button>
              </>
              :
              <IconButton aria-label="menu" large onClick={toggleSideMenu}>
                <IoMdMenu/>
              </IconButton>
          }
        </div>
      </div>
      <Toaster
        position="top-right"
        toastOptions={{
          success: {
            theme: {
              primary: "#5ee3a8"
            }
          }
        }}
      ></Toaster>
      <SideMenu open={openSideMenu} onClose={toggleSideMenu}>
        <div className="flex h-full flex-col justify-between ">
          <div className="flex flex-col text-primary p-2 gap-2">
            <div className="flex w-full border-b-2 mb-2 pb-2 border-b-gray-extra-light justify-between items-center">
              <div className="pr-4 w-4/6">
                <Image src="/images/skillcounty-logo.svg" height="48px" width="240px" alt="SkillCounty Logo"/>
              </div>
              <div onClick={toggleSideMenu}
                   className="border-2 flex items-center -mt-2 justify-center w-6 h-6 p-1 rounded-full">
                <GiCrossedBones className="text-sm"/>
              </div>
            </div>
            <div style={{maxHeight: "81.5vh"}} className="overflow-y-auto">
              {
                sideMenuItems.map(menuItem => <div onClick={() => router.push(menuItem.href).then()} key={menuItem.name} className="font-semibold border-b-2 border-b-gray-hard-light text-dark p-2">
                  <Link href={menuItem.href}>
                    {menuItem.name}
                  </Link>
                </div>)
              }
              {
                centralLinks.map(centralItem => {
                  if (centralItem.menuItems) {
                    return <CollapsibleLink title={centralItem.name} dropDownItems={centralItem.menuItems} />
                  } else {

                  }
                })
              }
            </div>
          </div>

          <div className="border-t-2 pt-2 border-t-gray-extra-light flex justify-center">
            <SocialLinks className="p-2 self-center"/>
          </div>
        </div>
      </SideMenu>
    </nav>
  );
};

TopNav.propTypes = {};

export default TopNav;

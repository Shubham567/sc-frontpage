import React from 'react';
import Link from "next/link";
import {IoLogoFacebook, IoLogoInstagram, IoLogoTwitter, IoLogoYoutube} from "react-icons/io";
import IconButton from "../IconButton";
import Image from "next/image";

const sections = [
  {
    name: "Services",
    links: [
      {
        name: "Hiring Manager",
        link: ""
      },
      {
        name: "Campus Placement",
        link: ""
      },
      {
        name: "Campus Placement",
        link: ""
      },
    ]
  },
  {
    name: "Help",
    links: [
      {
        name: "Refund & Cancellation",
        link: "refund_and_cancellation"
      },
      {
        name: "Terms of use",
        link: "/terms"
      },
      {
        name: "Privacy Policy",
        link: "/privacy"
      },
      {
        name: "About us",
        link: "/about-us"
      },
      {
        name: "Sitemap",
        link: ""
      },
    ]
  },
  {
    name: "Contact",
    links: [
      {
        name: "Feedback",
        link: ""
      },
      {
        name: "contact@skillcounty.com",
        link: ""
      },
      {
        name: "About Us",
        link: ""
      },
    ]
  },
  {
    name: "Blogs",
    links: [
      {
        name: "Pre-Employment Assessment",
        link: "https://www.skillcounty.com/blog/employment-tests-or-screening-tests-and-assessment-tools/"
      },
      {
        name: "SkillCounty vs TestDome",
        link: "https://www.skillcounty.com/blog/the-bake-off-skillcounty-vs-testdome/"
      },
      {
        name: "SkillCounty vs Hackerrank",
        link: "https://www.skillcounty.com/blog/the-bake-off-skillcounty-vs-hackerrank/"
      },
    ]
  }
]

const socialLinks  = [
  {name: "Facebook", link: "https://www.facebook.com/skillcounty", icon: <IoLogoFacebook />},
  {name: "Twitter", link: "https://twitter.com/skillcounty_com", icon: <IoLogoTwitter />},
  {name: "Instagram", link: "https://www.instagram.com/_skillcounty/", icon: <IoLogoInstagram />},
  {name: "Youtube", link: "https://www.youtube.com/channel/UCWkB0Kw80TpzZSqLChMmYKw", icon: <IoLogoYoutube />},
]

const Footer = () => {
  return (
    <footer style={{backgroundImage: "url(/images/footer-background.png)"}} className="bg-cover mt-8 flex flex-col text-primary relative">
      {/*<FooterGrayTriangles className="absolute bottom-0 left-0 w-full h-full -z-10" />*/}
      {/*<div className="flex absolute">*/}
      {/*  <Image src="/images/footer-background.png" objectFit="cover" width="1920px" height="917" alt="footer-bg" />*/}
      {/*</div>*/}
      <div className="mt-56 ml-2 md:ml-8">
        <Image src="/images/skillcounty-footer-logo.svg" width="349px" height="71px" alt="logo" />
      </div>
      <div className="flex md:pl-12 md:pr-8 xl:mt-28 mt-12 flex-col sm:flex-row justify-between px-4 py-8 gap-4 sm:gap-1">
        <div className="flex text-yellow flex-col md:flex-row lg:flex-row xl:flex-row gap-12 text-sm">
          {
            sections.map(section => <div key={section.name} className="flex flex-col gap-2">
              <h5 className="text-yellow font-semibold">
                {section.name}
              </h5>
                {
                  section.links.map(link => <Link href={link.link} key={link.link}>
                    {link.name}
                  </Link>)
                }
            </div>
            )
          }
        </div>
        <div className="flex items-start sm:items-end flex-col p-2 gap-2">
          <div className="text-yellow font-semibold">Follow Us</div>
          <div className="flex gap-2 text-yellow">
            {
              socialLinks.map(sl => <a href={sl.link} rel="noopener noreferrer" key={sl.name} target="_blank" >
                <IconButton className="bg-yellow" aria-label={sl.name} contained>
                  {sl.icon}
                </IconButton>
              </a>)
            }
          </div>
        </div>
      </div>
      <div className="text-gray-dark text-sm text-center">
        <span>&copy; {new Date().getFullYear()} SkillCounty</span> - <Link href="https://s759labs.com"> s759Labs&reg;</Link>
      </div>
    </footer>
  );
};

export default Footer;

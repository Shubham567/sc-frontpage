import React from 'react';
import Link from "next/link";
import {IoLogoFacebook, IoLogoInstagram, IoLogoTwitter, IoLogoYoutube} from "react-icons/io";
import IconButton from "../IconButton";
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
        link: ""
      },
      {
        name: "Terms of use",
        link: ""
      },
      {
        name: "Privacy Policy",
        link: ""
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
        link: ""
      },
      {
        name: "SkillCounty vs TestDome",
        link: ""
      },
      {
        name: "SkillCounty vs Hackerrank",
        link: ""
      },
    ]
  }
]

const socialLinks  = [
  {name: "Facebook", link: "", icon: <IoLogoFacebook />},
  {name: "Twitter", link: "", icon: <IoLogoTwitter />},
  {name: "Instagram", link: "", icon: <IoLogoInstagram />},
  {name: "Youtube", link: "", icon: <IoLogoYoutube />},
]

const Footer = () => {
  return (
    <footer className="mt-8 flex flex-col text-primary">
      <div className="flex">

      </div>
      <div className="flex border-gray border-y justify-between px-4 py-8">
        <div className="flex gap-6 text-sm">
          {
            sections.map(section => <div key={section.name} className="flex flex-col gap-2">
              <h5 className="text-dark font-semibold">
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
        <div className="flex items-end flex-col p-2 gap-2">
          <div className=" font-semibold">Follow Us</div>
          <div className="flex gap-2">
            {
              socialLinks.map(sl => <Link href={sl.link} key={sl.name} passHref={true}>
                <IconButton aria-label={sl.name} contained primary>
                  {sl.icon}
                </IconButton>
              </Link>)
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

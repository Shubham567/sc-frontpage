import React, {useEffect} from 'react';
import Link from "next/link";
import Image from "next/image";
import {useMatomo} from "@datapunt/matomo-tracker-react";
import SocialLinks from "../SocialLinks";


const sections = [
  {
    name: "Product",
    links: [
      {
        name: "Coding Assessment",
        link: "/platform/coding-assessments"
      },
      {
        name: "One Way Interviews",
        link: "/platform/one-way-interviews"
      },
      {
        name: "Assessment Marketplace",
        link: "/platform/assessment-marketplace"
      },
      {
        name: "Question Library",
        link: "/platform/question-library"
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
      // {
      //   name: "Sitemap",
      //   link: ""
      // },
    ]
  },
  {
    name: "Contact",
    links: [
      {
        name: "Contact & Feedback",
        link: "/contact"
      },
      {
        name: "contact@skillcounty.com",
        link: "mailto:contact@skillcounty.com"
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




const Footer = () => {
  const {trackPageView} = useMatomo();

  useEffect(() => {
    trackPageView();
  }, [])

  return (
    <footer role="navigation" aria-label="useful links" style={{backgroundImage: "url(/images/footer-background.png)"}} className="bg-cover mt-8 flex flex-col text-primary relative">
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
                  section.links.map(link => {
                    if(section.name === "Blogs") {
                      return <a key={link.link} href={link.link} rel="noreferrer noopener" target="_blank" >{link.name}</a>
                    }
                    else{
                      return <Link href={link.link} key={link.link}>
                        {link.name}
                      </Link>
                    }

                  })
                }
            </div>
            )
          }
        </div>
        <div className="flex items-start sm:items-end flex-col p-2 gap-2">
          <div className="text-yellow font-semibold">Follow Us</div>
          <SocialLinks />
        </div>
      </div>
      <div className="text-gray-dark text-sm text-center">
        <span>&copy; {new Date().getFullYear()} SkillCounty</span> - <Link href="https://s759labs.com"> s759Labs&reg;</Link>
      </div>
    </footer>
  );
};

export default Footer;

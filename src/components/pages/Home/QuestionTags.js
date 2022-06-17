import React, {useEffect, useRef, useState} from 'react';
import {motion, useAnimation} from "framer-motion";
// import ScTestDemoLogo from "../../svgs/ScTestDemoLogo";
import Image from "next/image";
import sampleTestDemoImg from "../../../../assets/sampleTestDemo.png";

import c from "programming-languages-logos/src/c/c.svg";
import cpp from "programming-languages-logos/src/cpp/cpp.svg";
import go from "programming-languages-logos/src/go/go.svg";
import javascript from "programming-languages-logos/src/javascript/javascript.svg";
import html from "programming-languages-logos/src/html/html.svg";
import php from "programming-languages-logos/src/php/php.svg";
import python from "programming-languages-logos/src/python/python.svg";
import r from "programming-languages-logos/src/r/r.svg";
import typescript from "programming-languages-logos/src/typescript/typescript.svg";
import java from "programming-languages-logos/src/java/java.svg";
import csharp from "programming-languages-logos/src/csharp/csharp.svg";
import css from "programming-languages-logos/src/css/css.svg";
import useScreenSize from "../../../hooks/useScreenSize";
import clsx from "clsx";
import Button from "../../Button";


const tags = [
  {name: "Javascript", icon: javascript, x: -200, y : 200, tech: true},
  {name: "C", icon: c, x: 200, y : -200, tech: true},
  {name: "C++", icon: cpp, x: 270, y : 270, tech: true},
  {name: "Python", icon: python, x: 400, y : 200, tech: true},
  {name: "Java", icon: java, x: -300, y : -200, tech: true},
  {name: "CSS", icon: css, x: 200, y : 200, tech: true},
  {name: "Go", icon: go, x: 320, y : -112, tech: true},
  {name: "php", icon: php, x: -400, y : -100, tech: true},
  {name: "HTML", icon: html, x: -350, y : 0, tech: true},
  {name: "R", icon: r, x: 116, y : -220, tech: true},
  {name: "Typescript", icon: typescript, x: -360, y : 100, tech: true},
  {name: "C#", icon: csharp, x: -400, y : 200, tech: true},
  {name: "SQL", icon: null, x: -300, y : 130, tech: true},
  {name: "Postgres", icon: null, x: 290, y : -220, tech: true},
  {name: "MySQL", icon: null, x: 300, y : 240, tech: true},
  {name: "SQL Server", icon: null, x: 300, y : 240, tech: true},
  {name: "Product Manager", icon: null, x: -50, y : 240},
  {name: "Data Science", icon: null, x: -50, y : -210, tech: true},
  {name: "Rust", icon: null, x: -80, y : 270, tech: true},
  {name: "NodeJS", icon: null, x: -90, y : -240, tech: true},
  {name: "Developer", icon: null, x: 290, y : 70},
  {name: "Software Testing", icon: null, x: 340, y : 100},
  {name: "Wordpress", icon: null, x: -290, y : 70, tech: true},
  {name: "Tally", icon: null, x: -290, y : -70},
  {name: "Marketing", icon: null, x: 290, y : -70},
  {name: "Linux", icon: null, x: 380, y : -85, tech: true},
  {name: "Excel", icon: null, x: -320, y : -40},
  {name: "Cyber Security", icon: null, x: -320, y : -130, tech: true},
  {name: "AWS", icon: null, x: 290, y : 10, tech: true},
  {name: "Accounting", icon: null, x: 60, y : 260},
  {name: "Mathematics", icon: null, x: 290, y : -160},
  {name: "Laravel", icon: null, x: 90, y : 210, tech: true},
  {name: "Statistics", icon: null, x: 50, y : -220},
  {name: "Taxation", icon: null, x: -170, y : -220},
  {name: "Magento", icon: null, x: -400, y : 30, tech: true},
  {name: "React", icon: null, x: 340, y : 40, tech: true},
  {name: "Numpy", icon: null, x: 290, y : 140, tech: true},
  {name: "Kubernetes", icon: null, x: 45, y : 190, tech: true},
  {name: "Docker", icon: null, x: 340, y : -20, tech: true},
  {name: "Brand Management", icon: null, x: -320, y : 230},
]


const techItems = tags.filter(t => t.tech);
const otherItems = tags.filter(t => !t.tech);

const colorsForLogos = [
  "#649d38",
  "#ae119a",
  "#c42e2e",
  "#629881",
  "#2de2ff",
  "#5b5b5b",
  "#631fb8"
];

const breakPoint = 768;
const showMoreOn = 12;

const QuestionTags = props => {

  const logoRef = useRef(null);
  const controls = useAnimation();
  const screen = useScreenSize();

  const [showMoreTech, setShowMoreTech] = useState(false);
  const [showMoreOther, setShowMoreOther] = useState(false);


  useEffect(() => {


    let io = new IntersectionObserver( (e) => {
        if(!e[0].isIntersecting ){
          return;
        }
        io.disconnect();
        controls.start((i) => {
            return {
              x: tags[i].x,
              y: tags[i].y,
              transition: {
                delay: 0.1 * i,
                duration: 0.1
              }
            }
          }
        ).then(() => {

        })
      },{threshold: 1}
    )

    io.observe(logoRef.current);

    return () => {
      io.disconnect();
    }
  }, [])


  return (
    <div>
      <div className={clsx( {"hidden": screen.width <= breakPoint},"relative flex justify-center items-center scale-50 sm:scale-75 md:scale-75 lg:scale-100 xl:scale-105")} style={{height: 700}}>
        <div className={clsx("flex justify-center")} ref={logoRef}>
          <Image alt="SkillCounty best most affordable hiring platform" src={sampleTestDemoImg} width={470} height={350}/>
        </div>
        {
          screen.width > breakPoint &&
          techItems.map((tag,i) => {
            let Icon = tag.icon;
            return <motion.div key={tag.name}
                               className="shadow -z-10 shadow-gray-dark rounded border border-gray absolute flex p-1 px-3 text-dark items-center gap-4 bg-white"
                               initial="hidden"
              // whileInView="visible"
              // viewport={{ once: true }}
                               custom={i}
                               animate={controls}>
              {Icon ? <Icon className="h-4 w-auto"/> : <span className="font-extrabold" style={{color: colorsForLogos[i % colorsForLogos.length]}}>{tag.name[0]}</span>}
              <span>{tag.name}</span>
            </motion.div>
          })
        }
      </div>
      {
        screen.width <= breakPoint &&
        <div className="text-center">
          <div>
            <h2 className="text-2xl font-semibold text-primary">
              Technical Hires
            </h2>
          </div>
          <div className="flex flex-wrap p-2 gap-1 justify-center">
            {
              tags.filter(t => t.tech).slice(0,showMoreTech ? undefined : showMoreOn).map((tag, i) => {
                let Icon = tag.icon;
                return <div key={tag.name}
                            className="shadow shadow-gray-dark rounded border border-gray flex p-1 px-3 text-dark items-center gap-4 bg-white"
                            style={{maxWidth: 300}}>
                  {Icon ? <Icon className="h-4 w-auto"/> : <span className="font-extrabold"
                                                                 style={{color: colorsForLogos[i % colorsForLogos.length]}}>{tag.name[0]}</span>}
                  <span>{tag.name}</span>
                </div>
              })
            }
          </div>
          {
            !showMoreTech && techItems.length > showMoreOn &&
            <div>
              <Button color="secondary" onClick={() => setShowMoreTech(true)}>
                Show More
              </Button>
            </div>
          }
          <div>
            <h2 className="text-2xl font-semibold text-primary mt-8">
              Other Hires
            </h2>
          </div>
          <div className="flex flex-wrap p-2 gap-1 justify-center">
            {
              tags.filter(t => !t.tech).slice(0,showMoreOther ? undefined : showMoreOn).map((tag, i) => {
                let Icon = tag.icon;
                return <div key={tag.name}
                            style={{maxWidth: 300}}
                            className="shadow shadow-gray-dark rounded border border-gray flex p-1 px-3 text-dark items-center gap-4 bg-white">
                  {Icon ? <Icon className="h-4 w-auto"/> : <span className="font-extrabold"
                                                                 style={{color: colorsForLogos[i % colorsForLogos.length]}}>{tag.name[0]}</span>}
                  <span>{tag.name}</span>
                </div>
              })
            }
          </div>
          {
            !showMoreOther && otherItems.length > showMoreOn &&
            <div>
              <Button color="secondary" onClick={() => setShowMoreOther(true)}>
                Show More
              </Button>
            </div>
          }
        </div>}
    </div>
  );
};

QuestionTags.propTypes = {

};

export default QuestionTags;

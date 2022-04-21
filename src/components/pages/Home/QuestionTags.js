import React from 'react';
import PropTypes from 'prop-types';
import {motion} from "framer-motion";
import ScTestDemoLogo from "../../svgs/ScTestDemoLogo";

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



const tags = [
  {name: "Javascript", icon: javascript, x: -200, y : 200},
  {name: "C", icon: c, x: 200, y : -200},
  {name: "C++", icon: cpp, x: 270, y : 270},
  {name: "Python", icon: python, x: 400, y : 200},
  {name: "Java", icon: java, x: -300, y : -200},
  {name: "CSS", icon: css, x: 200, y : 200},
  {name: "Go", icon: go, x: 320, y : -112},
  {name: "php", icon: php, x: -400, y : -100},
  {name: "HTML", icon: html, x: -350, y : 0},
  {name: "R", icon: r, x: 456, y : 0},
  {name: "Typescript", icon: typescript, x: -360, y : 100},
  {name: "C#", icon: csharp, x: -400, y : 200},
  {name: "SQL", icon: null, x: -300, y : 130},
  {name: "Postgres", icon: null, x: 290, y : -220},
  {name: "MySQL", icon: null, x: 300, y : 240},
  {name: "SQL Server", icon: null, x: 300, y : 240},
  {name: "Product Manager", icon: null, x: -50, y : 240},
  {name: "Data Science", icon: null, x: -50, y : -210},
  {name: "Rust", icon: null, x: -80, y : 270},
  {name: "NodeJS", icon: null, x: -90, y : -240},
  {name: "Developer", icon: null, x: 290, y : 70},
  {name: "Software Testing", icon: null, x: 340, y : 100},
  {name: "Wordpress", icon: null, x: -290, y : 70},
  {name: "Tally", icon: null, x: -290, y : -70},
  {name: "Marketing", icon: null, x: 290, y : -70},
  {name: "Linux", icon: null, x: 380, y : -85},
  {name: "Excel", icon: null, x: -320, y : -40},
  {name: "Cyber Security", icon: null, x: -320, y : -130},
  {name: "AWS", icon: null, x: 290, y : 10},
  {name: "Accounting", icon: null, x: 60, y : 260},
  {name: "Mathematics", icon: null, x: 290, y : -160},
  {name: "Laravel", icon: null, x: 90, y : 210},
  {name: "Statistics", icon: null, x: 50, y : -220},
  {name: "Taxation", icon: null, x: -170, y : -220},
  {name: "Magento", icon: null, x: -400, y : 30},
  {name: "React", icon: null, x: 340, y : 40},
  {name: "Numpy", icon: null, x: 290, y : 140},
  {name: "Kubernetes", icon: null, x: -5, y : 190},
  {name: "Docker", icon: null, x: 340, y : -20},
  {name: "Brand Management", icon: null, x: -320, y : 230},
]

const QuestionTags = props => {

  return (
    <div className="flex justify-center items-center" style={{height: 700}}>
      <div className="flex justify-center">
        <ScTestDemoLogo />
      </div>
      {
        tags.map(tag => {
          let Icon = tag.icon;
          return <motion.div key={tag.name}
                      className="shadow shadow-gray-dark rounded border border-gray absolute -z-10 flex p-1 px-3 text-blue items-center gap-4 bg-white"
                             initial="hidden"
                              whileInView="visible"
                             viewport={{ once: true }}
                        animate={{x: tag.x, y: tag.y, transition: {delay : 0.3, duration : 0.5}}}>
            {Icon && <Icon className="h-4 w-auto"/>}
            <span>{tag.name}</span>
          </motion.div>
        })
        }
    </div>
  );
};

QuestionTags.propTypes = {

};

export default QuestionTags;

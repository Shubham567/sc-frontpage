import React from 'react';
import SlidePresentation from "../../../SlidePresenstation";
// import {IoBag} from "react-icons/io";

import {GiStack, GiTechnoHeart} from "react-icons/gi";
import {RiBuilding4Line,RiShoppingBag2Fill, RiMedalFill} from "react-icons/ri";
import {MdAddCall,MdNaturePeople} from "react-icons/md";

const HiringSolution = () => {
  return (
    <div className="pt-36">
      <h2 className="mb-24 text-primary text-center text-2xl md:text-3xl lg:text-4xl">
        Hiring Solutions
      </h2>
      <div className="mt-8">
        <SlidePresentation data={[
          {
            title: "Professional Hiring",
            icon: <RiShoppingBag2Fill />,
            image: null,
            content: <div>
              <h4 className="font-semibold mb-5 text-primary">
                Hire professionals who will help your firm succeed.
              </h4>
              <p>
                By construction, resumes are opinions and not facts. Several studies have shown that 40% of resumes misrepresent the skills of the candidate. SkillCounty’s platform reduces both the effort and the time to close a role by helping your entry criteria rise above a degree or college mention.
              </p>
            </div>
          }, {
            title: "Bulk Hiring Services",
            icon: <GiStack />,
            image: null,
            content: <div>
              <h4 className="font-semibold mb-5 text-primary">
                Hire on a large scale, affordably and fast
              </h4>
              <p>
                Hiring in bulk is an effort and time intensive process. SkillCounty’s proprietary technology helps you get a competitive advantage by enabling you to do bulk hiring at a fraction of the cost and in minimal time while ensuring you capture the best candidates.
              </p>
            </div>
          },{
            title: "Technical Hiring",
            icon: <GiTechnoHeart />,
            image: null,
            content: <div>
              <h4 className="font-semibold mb-5 text-primary">
                Assess candidate&apos;s problem solving, coding & design skills
              </h4>
              <p>
                SkillCounty brings together all the tools you need to assess technical skills like problem solving, coding and design. Furthermore, it can help you assess skills like planning, teamwork, execution, and communication.
              </p>
            </div>
          },{
            title: "Campus Hiring",
            icon: <RiBuilding4Line/>,
            image: null,
            content: <div>
              <h4 className="font-semibold mb-5 text-primary">
                Fuel your growth by discovering the brightest new talent.
              </h4>
              <p>
                Academic success does not predict future job performance. And, with no experience, student resumes look the same. With SkillCounty you can simultaneously screen several students on skills you value (like analytical, communication, technical, team-fit etc.) to zero-in on the best.
              </p>
            </div>
          },{
            title: "Call Center Hiring",
            icon: <MdAddCall />,
            image: null,
            content: <div>
              <h4 className="font-semibold mb-5 text-primary">
                Assess communication skills and problem solving ability to find the best frontline talent
              </h4>
              <p>
                Call centers demand strong communication & problem solving skills that work for an international market. With SkillCounty, companies can save time and effort by assessing candidates using AI driven one-way or asynchronous interviews and expert designed analytical tests.
              </p>
            </div>
          }, {
            title: "Entrance Exams",
            icon: <RiMedalFill />,
            image: null,
            content: <div>
              <h4 className="font-semibold mb-5 text-primary">
                Assess hundreds of candidates by conducting entrance exams
              </h4>
              <p>
                Entrance exams enable colleges to find the best prospects for a program by objectively assessing potential beyond past academic outcomes. With SkillCounty, colleges can conduct large scale examinations across multiple locations and for a wide range of skills that matter.
              </p>
            </div>
          },{
            title: "College Placement Cell",
            icon: <MdNaturePeople />,
            image: null,
            content: <div>
              <h4 className="font-semibold mb-5 text-primary">
                Conduct mock placement assessments to help your student prepare and excel
              </h4>
              <p>
                Every top college spends considerable effort training students for the placement season. Using SkillCounty, colleges can design and conduct mock placement assessments and interviews for students so they can land a placement with confidence.
              </p>
            </div>
          },
        ]} />
      </div>
    </div>
  );
};

export default HiringSolution;

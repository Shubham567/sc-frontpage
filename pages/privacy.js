import TopNav from "../src/components/TopNav";
import appDetails from "../config/appDetails";
import Head from "next/head";
import React from "react";
import OnTopBgTrapez from "../src/components/pages/Home/OnTopBgTrapez";
import TopEllipses from "../src/components/svgs/TopEllipses";
import Footer from "../src/components/Footer";


export default function Privacy() {

  return (
    <div className="relative">
      <Head>
        <title>{appDetails.title}</title>
        <meta name="description" content={appDetails.metaDescription} />
      </Head>

      <TopEllipses className="absolute top-0 right-0 -z-50"  />
      <TopNav/>

      <main className="p-8 flex justify-center">
        <section className="container flex items-center flex-col gap-4 max-w-3xl p-3" style={{background: "rgba(255,255,255,0.5)"}}>
          <div className="container-fluid flex flex-col gap-4">
            <h2 className="text-center text-primary text-4xl">SkillCounty Privacy Policy</h2>
            <p>Data privacy is important to SkillCounty, and when it comes to your data, we’re committed to protecting
              it and providing transparency about the information we collect from you and how we use it. This Privacy
              Policy is designed to let you know
              the information we collect about you on our websites (the “Websites”), including from individuals who
              register to use the SkillCounty online community for software developers (the “SkillCounty Community”),
              and individuals who use the SkillCounty
              for Work service. This Privacy Policy describes SkillCounty’s privacy practices in relation to the use
              of the Websites, and the related applications and services offered by SkillCounty (collectively, the
              “Services”), as well as individuals’
              choices regarding use, access and correction of personal information.In this Privacy Policy, the terms
              “SkillCounty,” “We” and “Us” refer to Interviewstreet Incorporation, a Delaware corporation doing
              business as SkillCounty</p>
            <h3 className="text-xl text-primary">Types of Data Collected</h3>
            <p>Data privacy is important to SkillCounty, and when it comes to your data, we’re committed to protecting
              it and providing transparency about the information we collect from you and how we use it. This Privacy
              Policy is designed to let you know
              the information we collect about you on our websites (the “Websites”), including from individuals who
              register to use the SkillCounty online community for software developers (the “SkillCounty Community”),
              and individuals who use the SkillCounty
              for Work service. This Privacy Policy describes SkillCounty’s privacy practices in relation to the use
              of the Websites, and the related applications and services offered by SkillCounty (collectively, the
              “Services”), as well as individuals’
              choices regarding use, access and correction of personal information.In this Privacy Policy, the terms
              “SkillCounty,” “We” and “Us” refer to Interviewstreet Incorporation, a Delaware corporation doing
              business as SkillCounty</p>
            <h3 className="text-xl text-primary">SkillCounty for Work Service Data</h3>
            <p>SkillCounty for Work customers may upload data to the SkillCounty for Work hosted Service. SkillCounty
              will not share or distribute any such customer data except as provided in the contractual agreement
              between SkillCounty and customer for
              the provision of the SkillCounty for Work Service, or as may be required by law. If a SkillCounty for
              Work customer is located within the European Economic Area, the customer is the Controller with respect
              to the SkillCounty for Work data,
              and SkillCounty is a Processor.</p>
            <h3 className="text-xl text-primary">Use of Collected Data</h3>
            <p>SkillCounty uses the information we collect about you to:
            </p>
            <ol>
              <li>Provide you with the Websites and Services, together with any support you may request.</li>
              <li>Respond to your inquiries or fulfill your requests.</li>
              <li>Diagnose Website and Service technical problems.</li>
              <li>Diagnose Website and Service technical problems.</li>
              <li>Send you information that we believe may be of interest to you, such as Service announcements,
                newsletters, educational materials, and event information.
              </li>
              <li>Send you administrative information such as notices related to the Services or policy changes.</li>
              <li>Understand how the Websites and Services are being used in order to enhance and optimize them.</li>
              <li>Personalize your experience on the Websites.</li>
              <li>Prevent, detect, mitigate, and investigate fraudulent or illegal activity; and</li>
              <li>As described to you at the point of collection of the information.</li>
            </ol>
            <p></p>
            <h3 className="text-xl text-primary">Processing the Data</h3>
            <p>The information collected by SkillCounty is stored and processed by SkillCounty’s sub-processor, Amazon
              Web Services (“AWS”), leveraging AWS data centers located within the continental United States.
              Processing of the information collected
              about you is only undertaken for the purposes described in this Privacy Policy.</p>
            <h3 className="text-xl text-primary">Processing Details</h3>
            <h5 className="text-lg text-primary">Analytics</h5>
            <p>The third-party services described in this section enable SkillCounty to monitor and analyze Website and
              Service traffic. Google Analytics (Google Inc.) Google Analytics is a web analysis service provided by
              Google Inc. Google utilizes the
              information collected to track and examine the use of the Websites and Services to prepare reports that
              may be used for optimization of the Websites and Services.Information collected: Cookies and usage
              data.Place of processing: US – Privacy
              Policy – Opt Out</p>
            <h5 className="text-lg text-primary">Displaying Content from External Platforms</h5>
            <p>The third-party services described in this section enable SkillCounty to monitor and analyze Website and
              Service traffic. Google Analytics (Google Inc.) Google Analytics is a web analysis service provided by
              Google Inc. Google utilizes the
              information collected to track and examine the use of the Websites and Services to prepare reports that
              may be used for optimization of the Websites and Services.Information collected: Cookies and usage
              data.Place of processing: US – Privacy
              Policy – Opt Out</p>
            <h5 className="text-lg text-primary">How We Disclose Your Data</h5>
            <p>We do not sell, lease, rent or give away the information collected about You without your permission.</p>
            <h5 className="text-lg text-primary">Cookies and Similar Technologies</h5>
            <p>A cookie is a commonly used automated data collection tool. Cookies are small text files that are placed
              on your computer or device by websites that you visit or HTML-formatted emails you open, in order to
              make websites work, or work more
              efficiently. We may use cookies, web beacons, pixel tags, or other similar technologies on the Websites
              to, among other things:
            </p>
            <ul>
              <li>Authenticate you as a SkillCounty Community member or SkillCounty for Work user;</li>
              <li>
                Collect statistics regarding your usage of the Websites;
              </li>
              <li>Tailor information presented to you based on your usage of the Websites;</li>
              <li>Help provide additional functionality to the Websites; and</li>
              <li>Analyze use of our Services.</li>
            </ul>
            You may refuse to accept cookies by activating the appropriate setting on your browser. If a cookie blocking
            setting is selected on your browser, however, you may be unable to access certain parts of our Website or to
            receive certain Services.
            <p></p>
            <h5 className="text-lg text-primary">Do-Not-Track</h5>
            <p>There are different ways you can prevent tracking of your online activity. One of them is setting a
              preference in your browser that alerts websites you visit that you do not want them to collect certain
              information about you. This is referred
              to as a Do-Not-Track (“DNT”) signal. Please note that our Websites may not recognize or take action in
              response to DNT signals from your browser.</p>
            <h5 className="text-lg text-primary">Managing Your Data</h5>
            <p>We retain the information that we collect about you for as long as your SkillCounty Community or
              SkillCounty for Work account is active or as needed to provide you Services. We also retain and use the
              information collected about you as necessary
              to comply with our legal obligations, resolve disputes, prevent and detect fraud, and enforce our
              agreements. We store the information collected about you for as long as is necessary for the purpose for
              which we collect it.</p>
            <h5 className="text-lg text-primary">Accessing, Updating, Correcting or Deleting Your Data</h5>
            <p>You are able to view and update much of the information collected about you through your SkillCounty
              Community account, or SkillCounty for Work account. If you wish to cancel your account or request that
              we no longer use your information to
              provide you Services, contact us via the information below. We will respond to your request to access or
              delete your information within 30 days. We will retain and use your information as necessary to comply
              with our legal obligations,
              resolve disputes, and enforce our agreements.

            </p>
          </div>
        </section>
      </main>


      <OnTopBgTrapez />
      <Footer />
    </div>
)
}

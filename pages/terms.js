import TopNav from "../src/components/TopNav";
import appDetails from "../config/appDetails";
import Head from "next/head";
import React from "react";
import OnTopBgTrapez from "../src/components/pages/Home/OnTopBgTrapez";
import TopEllipses from "../src/components/svgs/TopEllipses";
import Footer from "../src/components/Footer";
import DemoForm from "../src/components/pages/Home/DemoForm";


export default function Home() {

  return (
    <div className="relative">
      <Head>
        <title>{appDetails.title}</title>
        <meta name="description" content={appDetails.metaDescription} />
      </Head>

      <TopEllipses className="absolute top-0 right-0 -z-50"  />
      <TopNav/>

      <main className="p-8">
        <section className="container flex items-center flex-col gap-4" style={{background: "rgba(255,255,255,0.5)"}}>
          <div className="ml-2 text-justify max-w-3xl flex flex-col gap-4">
            <h1 className="text-center text-4xl text-primary font-semibold">Terms of Service</h1>
            <p>
              <span className="text-secondary">Welcome!</span> These Terms of Service (the “Terms”) govern Your access to and use of the SkillCounty website
              and online community for software developers (“SkillCounty”). These Terms also include the SkillCounty
              Privacy Policy. By accessing and using SkillCounty,
              You agree to comply with these Terms. You may not access and use SkillCounty if You do not agree to the
              version of the Terms posted at the time You access SkillCounty.<br/> The terms &quot;We&quot; and &quot;Us&quot; refer to
              Interview street
              Incorporation, a s759labs doing business as SkillCounty. Acceptance of the SkillCounty Terms<br/> Your
                access to SkillCounty is subject to these Terms. We reserve the right to update and change these Terms
                from time to time without notice
                or acceptance by You, although if we decide to materially change all or part of the Terms, we will send
                You a notification through the SkillCounty site. Such modified Terms will become effective upon the
                earlier of (i) Your continued use
                of SkillCounty after We send a notification to You through the SkillCounty site; or (ii) thirty (30)
                days from publication of such modified Terms on this page. Your use of SkillCounty is also subject to
                the SkillCounty Privacy Policy,
                which explains how we treat Your personal information, and provides information about our data
                protection practices.<br/> Account Information; Access.<br/> SkillCounty is not available to persons under
                  the age of thirteen (13) or to anyone
                  suspended or removed from SkillCounty. By using SkillCounty, You represent and warrant that You are at
                  least thirteen (13) years of age and that You are of legal age to form a binding contract in Your
                  place
                  of residence, and are not a
                  person barred from receiving services under the laws of the United States or other applicable
                  jurisdiction. We reserve the right to refuse registration of, or cancel, any SkillCounty Account or
                  access to SkillCounty by anyone in Our reasonable
                  discretion, at any time. SkillCounty Accounts will be accessed through a username and password that
                  You
                  will create (Your “Credentials”). Your Credentials are solely for Your use and must not be shared.
                  Each
                  SkillCounty online community
                  (each “Hacker”), needs to have his or her own SkillCounty Account and Credentials. You agree that Your
                  Credentials and information You provide upon registration of Your SkillCounty Account and at all other
                  times will be true, accurate,
                  current, and complete. You are responsible for maintaining the confidentiality of Credential, and for
                  all activities that occur under Your SkillCounty Account. You agree to immediately notify Us of any
                  unauthorized use of Your SkillCounty
                  Account, Credentials, or any other breach of security. You agree that We will not be liable for any
                  loss
                  or damage arising from Your failure to provide Us with accurate information or to keep Your
                  Credentials
                  secure.<br/>
            </p><h3 className="text-xl text-primary">Content</h3>
            <p>SkillCounty provides certain features which enable Hackers to submit, post, and share data, text,
              software, graphics, messages or other material (“Content”). Content that Hackers submit, post or share
              is subject to Terms. Content that
              You own and post on or through SkillCounty belongs to You and You may use it in any way, except as
              prohibited by applicable law or regulations. By using SkillCounty, You are granting Us permission to use
              the Content as described in
              these Terms. By using SkillCounty You are granting Us a non-exclusive, worldwide, royalty-free, fully
              paid-up, sublicenseable, irrevocable and transferable right and license to use, host, store, reproduce,
              create derivative works of,
              distribute, modify, display, and communicate Your Content. If You post Content on or through
              SkillCounty, You represent and warrant that You have the right to post the Content and to grant the
              above rights to Us. This license continues
              even if You terminate Your SkillCounty Account and/or stop using SkillCounty. You understand that by
              posting Your Content that You are responsible for Your Content and any Content that You create, transmit
              or display while using SkillCounty,
              and for any consequences thereof. You further agree that under no circumstances will We be liable for
              the errors or omissions associated with Your Content. You represent and agree to all of the following
              and acknowledge We are explicitly
              relying on such representations and agreement with regard to Your Content and use of Content made
              available on SkillCounty: The Content represents Your own original work and/or You have all necessary
              rights to disclose the Content.
              In doing so, You are not violating the rights of any third party and You know of no other individual or
              entity whose rights will be infringed or violated by the Content being viewed and used as described in
              these Terms. You agree to
              use SkillCounty only for purposes that are legal, proper and in accordance with these Terms. Your
              disclosure of Your Content does not violate a confidential relationship with any third party or
              establish a confidential relationship
              Us. You understand that You are responsible for Your Content that You upload, post, e-mail, transmit, or
              otherwise make available through SkillCounty. Except as permitted in these Terms, You do not have the
              rights to use, reproduce,
              create derivative works of, distribute, publicly perform or publicly display any Content that does not
              belong to You, other than viewing of Content or the associated Challenges on or through the SkillCounty.
              We cannot and need not
              control all Content posted by Hackers on or through SkillCounty, and We do not guarantee the accuracy,
              integrity or quality of such Content. You agree that under no circumstances will We be liable in any way
              for any Content, including
              any errors or omissions in any Content, or any loss or damage of any kind incurred as a result of Your
              use of any Content. You understand that You must evaluate and bear all risks associated with the use of
              any Content, including any
              reliance on the Content, integrity, and accuracy of such Content. We do not endorse and are not
              responsible for the accuracy, usefulness, safety, or of or relating to Content. YOU AGREE TO WAIVE, AND
              HEREBY DO WAIVE, ANY LEGAL OR EQUITABLE
              RIGHTS OR REMEDIES YOU HAVE OR MAY HAVE AGAINST US WITH RESPECT THERETO. We reserve the right, in Our
              reasonable discretion, to refuse certain Content to be uploaded to and/or hosted by SkillCounty, or to
              edit or remove any Content
              at any time with or without notice. Without limiting the generality of the preceding sentence, We comply
              with the Digital Millennium Copyright Act, and will remove Content upon receipt of a compliant takedown
              notice (see the “Copyright
              Infringement” section below). You are solely responsible for Your Content and the consequences of
              posting or publishing it. In connection with Your Content, You affirm, represent, and warrant that: (i)
              You own, or have the necessary
              licenses, rights, consents, and permissions to use and authorize Us to use all patent, trademark,
              copyright, or other proprietary rights in and to Your Content to enable inclusion and use of Your
              Content in the manner contemplated
              by these Terms, and to grant the rights and license set forth above, and (ii) Your Content, Our use of
              Your Content pursuant to these Terms, and exercise of the license rights set forth above, do not and
              will not: infringe, violate,
              or misappropriate any third party right, including any copyright, trademark, patent, trade secret, moral
              right, Privacy Right, right of publicity, or any other intellectual property or proprietary right;
              slander, defame, libel, or
              invade the right of privacy, publicity, or other property rights of any other person; violate any
              applicable law or regulation; or require obtaining a license from or paying fees or royalties to any
              third party for the exercise of
              any rights granted in these Terms, including, by way of example and not limitation, the payment of any
              royalties to any copyright owners, including any royalties to any agency, collection society, or other
              entity that administers such
              rights on behalf of others. If You provide Us with any comments, bug reports, feedback, or modifications
              proposed or suggested by You (“Feedback”), We shall have the right to use such Feedback at Our
              discretion, including, but not
              limited to the incorporation of such suggested changes into SkillCounty and/or our other products and
              services. You hereby grant to Us a perpetual, irrevocable, non-exclusive license under all rights
              necessary to incorporate and use
              Your Feedback for any purpose.</p>
            <h3 className="text-xl text-primary">Code of Conduct</h3>
            <p>
              We have the right, but not the obligation, to remove or block Content from SkillCounty that We determine
              in Our reasonable discretion to be in violation of these Terms, to be unlawful, offensive, threatening,
              libelous, defamatory, obscene or otherwise
              objectionable, that violates any party&apos;s intellectual property or that is detrimental to the quality or
              intended spirit of SkillCounty. We also have the right, but not the obligation, to limit or revoke the
              use privileges of the SkillCounty
              Account of any Hacker who posts such Content or engages in such behavior. You alone are responsible for
              Your interaction with other Hackers via SkillCounty. If You have a dispute with one or more Hackers or
              if You disagree with the results
              of a Challenge, Your sole remedy is to cease using SkillCounty. You irrevocably and forever release Us
              (and Our officers, directors, agents, subsidiaries, contractors, joint ventures and employees) from
              claims, demands and damages (actual
              and consequential) of every kind and nature, known and unknown, arising out of or in any way connected
              with such disputes. IF YOU ARE A CALIFORNIA RESIDENT, YOU WAIVE CALIFORNIA CIVIL CODE SECTION 1542,
              WHICH STATES: “A GENERAL RELEASE
              DOES NOT EXTEND TO CLAIMS WHICH THE CREDITOR DOES NOT KNOW OR SUSPECT TO EXIST IN HIS FAVOR AT THE TIME
              OF EXECUTING THE RELEASE, WHICH IF KNOWN BY HIM MUST HAVE MATERIALLY AFFECTED HIS SETTLEMENT WITH THE
              DEBTOR.” We do not permit copyright
              infringing activities through SkillCounty and We reserve the right to terminate access to SkillCounty
              and remove all content submitted by any persons who are found to be repeat infringers. Any suspected
              fraudulent, abusive, or illegal
              activity may be grounds for termination of Your use of SkillCounty and may be referred to appropriate
              law enforcement authorities. These remedies are in addition to any other remedies We may have at law or
              in equity. We will use common
              business sense regarding behavior or Content allowed on or through SkillCounty. Examples of unacceptable
              Content or behavior include: Abuse, harassment, threats, flaming or intimidation of any person or
              organization. Uploading or sending
              pornographic, threatening, embarrassing, hateful, racially or ethnically insulting, libelous, or
              otherwise inappropriate Content. Uploading copyrighted material that is not Your own or that You do not
              have the legal right to distribute,
              display, and otherwise make available to others. Making unsolicited offers, advertisements, proposals,
              or sending junk mail (aka spam) Impersonating another person or pretending to be affiliated with an
              organization with which You are
              not affiliated or misrepresenting the extent of Your affiliated or role with an affiliated organization
              or the source, identity or Content transmitted. Engaging in or contributing to any illegal activity or
              activity that violates others’
              rights. Use of derogatory, discriminatory or excessively graphic language. Transmitting worms, viruses
              or harmful software. Disclosing the personal or proprietary information of another person or
              organization not otherwise permitted by
              applicable rules or law. Sharing SkillCounty Accounts or Credentials with any third party or encouraging
              any other Hacker to do so.
            </p>
            <h3 className="text-xl text-primary">International Use</h3>
            <p>
              SkillCounty is hosted in the United States. If You use SkillCounty from outside the United States, You
              acknowledge that You are voluntarily transferring information, including personally identifiable
              information and Content to the United States and that
              You agree that Our collection, use, storage and sharing of Your information and Content is exclusively
              subject to the laws of the United States and not of the jurisdiction where You are located. You agree
              that You will comply with all
              United States laws, rules and regulations applicable to the export of products, services, software and
              technical data regardless of the jurisdiction in which You are located.
            </p>
            <h3 className="text-xl text-primary">Termination</h3>
            <p>We, in Our reasonable discretion may terminate Your SkillCounty Account and/or Credentials and remove and
              discard any Content within SkillCounty if We believe that You have violated or acted inconsistently with
              the letter and spirit of these
              Terms. You may terminate Your SkillCounty Account and Your right to use SkillCounty at any time and for
              any reason or no reason, by contacting Us user support at support@SkillCounty.com. However, if You have
              a separate agreement with Us
              which has conflicting terms regarding termination, those terms shall take precedence. After cancellation
              or termination of Your SkillCounty Account for any reason, You will no longer have access to Your
              SkillCounty Account and all information
              and Content in Your SkillCounty Account or that You have stored on SkillCounty may be, but is not
              required to be deleted by Us. We will have no liability for information or Content that is deleted due
              to the cancellation or termination
              of Your SkillCounty Account for any reason.</p>
            <h3 className="text-xl text-primary">Policies Regarding Copyright</h3>
            <p>If You believe that any content available through SkillCounty infringes Your copyright, You may submit a
              notification pursuant to the United States’ Digital Millennium Copyright Act (“DMCA”) by providing our
              Copyright Agent with information
              by going to dmca.</p>
            <h3 className="text-xl text-primary">Ownership; Proprietary Rights.</h3>
            <p>
              SkillCounty is owned and operated by s759Labs Incorporated. The visual interfaces, graphics,
              design, compilation, information, computer code, products, software (including any downloadable
              software), services, and all other elements of SkillCounty
              provided by s759Labs (“Materials”) are protected by United States copyright, trade dress, patent,
              and trademark laws, international conventions, and all other relevant intellectual property and
              proprietary rights, and applicable
              laws. Except for any third party content or Content uploaded by You, all Materials are the copyrighted
              property of s759Labs or its subsidiaries or affiliated companies and/or third party licensors.
              All trademarks, service marks,
              and trade names are proprietary to s759Labs or its affiliates and/or third party licensors.
              Except as expressly authorized by s759Labs, You agree not to sell, license, distribute, copy,
              modify, publicly perform or display,
              transmit, publish, edit, adapt, create derivative works from, or otherwise make unauthorized use of the
              Materials.
            </p>
            <h3 className="text-xl text-primary">Third Party Websites and Services.</h3>
            <p>SkillCounty may include links to third party web sites or services (“Linked Sites”) solely as a
              convenience. We do not endorse any such Linked Sites or the information, material, products, or services
              contained on other Linked Sites or accessible
              through other Linked Sites. Furthermore, We make no express or implied warranties with regard to the
              information, material, products, or services that are contained on or accessible through Linked Sites.
              Access and use of Linked Sites,
              including the information, material, products, and services on Linked Sites or available through Linked
              Sites, is solely at Your own risk.</p>
            <h3 className="text-xl text-primary">Disclaimers/ No Warranties. Limitation of Liability</h3>
            <p>EXCEPT AS MAY BE SET FORTH IN ANY SEPARATE SIGNED AGREEMENT BY s759Labs AND YOU, SkillCounty IS
              PROVIDED &quot;AS IS&quot; WITH NO REPRESENTATIONS OR WARRANTIES OF ANY KIND, EXPRESS, STATUTORY OR IMPLIED, AS TO
              THE OPERATION OF SkillCounty, OR
              THE INFORMATION, CONTENT, MATERIALS, OR PRODUCTS INCLUDED ON SkillCounty. TO THE FULLEST EXTENT
              PERMISSIBLE BY APPLICABLE LAW, s759Labs AND ITS AFFILIATES, IF ANY, DISCLAIM ALL WARRANTIES,
              EXPRESS, STATUTORY, OR IMPLIED, INCLUDING,
              BUT NOT LIMITED TO, IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
              NON INFRINGEMENT. FURTHER, s759Labs AND ITS AFFILIATES DO NOT WARRANT THE ACCURACY OR
              COMPLETENESS OF THE INFORMATION, TEXT, GRAPHICS,
              LINKS OR OTHER INFORMATION CONTAINED IN SkillCounty. SOME JURISDICTIONS DO NOT ALLOW LIMITATIONS ON
              IMPLIED WARRANTIES, SO THE ABOVE LIMITATIONS MAY NOT APPLY TO YOU. EXCEPT AS MAY BE SET FORTH IN ANY
              SEPARATE SIGNED AGREEMENT BETWEEN
              s759Labs AND A YOU, s759Labs DOES NOT WARRANT THAT SkillCounty WILL BE AVAILABLE AT ANY
              TIME OR FROM ANY PARTICULAR LOCATION, WILL BE SECURE OR ERROR FREE, THAT DEFECTS WILL BE CORRECTED, OR
              THAT SkillCounty IS FREE OF VIRUSES
              OR OTHER POTENTIALLY HARMFUL COMPONENTS. NO ADVICE OR INFORMATION, WHETHER ORAL OR WRITTEN, OBTAINED
              FROM s759Labs OR SkillCounty SHALL CREATE ANY WARRANTY NOT EXPRESSLY STATED IN THESE TERMS OF
              SERVICE. EXCEPT AS MAY BE SET FORTH
              IN ANY SEPARATELY SIGNED AGREEMENT BETWEEN s759Labs AND YOU, NEITHER s759Labs NOR ITS
              AFFILIATES WILL BE LIABLE, UNDER ANY THEORY OF LAW, FOR ANY INDIRECT, INCIDENTAL, PUNITIVE, OR
              CONSEQUENTIAL DAMAGES, INCLUDING, BUT NOT
              LIMITED TO LOSS OF PROFITS OR, BUSINESS INTERRUPTION, AND/OR LOSS OF INFORMATION OR DATA. SOME
              JURISDICTIONS DO NOT ALLOW THE EXCLUSION OR LIMITATION OF INCIDENTAL OR CONSEQUENTIAL DAMAGES, SO THE
              ABOVE LIMITATIONS AND EXCLUSIONS MAY NOT
              APPLY TO YOU. NOTWITHSTANDING ANYTHING TO THE CONTRARY CONTAINED HEREIN, s759Labs’S MAXIMUM
              AGGREGATE LIABILITY TO YOU FOR ANY CAUSES WHATSOEVER, AND REGARDLESS OF THE FORM OF ACTION, WILL AT ALL
              TIMES BE LIMITED TO THE GREATER
              OF (i) THE AMOUNT PAID, IF ANY, BY YOU TO s759Labs FOR SkillCounty IN THE SIX (6) MONTHS PRIOR TO
              THE ACTION GIVING RISE TO LIABILITY OR (ii) ONE HUNDRED DOLLARS ($100.00).</p>
            <h3 className="text-xl text-primary">Indemnification</h3>
            <p>You agree to indemnify and hold s759labs, its affiliated companies, suppliers, partners, officers,
              contractors and employees harmless from any claim or demand made by any third party due to or arising
              out of (i) Your actions in using SkillCounty,
              (ii) a claim that You, or any third party using Your Credentials, infringed any intellectual property or
              other right of any person or organization using SkillCounty, or (iii) the violation of these Terms by
              You or any third party using
              Your Credentials. s759Labs reserves the right, at our own expense, to assume the exclusive
              defense and control of any matter for which You are required to indemnify Us, and You agree to cooperate
              with Our defense of these claims.
              This indemnity shall not apply if a third party uses Your Credentials due to an act or omission of
              s759Labs.</p>
            <h3 className="text-xl text-primary">Miscellaneous.</h3>
            <p>These Terms will remain in full force and effect while You use SkillCounty. Those terms that can continue
              to operate after You stop using SkillCounty (including without limitation Your Content license to Us and
              the general terms in this Section),
              will survive after You stop using SkillCounty. You agree that regardless of any statute of law to the
              contrary or any claim or cause of action arising out of or related to use of SkillCounty or these Terms
              must be filed within one (1)
              year after such claim or cause of action arose or be forever barred. You agree that We may provide You
              with notices, including those regarding changes to these Terms, via notification through SkillCounty’s
              notification functionality. Our
              failure to exercise or enforce any right or provision of these Terms shall not constitute a waiver of
              such right or provision. If any provision of these Terms is found by a court of competent jurisdiction
              to be invalid, the parties nevertheless
              agree that the court should endeavor to give effect to the parties’ intentions as reflected in the
              provision, and the other provisions of these Terms shall remain in full force and effect. You may not
              assign Your SkillCounty Account or
              any rights and licenses granted hereunder and such any assignment by You will be null and void. All
              sections of these Terms that by their respective nature should survive the cancellation or termination
              of these Terms shall survive the
              termination or cancellation of these Terms. You agree that breach of these provisions will cause
              irreparable harm and that accordingly We may seek injunctive relief in addition to any other legal
              remedies under these Terms at law or equity.
              You agree that except as otherwise expressly provided for in these Terms, there shall be no third party
              beneficiaries to the Terms. These Terms (including any additional terms, conditions, policies and
              agreements incorporated herein) are
              the entire agreement between s759labs and You regarding SkillCounty. Any dispute arising from or related
              to these Terms will be governed by the laws of the State of California without regard to conflict of law
              principles. You agree to
              submit to the personal and exclusive jurisdiction of the courts located within the county of Santa Clara
              County, California.</p>
            <h3 className="text-xl text-primary">SkillCounty Jobs Terms of Service </h3>
            <p>These Terms of Service (the &quot;Terms&quot;) govern Your access to and use of the SkillCounty Jobs website,
              online services and mobile applications (collectively,&quot;SkillCounty Jobs&quot;). By accessing and using
              SkillCounty Jobs, You agree to comply with
              these Terms. You may not use SkillCounty Jobs if You do not agree to the version of the Terms posted at
              the time You access SkillCounty Jobs. The terms &quot;We,&quot; &quot;Us,&quot; and &quot;SkillCounty&quot; refer to s759labs, a
              s759labs doing business as SkillCounty.
              <br/><br/>1. Eligibility to Use SkillCounty Jobs<br/> To access or use SkillCounty Jobs, You must be 18
                years of age or older and have the power and authority to enter into these Terms. Except as approved by
                Us, SkillCounty Jobs is for Your
                personal, non-commercial use. You may not use SkillCounty Jobs if we have terminated Your account or
                banned You.<br/>2. Your SkillCounty Account SkillCounty Account.<br/>In order to access and use
                  SkillCounty Jobs, We require You to become
                  a member of the SkillCounty online community by creating a SkillCounty account using Your
                  name, email address, mobile telephone number and creating a password. Additional account registration
                  requirements may also apply. You
                  are entirely responsible for maintaining the confidentiality of Your password. You agree not to use
                  the
                  account or password of another Hacker at any time. You agree to notify SkillCounty immediately if You
                  suspect any unauthorized use
                  of Your account or access to Your password. You are solely responsible for any and all use of Your
                  account. Passwords are subject to cancellation or suspension by SkillCounty at any time. Social Sign
                  In.If You access SkillCounty through
                  a social networking site such as Facebook or Google+ (&quot;Social Networking Site&quot;), You agree that
                  SkillCounty Jobs may access and store (if applicable) information (including personally identifiable
                  information) accessible to SkillCounty
                  Jobs through Your Social Networking Site subject to the privacy settings that You have set with the
                  Social Networking Site so that the information is available on and through SkillCounty Jobs via Your
                  SkillCounty account and corresponding
                  SkillCounty profile page. You acknowledge and agree that Your relationships with Your Social
                  Networking
                  Sites are governed solely by Your agreements with those Social Networking Sites and SkillCounty is not
                  liable for any information,
                  including personally identifiable information that may be provided to SkillCounty by Your Social
                  Networking Site in violation of the privacy settings that You have set with Your Social Networking
                  Sites.
            </p>
            <br/>3. Your Use of SkillCounty Jobs<br/>
              <p>Browse Jobs.You can use SkillCounty Jobs to browse available software developer jobs posted by top
                companies in select regions (each a&quot;Company&quot;). Take Challenges.When You identify a job that interests
                You, You can request to solve a software
                coding challenge (&quot;Challenge&quot;) from the Company that posted the job. Once You&apos;ve submitted a request to
                take a Challenge, You will receive the Challenge via email. You may start the Challenge when convenient
                for You, but it&apos;s recommended
                that You take the Challenge within a few days to help ensure that Your Challenge submission is received
                by the Company before the job is closed. Once started, the Challenge must be solved within the time
                limit specified and You may only
                take the Challenge once. Get Responses.When You complete a Challenge, Your code in response to the
                Challenge will be submitted to the Company together with the profile information from Your SkillCounty
                Account that You choose to share
                with the Company. Rules of Conduct.You agree to use SkillCounty Jobs solely for lawful purposes in a
                manner consistent with these Terms and any and all applicable laws, regulations, or other binding
                obligations (including contractual obligations)
                You may have. You agree that You will not: Consult and/or copy code from any source including a website,
                book, friend, or colleague in Your efforts to complete a Challenge; Use any information obtained from
                SkillCounty in order to harass,
                abuse, or harm another person, or in order to contact, advertise to, solicit, or sell to any person or
                entity (including Companies) without their prior explicit consent; Use SkillCounty and/or SkillCounty
                Jobs to post content that is offensive,
                or promotes racism, bigotry, hatred or physical harm of any kind against any group or individual, or is
                pornographic or sexually explicit in nature, bullies, harasses or advocates stalking, bullying, or
                harassment of another person, or
                is abusive, threatening, obscene, defamatory or libelous; Introduce software or automated agents to
                SkillCounty and/or SkillCounty Jobs, or access SkillCounty and/or SkillCounty Jobs so as to produce
                multiple SkillCounty accounts, generate
                automated messages, or to strip or mine data from SkillCounty and/or SkillCounty Jobs; Interfere with,
                disrupt, or create an undue burden on SkillCounty and/or SkillCounty Jobs, or the networks, systems, or
                services connected to SkillCounty
                and/or SkillCounty Jobs; Interfere with, disrupt, modify, reverse engineer, or decompile any data or
                functionality of SkillCounty and/or SkillCounty Jobs.</p>
              <br/>4. Sharing Your Information on SkillCounty Jobs
                <p>Your Responsibility for Your Information. You are solely responsible for any and all content and
                  information that is submitted through Your SkillCounty account to SkillCounty and/or SkillCounty Jobs,
                  including the information and representations
                  that You make in Your SkillCounty account and corresponding SkillCounty profile and the code You
                  submit
                  in response to a Challenge (&quot;Your Information&quot;). Representations Regarding Your Information. You
                  represent and warrant that: You own
                  Your Information or otherwise have the right to provide, post, and/or share Your Information via
                  SkillCounty and/or SkillCounty Jobs as described in these Terms; Your Information does not violate the
                  privacy rights, publicity rights, copyright
                  rights, or other rights of any person or entity; By providing, posting and/or sharing Your
                  Information,
                  You do not violate any binding confidentiality, non-disclosure, or contractual obligations You might
                  have towards a third party, including
                  Your current or former employer or any potential employer; Your Information is accurate and correct,
                  including any salary information or Your current, past or potential status as an employee; and Any
                  resume You upload and share is accurate
                  and submitted on Your own behalf. Submitting Your Information. By submitting Your Information to
                  SkillCounty Jobs, You hereby grant to SkillCounty an unrestricted, irrevocable, perpetual,
                  non-exclusive, fully-paid and royalty-free, license
                  (with the right to sublicense through unlimited levels of sublicensees) to use, copy, perform,
                  display,
                  create derivative works of, and distribute Your Information in any and all media (now known or later
                  developed) throughout the world.
                  No compensation will be paid with respect to Your Information. You should only submit Your Information
                  to SkillCounty Jobs that You are comfortable sharing with others under the terms and conditions of
                  these
                  Terms. Feedback. At Your discretion,
                  You may provide feedback to SkillCounty concerning the functionality and performance of SkillCounty
                  Jobs
                  from time to time, including, without limitation, identifying potential errors, improvements,
                  modifications, bug fixes, or enhancements
                  (&quot;Feedback&quot;). If You, through Your evaluation or otherwise, suggests any Feedback, You hereby grant
                  Indeed a nonexclusive, worldwide, perpetual, irrevocable, royalty-free, sublicensable (through
                  multiple
                  layers of sublicensees) right and
                  license to make, use, sell, sublicense, reproduce, distribute, perform, display, prepare derivative
                  works from and otherwise exploit all such Feedback and materials for any purpose without restriction.
                  You agree that SkillCounty may disclose
                  that Feedback to any third party in any manner and You agree that SkillCounty has the ability to
                  sublicense all Feedback in any form to any third party without restriction. By submitting any
                  Feedback,
                  You agree that Your disclosure is
                  gratuitous, unsolicited and without restriction and will not place SkillCounty under any fiduciary or
                  other obligation, and that We are free to use the Feedback without any additional compensation to You,
                  and/or to disclose the Feedback
                  on a non-confidential basis or otherwise to anyone. You further acknowledge that, by acceptance of
                  Your
                  Feedback, SkillCounty does not waive any rights to use similar or related ideas previously known to
                  SkillCounty, or developed by its
                  employees, or obtained from sources other than You.</p>
                <br/>5.Company Information on SkillCounty Jobs
                  <p>Information provided by Companies is made available to You through SkillCounty Jobs, including
                    company
                    profiles, reviews, photos, job descriptions, and salary information (&quot;Company Information&quot;). Because
                    SkillCounty does not control the Company
                    Information, You acknowledge and agree that: (a) SkillCounty is not responsible for, and does not
                    endorse any Company Information; (b) SkillCounty makes no guarantees about the accuracy,
                    suitability, or
                    quality of the Company Information;
                    and (c) SkillCounty assumes no responsibility for inaccurate, misleading, or unlawful Company
                    Information. SkillCounty and/or SkillCounty Jobs may contain links to Company websites. Your use of
                    all
                    such links to Company websites is at
                    Your own risk. SkillCounty does not monitor or have any control over, and makes no claim or
                    representation regarding any Company websites. To the extent such links are provided by SkillCounty,
                    they are provided only as a convenience, and
                    a link to a Company website does not imply our endorsement, adoption or sponsorship of, or
                    affiliation
                    with, such Company website. When You leave SkillCounty and/or SkillCounty Jobs, these Terms no
                    longer
                    govern. <br/>6. Reservation of
                      Rights
                      <br/> SkillCounty and its third party suppliers and partners hereby reserve all rights in and to
                        SkillCounty Jobs and the underlying or related software for SkillCounty Jobs (collectively,
                        the&quot;Software&quot;). Nothing in this Agreement will
                        be deemed to grant any license therein other than to access and use SkillCounty Jobs as
                        described in
                        Section 3 above. You may not copy, decompile, disassemble, reverse engineer, reverse assemble,
                        analyze
                        or otherwise examine, prepare derivative
                        works of, modify, or attempt to derive source code from any portion of SkillCounty Jobs or the
                        Software.
                        You may not frame or utilize framing techniques to enclose any marks of SkillCounty, the
                        Companies, or
                        other proprietary information
                        (including images, text, page, layout or form), without SkillCounty’s prior written
                        consent. <br/>7.
                          Disclaimer of Warranties <br/> SkillCounty disclaims any and all responsibility and liability
                            for the
                            accuracy, completeness, legality,
                            reliability, or operability or availability of information or content displayed or posted on
                            SkillCounty
                            Jobs by SkillCounty or third parties including, but not limited to the Companies.
                            SkillCounty disclaims
                            any responsibility for the
                            deletion, failure to store, miss-delivery, or untimely delivery of any information or
                            content.
                            SkillCounty disclaims any responsibility for any harm resulting from downloading or
                            accessing any
                            information or content from SkillCounty Jobs
                            or on websites accessed through SkillCounty Jobs. Under no circumstances shall SkillCounty
                            be liable to
                            You on account of Your use or misuse of or reliance on SkillCounty Jobs.<br/> SkillCounty
                              JOBS, AND ALL
                              INCLUDED INFORMATION, CONTENT,
                              MATERIALS AND SERVICES ARE PROVIDED “AS IS,” WITH NO WARRANTIES WHATSOEVER, EITHER EXPRESS
                              OR IMPLIED.
                              SkillCounty AND ITS LICENSORS AND PARTNERS (INCLUDING THE COMPANIES) EXPRESSLY DISCLAIM TO
                              THE FULLEST
                              EXTENT PERMITTED BY LAW ALL EXPRESS,
                              IMPLIED, AND STATUTORY WARRANTIES, INCLUDING, WITHOUT LIMITATION, THE WARRANTIES OF
                              MERCHANTABILITY,
                              FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT OF PROPRIETARY RIGHTS. SkillCounty
                              AND ITS
                              LICENSORS AND PARTNERS (INCLUDING THE
                              COMPANIES) DISCLAIM ANY WARRANTIES REGARDING THE SECURITY, RELIABILITY, TIMELINESS, AND
                              PERFORMANCE OF
                              SkillCounty JOBS. SkillCounty AND ITS LICENSORS AND PARTNERS (INCLUDING THE COMPANIES)
                              DISCLAIM ANY
                              WARRANTIES FOR ANY INFORMATION OR
                              ADVICE OBTAINED THROUGH SkillCounty JOBS. YOU UNDERSTAND AND AGREE THAT YOUR USE OF
                              SkillCounty JOBS IS
                              AT YOUR OWN DISCRETION AND RISK AND THAT YOU WILL BE SOLELY RESPONSIBLE FOR ANY DAMAGES TO
                              YOUR COMPUTER
                              SYSTEM OR LOSS OF DATA THAT
                              RESULTS FROM THE USE OF SkillCounty JOBS. <br/>8.Limitation of Liability<br/> UNDER NO
                                CIRCUMSTANCES SHALL
                                SkillCounty OR ITS LICENSORS OR PARTNERS (INCLUDING THE COMPANIES) BE LIABLE TO YOU OR
                                SkillCounty JOBS
                                USER ON ACCOUNT OF USE OR
                                MISUSE OF OR RELIANCE ON SkillCounty JOBS, ARISING FROM ANY CLAIM RELATING TO THESE
                                TERMS OR THE SUBJECT
                                MATTER HEREOF. SUCH LIMITATION OF LIABILITY SHALL APPLY TO PREVENT RECOVERY OF DIRECT,
                                INDIRECT,
                                INCIDENTAL, CONSEQUENTIAL, SPECIAL,
                                EXEMPLARY, AND PUNITIVE DAMAGES WHETHER SUCH CLAIM IS BASED ON WARRANTY, CONTRACT, TORT
                                (INCLUDING
                                NEGLIGENCE), INDEMNITY, OR OTHERWISE, EVEN IF SkillCounty OR ITS LICENSORS OR PARTNERS
                                (INCLUDING THE
                                COMPANIES) HAVE BEEN ADVISED OF THE
                                POSSIBILITY OF SUCH DAMAGES AND NOTWITHSTANDING THE FAILURE OF ESSENTIAL PURPOSE OF ANY
                                REMEDY. SUCH
                                LIMITATION OF LIABILITY SHALL APPLY WHETHER THE DAMAGES ARISE FROM USE OR MISUSE OF AND
                                RELIANCE ON
                                SkillCounty JOBS, FROM RELIANCE OR
                                DAMAGE CAUSED BY INFORMATION POSTED ON SkillCounty JOBS, FROM INABILITY TO USE
                                SkillCounty JOBS, OR FROM
                                THE INTERRUPTION, SUSPENSION, OR TERMINATION OF SkillCounty JOBS (INCLUDING SUCH DAMAGES
                                INCURRED BY
                                THIRD PARTIES). THIS LIMITATION
                                SHALL ALSO APPLY, WITHOUT LIMITATION, TO THE COSTS OF PROCUREMENT OF SUBSTITUTE GOODS OR
                                SERVICES, LOST
                                PROFITS, OR LOST DATA. SUCH LIMITATION SHALL FURTHER APPLY WITH RESPECT TO THE
                                PERFORMANCE OR
                                NON-PERFORMANCE OF SkillCounty JOBS OR
                                ANY INFORMATION THAT APPEARS ON, OR IS LINKED OR RELATED IN ANY WAY TO SkillCounty JOBS.
                                SUCH LIMITATION
                                SHALL APPLY NOTWITHSTANDING ANY FAILURE OF ESSENTIAL PURPOSE OF ANY LIMITED REMEDY AND
                                TO THE FULLEST
                                EXTENT PERMITTED BY LAW.<br/> Without limiting the foregoing, under no circumstances
                                  shall SkillCounty or
                                  its licensors or partners (including the Companies) be held liable for any delay or
                                  failure in
                                  performance resulting directly or indirectly from acts of nature,
                                  forces, or causes beyond its reasonable control, including, without limitation,
                                  Internet failures,
                                  computer equipment failures, telecommunication equipment failures, other equipment
                                  failures, electrical
                                  power failures, strikes, labor disputes,
                                  riots, insurrections, civil disturbances, shortages of labor or materials, fires,
                                  floods, storms,
                                  explosions, acts of God, war, governmental actions, orders of domestic or foreign
                                  courts or tribunals,
                                  non-performance of third parties,
                                  or loss of or fluctuations in heat, light, or air conditioning.<br/> 9.
                                    Termination <br/>These Terms
                                      remain in effect while You use SkillCounty Jobs and for as long as Your
                                      SkillCounty account remains
                                      open. You may delete Your account at
                                      any time. SkillCounty may suspend or terminate Your account and/or Your access
                                      SkillCounty Jobs without
                                      notice to You if we believe that You have violated these Terms. All provisions of
                                      these Terms shall
                                      survive termination or expiration
                                      of these Terms except those granting access to or use of SkillCounty Jobs.
                                      SkillCounty will have no
                                      liability whatsoever to You for any termination of Your account or related
                                      deletion of Your
                                      Information.<br/> 10.Changes to Terms<br/> We
                                        may revise these Terms from time to time by posting an updated version on
                                        SkillCounty Jobs and You agree
                                        that the revised Terms will be effective fifteen (15) days after the change is
                                        posted. Your continued
                                        use of SkillCounty Jobs is subject
                                        to the most current effective version of these Terms.<br/> 11. Governing Law;
                                          Venue <br/> These Terms
                                            shall be governed by and construed in accordance with the internal laws of
                                            the State of California
                                            without reference to the conflict of
                                            laws provisions thereof. Any disputes relating to the interpretation,
                                            execution or enforcement of these
                                            Terms or arising between You and SkillCounty shall be dealt with under the
                                            exclusive jurisdiction and
                                            venue of the courts of the State
                                            of California, sitting in Santa Clara County, or the United States Federal
                                            Court for the District of
                                            California, and the Parties irrevocably submit for all purposes to the
                                            jurisdiction of each such
                                            court.<br/> 12. Other <br/>Except as specifically
                                              stated in another agreement we have with You, these Terms constitute the
                                              entire agreement between You
                                              and SkillCounty regarding the use of SkillCounty Jobs and these Terms
                                              supersede all prior proposals,
                                              negotiations, agreements, and understandings
                                              concerning the subject matter of these Terms. You represent and warrant
                                              that no person has made any
                                              promise, representation, or warranty, whether express or implied, not
                                              contained herein to induce You to
                                              agree to these Terms. SkillCounty’s
                                              failure to exercise or enforce any right or provision of these Terms shall
                                              not operate as a waiver of
                                              such right or provision. If any provision of these Terms is found to be
                                              unenforceable or invalid, then
                                              only that provision shall be modified
                                              to reflect the parties&apos; intention or eliminated to the minimum extent
                                              necessary so that these Terms
                                              shall otherwise remain in full force and effect and enforceable. These
                                              Terms, and any rights or
                                              obligations hereunder, are not assignable,
                                              transferable or sublicensable by You except with SkillCounty&apos;s prior
                                              written consent, but may be
                                              assigned or transferred by SkillCounty without restriction. Any attempted
                                              assignment by You shall
                                              violate these Terms and be void. The Section
                                              titles in these Terms are for convenience only and have no legal or
                                              contractual effect; as used in these
                                              Terms, the word &quot;including&quot; means &quot;including but not limited to.&quot; Please
                                              contact SkillCounty with any
                                              questions regarding these Terms
                                              at support@SkillCounty.com.
                  </p>
          </div>
        </section>
      </main>
      <DemoForm />

      <OnTopBgTrapez />
      <Footer />
    </div>
)
}

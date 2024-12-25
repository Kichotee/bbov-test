import React, { ReactNode } from "react";
import { FaCaretDown, FaCheck } from "react-icons/fa6";
import { Menu } from "@headlessui/react";
// import { useTranslation } from "react-i18next";
import Button from "@/shared/Buttons/Button";
import LandingHeader from "../layout/navbar";
// import { DropDown } from "@/shared/Dropdown/DropDown";
import { Footer } from "../layout/footer";

type DropDownProps = {
  buttonText: string;
  children: ReactNode | string;
  buttonStyle?: string;
};

const CustonmDropDown = ({ buttonText, children, buttonStyle }: DropDownProps) => {
  const [active, setActive] = React.useState<boolean>(true);
  // const { t } = useTranslation();

  return (
    <Menu>
      <Menu.Button
        onClick={() => {
          return setActive(!active);
        }}
        className={`"font-semibold text-xl flex justify-between gap-2 items-center " ${buttonStyle}`}
      >
        {buttonText} <FaCaretDown className={`duration-150 ${active ? "-rotate-90 " : ""}`} />{" "}
      </Menu.Button>
      <Menu.Items className="flex flex-col gap-4 pt-2 ">
        <Menu.Item as="div">{children}</Menu.Item>
        <p className="bg-white z-[200]">
          Please Send CV and cover letter to{" "}
          <a
            target="_blank"
            rel="noreferrer"
            className="text-brand-primary text-underline"
            href="mailto:talents@qataloog.com"
          >
            talents@qataloog.com
          </a>
        </p>
      </Menu.Items>
    </Menu>
  );
};

const Careers = () => {
  const qataloogValues = [
    {
      heading: "Health & wellness",
      description: `Prioritize your well-being at Qataloog with comprehensive health benefits and a supportive work-life balance.`,
    },
    {
      heading: "Collaborative Learning Approach",
      description: `Join a dynamic team that values collaboration, knowledge sharing, and cross-disciplinary learning at Qataloog.`,
    },
    {
      heading: "Leading Technology Projects",
      description: ` Be part of innovative projects shaping the future of education and technology at Qataloog. Collaborate with top tech enthusiasts and make a global impact.`,
    },
    {
      heading: "Team & Culture",
      description: `Our inclusive and collaborative culture at Qataloog fosters creativity and mutual support, empowering every team member to thrive.`,
    },
    {
      heading: "Work-life Balance",
      description: `At Qataloog, we value your well-being. Enjoy flexible hours, remote work options, and ample personal time to achieve a harmonious work-life balance.`,
    },
    {
      heading: "Professional Growth",
      description: `Join Qataloog to unlock endless opportunities for your professional development. Access mentorship, training, and meaningful projects to advance your career in education technology.`,
    },
  ];
  return (
    <div className="">
      <LandingHeader />
      <div className="duration-300 default-spacing flex flex-col md:gap-6 gap-4 items-center">
        <small className="bg-brand-primary/50 px-2 font-semibold py-1 rounded">Careers</small>

        <h2 className="common-text">Join The Dream Team</h2>
        <p className="small-header-text text-sub">
          Where You Can Learn, Explore, And Grow Together!
        </p>

        <div className="my-12 text-center paragraph-text max-w-[70%] mx-auto">
          We are acknowledged as Africa’s leading learning content innovation, aggregation, and
          efficient distribution engine across Universities and Colleges. This wouldn’t have been
          possible without our employees. That’s why ensuring the professional development of our
          employees is a top priority. We combine extreme talent with cutting-edge technology to
          create flawless learning content distribution apps that win the hearts of students,
          Universities, and end-users worldwide.
        </div>
        <Button variant="contained" themeColor="main" className="text-white">
          <a href="#openings">See current Openings</a>
        </Button>
      </div>
      <div className="md:py-24 md:px-24 px-8 py-12 text-center flex flex-col grid-cols-2 gap-4  bg-neutral-greyBg">
        <div className="py-6">
          <h4 className="common-text mb-4">Why Qataloog?</h4>
          <p className="leading-8 ">
            If you choose Qataloog, you get an opportunity to work at Africa’s leading EdTech
            Startup having 3+ years of successful existence, 38+ Universities and Colleges as happy
            customers from 3 countries. We also understand the importance of a healthy work-life
            balance and support our employees in their pursuits. We provide superb facilities with
            innovative office buildings. Here are some perks you get when you choose us:
          </p>
        </div>

        <div className=" grid grid-cols-3 flex-row pt-6 flex-wrap gap-8 text-left">
          {qataloogValues.map((data) => {
            return (
              <div className="flex flex-col rounded-xl duration-200 cursor-pointer hover:outline-brand-primary hover:outline-1 hover:outline bg-white shadow-md px-6 py-4  gap-5">
                <div className="flex basis-1/3 items-center gap-4 justify-start">
                  <div className="bg-green-100  w-6 h-6 grid place-items-center rounded-full">
                    <FaCheck />
                  </div>
                  <p className="common-sub-text text-left">{data.heading}</p>
                </div>
                <div className="flex basis-2/3 justify-center flex-col">
                  <p className="text-sub text-sm leading-relaxed">{data.description}</p>
                </div>
              </div>
            );
          })}
          {/* <div className="flex flex-col  rounded-xl  bg-white shadow-md px-2 py-4 items-center gap-3">
            <div className="basis-1/3 flex flex-col items-center gap-2">
              <div className="bg-green-100  w-6 h-6 grid place-items-center rounded-full">
                <FaCheck />
              </div>
              <p className="common-sub-text">
                Leading Projects
              </p>
            </div>


            <div className="flex basis-1/2 flex-col">
              <p className="text-sub text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis consequuntur
                consectetur excepturi error nostrum quas voluptatibus accusamus animi aperiam
                deserunt?
              </p>
            </div>
          </div>
          <div className="flex flex-col  rounded-xl  bg-white shadow-md px-2 py-4 items-center gap-3">
            <div className="basis-1/3 flex flex-col items-center gap-2">
              <div className="bg-green-100  w-6 h-6 grid place-items-center rounded-full">
                <FaCheck />
              </div>
              <p className="common-sub-text">
                Leading Projects
              </p>
            </div>


            <div className="flex basis-1/2 flex-col">
              <p className="text-sub text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis consequuntur
                consectetur excepturi error nostrum quas voluptatibus accusamus animi aperiam
                deserunt?
              </p>
            </div>
          </div> */}
        </div>
      </div>

      <div className="default-spacing  justify-center" id="openings">
        <h2 className="common-text  text-center">Openings</h2>
        <ul className=" flex flex-col min-w-[75%]  items-center gap-4">
          <li className="mt-12 px-4 py-6 flex flex-col  min-w-full border border-border-secondary rounded-md gap-2">
            <CustonmDropDown buttonText="Digital Marketing strategist + manager">
              <div className="flex flex-col gap-4 px-2 ">
                <p className="border-b py-8">
                  We are seeking a Digital marketer with deep skills and experience in social media
                  marketing to email marketing. The success of the responsibilities of Qataloog’s
                  Digital Marketing Team would rest on the Digital Marketing Strategist. The ideal
                  candidate will oversee digital marketing projects from start to finish. He/she
                  will use project management tools and methods to streamline marketing workflows,
                  processes, and systems in Qataloog. Knowing how to coordinate cross-functional
                  teams and work with external teams and contributors is crucial for this role. Once
                  the digital marketing flow begins, you’d be responsible for establishing reporting
                  mechanisms to monitor execution and quality.
                </p>
                <ul className="pl-4 list-disc">
                  <li className="font-medium text-sm">Social Media strategy</li>

                  <li className="font-medium text-sm">Email newsletters</li>
                  <li className="font-medium text-sm">PPC ads management</li>
                </ul>
                <ul className="ml-4 gap-4 list-disc">
                  <li className="font-medium text-sm">
                    Conducting marketing campaign reviews and gathering feedback
                  </li>
                  <li className="font-medium text-sm">
                    Keeping track of mareting timelines and budgets
                  </li>
                  <li className="font-medium text-sm">
                    Assessing managing and mitigating digital marketing
                  </li>
                  <li className="font-medium text-sm">
                    Assigning and monitoring tasks assigned to marketing team members
                  </li>

                  <li className="font-medium text-sm">
                    Ensuring resources are well allocated for successful project delivery
                  </li>
                  <li className="font-medium text-sm">
                    Developing and implementing change management in Qataloog’s digital marketing
                    campaigns.
                  </li>
                </ul>
              </div>
            </CustonmDropDown>
          </li>
          <li className="mt-12 py-6 flex flex-col px-4  min-w-full  border border-border-secondary rounded-md gap-2">
            <CustonmDropDown buttonText="Content writer/creator">
              <div className="flex flex-col px-2 gap-4 ">
                <p>
                  A Content Writer is a professional who would be writing informative and engaging
                  articles to help Qataloog brand showcase its products. You’d write on a range of
                  subjects and are responsible for creating the best possible written or visual
                  content, from blog posts to press releases.
                </p>

                <ul className="ml-4 gap-4 list-disc">
                  <li className="font-medium text-sm">
                    Researching learning content industry-related topics (combining online sources,
                    interviews and studies)
                  </li>
                  <li className="font-medium text-sm">
                    Writing clear marketing copy to promote Qataloog’s products/services
                  </li>
                  <li className="font-medium text-sm">
                    Preparing well-structured drafts using Content Management Systems
                  </li>
                  <li className="font-medium text-sm">
                    Proofread and edit blog posts before publication
                  </li>
                  <li className="font-medium text-sm">
                    Submit work to editors for input and approval
                  </li>
                  <li className="font-medium text-sm">
                    Coordinate with marketing and design teams to illustrate articles
                  </li>
                  <li className="font-medium text-sm">
                    Conduct simple keyword research and use SEO guidelines to increase web traffic
                  </li>
                  <li className="font-medium text-sm">Promote content on social media</li>
                  <li className="font-medium text-sm">
                    Identify customers’ needs and gaps in our content and recommend new topics
                  </li>
                  <li className="font-medium text-sm">
                    Ensure all-around consistency (style, fonts, images, and tone)
                  </li>
                </ul>
              </div>
            </CustonmDropDown>
          </li>
          <li className="mt-12 py-6 flex flex-col  min-w-full px-2 border border-border-secondary rounded-md gap-2">
            <CustonmDropDown buttonText="Search Engine Optimization (SEO) Specialist">
              <div className="flex flex-col gap-4 ">
                <p className="">
                  We are looking for an SEO/SEM expert to manage all search engine optimization and
                  marketing activities. You will be responsible for managing all SEO activities such
                  as content strategy, link building and keyword strategy to increase rankings on
                  all major search networks. You will also manage all SEM campaigns on Google, Yahoo
                  and Bing in order to maximize ROI.
                </p>

                <ul className="ml-4 gap-4 flex  flex-col list-disc">
                  <li className="font-medium text-sm">
                    Execute tests, collect and analyze data and results, identify trends and
                    insights to achieve maximum ROI in paid search campaigns
                  </li>
                  <li className="font-medium text-sm">
                    Track, report, and analyze website analytics and PPC initiatives and campaigns
                  </li>
                  <li className="font-medium text-sm">
                    Manage campaign expenses, staying on budget, estimating monthly costs and
                    reconciling discrepancies
                  </li>
                  <li className="font-medium text-sm">
                    Optimize copy and landing pages for search engine marketing
                  </li>
                  <li className="font-medium text-sm">
                    Perform ongoing keyword discovery, expansion, and optimization
                  </li>
                  <li className="font-medium text-sm">
                    Research and implement search engine optimization recommendations
                  </li>
                  <li className="font-medium text-sm">
                    Research and analyze competitor advertising links
                  </li>
                  <li className="font-medium text-sm">
                    Develop and implement a link-building strategy
                  </li>
                  <li className="font-medium text-sm">
                    Work with the development team to ensure SEO best practices are properly
                    implemented on newly developed code
                  </li>
                  <li className="font-medium text-sm">
                    Work with editorial and marketing teams to drive SEO in content creation and
                    content programming
                  </li>
                  <li className="font-medium text-sm">
                    Recommend changes to website architecture, content, linking, and other factors
                    to improve SEO positions for target keywords
                  </li>
                </ul>
              </div>
            </CustonmDropDown>
          </li>

          <li className="mt-12 py-6 flex flex-col  min-w-full px-2 border border-border-secondary rounded-md gap-2">
            <CustonmDropDown buttonText="Graphic designer">
              <div className="flex flex-col gap-4 ">
                <p className="">
                  Hiring a Graphic artist who would be creating visual text and imagery. The ideal
                  talent shall be designing creative content for online campaigns, print ads,
                  websites, and Qataloog videos.
                </p>

                <ul className="ml-4 gap-4 flex  flex-col list-disc">
                  <li className="font-medium text-sm">
                    Study design briefs and determine requirements
                  </li>
                  <li className="font-medium text-sm">
                    Conceptualize visuals based on requirements
                  </li>
                  <li className="font-medium text-sm">Prepare rough drafts and present ideas</li>
                  <li className="font-medium text-sm">
                    Develop illustrations, logos, and other designs using software or by hand
                  </li>
                  <li className="font-medium text-sm">
                    Use the appropriate colors and layouts for each graphic
                  </li>
                  <li className="font-medium text-sm">
                    Work with copywriters and the creative director to produce the final design
                  </li>
                  <li className="font-medium text-sm">Test graphics across various media</li>
                  <li className="font-medium text-sm">Amend designs after feedback</li>
                  <li className="font-medium text-sm">
                    Ensure final graphics and layouts are visually appealing and on-brand
                  </li>
                </ul>
              </div>
            </CustonmDropDown>
          </li>
        </ul>
      </div>
      <Footer />
    </div>
  );
  //     Join The Dream Team
  // Where You Can Learn, Explore, And Grow Together!
  //
  // If you choose Qataloog, you get an opportunity to work at Africa’s leading EdTech Startup having 3+ years
  // of successful existence, 38+ Universities and Colleges as happy customers from 3 countries.
  // We also understand the importance of a healthy work-life balance and support our employees in their
  // pursuits. We provide superb facilities with innovative office buildings. Here are some perks you get when you
  // choose us:

  // Health &amp; Wellness

  // Group health insurance and health camps for staff and families

  // Collaborative Learning Approach

  // Regular training for soft skill development, certifications, jobs, and more.

  // Leading Technology Projects

  // Opportunity to learn and work on the latest technologies.

  // SEE CURRENT OPENINGS
  // Let&#39;s Work Together!

  // List the positions here
  // (Candidates will click on a position to view the detailed job description in a separate window and how to apply) like
  // below list
};

export default Careers;

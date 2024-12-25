import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaTrophy } from "react-icons/fa6";
import LandingHeader from "./layout/navbar";
import { DropDown } from "@/shared/Dropdown/drop-down";
import { Footer } from "./layout/footer";
const About = () => {
  const team = [
    {
      name: "Martins Fidelis",
      position: "Founder & CEO",
      image: "/martins.png",
      linkedin: "https://www.linkedin.com/in/martins-fidelis-2b81b499/",
    },
    {
      name: "Nanichang Katzing",
      position: "Co-Founder & CTO",
      image: "/nani.jpg",
      linkedin: "https://www.linkedin.com/in/martins-fidelis-2b81b499/",
    },
    {
      name: "Nsongorua Johnson",
      position: "Backend developer",
      image: "/johnson.jpg",
      linkedin: "",
    },
    {
      name: "Timilehin Ogundele",
      position: "Frontend developer",
      image: "/timi-3.png",
      linkedin: "https://www.linkedin.com/in/precious-timilehin-ogundele-166205220/",
    },
    {
      name: "Emmanuel Soetan",
      position: "Frontend developer",
      image: "/Emma.jpg",
      linkedin: "",
    },
    {
      name: "Virtuous Ajor",
      position: "Frontend developer",
      image: "",
      linkedin: "",
    },
  ];
  return (
    <div className="">
      <LandingHeader />
      <div className="md:pt-12 pt-4">
        <div className="md:py-24 md:px-24 px-8 py-12 flex flex-col items-center gap-8 ">
          <small className="bg-brand-primary/50 px-2 font-semibold py-1 rounded">
            About Qataloog
          </small>
          <h2 className=" common-text  text-center font-semibold">
            A Place Where Clients and Employees Both Are Valued
            <span className="text-brand-primary">{` Equally!`}</span>
          </h2>
          <p className="small-header-text max-w-[48rem] text-center">
            Our company culture is based on modern ideas, hardworking teammates, and a young
            professional environment where you can grow together with us by learning, exploring new
            technologies, and building great things.
          </p>
        </div>
        <div className="md:py-24 md:px-24 px-8 py-12  bg-neutral-greyBg">
          <div className="flex md:flex-row flex-col justify-between gap-x-8 gap-y-8  ">
            <div className="">
              <img src="/Event.png" alt="" className=" max-w-[480px] max-h-[640px] rounded-md" />
              <small className="text-text-sub ">
                Martins Fidelis, CEO and Founder of Qataloog at an event{" "}
              </small>
            </div>
            <div className="basis-1/2 flex flex-col gap-12">
              <section className="basis-1/2 flex flex-col gap-8 border-b py-4 border-border-secondary">
                <DropDown
                  buttonStyle="about-drop-text "
                  links={` From research and speaking with 508 students, Librarians and Professors in 20 Universities in Nigeria,
                Senegal and Ghana, we found that students are struggling with access to learning content. Textbook
                prices continue to rise leaving students unable to afford the resources they need. This limits students’
                access to knowledge and contributes to a 65% failure rate in learning outcomes. At the same time, it
                leaves publishers at a loss in this highly fragmented market.`}
                  buttonText="The Problem"
                />
              </section>
              <section className="basis-1/2 flex flex-col gap-8 border-b py-4 border-border-secondary">
                <DropDown
                  buttonStyle="about-drop-text "
                  links={`
                    Qataloog uses Algorithms to aggregate and distribute curriculum-aligned learning content for
                    underprivileged students, women and girls to improve their learning outcomes. Disrupting the highly
                    fragmented $20B African learning content market, Qataloog seeks to provide the latest findings from the
                    best publishers, authors, and aggregators to reduce students’ learning content budget by 91%. `}
                  buttonText="Our Solution"
                />
                {/* <h2 className=" about-drop-text text-center font-semibold">
                Our Solution
              </h2>
              <p className="small-header-text !font-normal !text-[1rem] text-justify">

               
              </p> */}
              </section>
              <section className="basis-1/2 flex flex-col gap-8 border-b py-4 border-border-secondary">
                <DropDown
                  buttonStyle="about-drop-text "
                  labelStyle="text-sm"
                  links={`
                        Qataloog uses Algorithms to aggregate and distribute curriculum-aligned learning content for
                        underprivileged students, women and girls to improve their learning outcomes. Disrupting the highly
                        fragmented $20B African learning content market, Qataloog seeks to provide the latest findings from the
                        best publishers, authors, and aggregators to reduce students’ learning content budget by 91%. `}
                  buttonText="Our Value proposition"
                />
              </section>
              <section className="basis-1/2 flex flex-col gap-8 border-b py-4 border-border-secondary">
                <DropDown
                  buttonStyle="about-drop-text "
                  links={`
                Qataloog continues to expand to new subject areas, grade levels, and languages to reach more
students, the price of textbooks in Nigeria, Senegal and Ghana is declining due to learning content
disruption of the textbook market, removing financial barriers to advanced education, and reducing
student budgets, and improving learning outcomes. With a team of educators, researchers, and learning
engineers, Qataloog is creating research-based learning content tools to help teachers and learners better
personalize the education experience. Qataloog needs your partnership to continue its impact. `}
                  buttonText="Positive Disruption"
                />
                {/* <h2 className=" about-drop-text text-center font-semibold">
                Positive Disruption
              </h2>
              <p className="small-header-text !font-normal !text-[1rem] text-justify">

                Qataloog uses Algorithms to aggregate and distribute curriculum-aligned learning content for
                underprivileged students, women and girls to improve their learning outcomes. Disrupting the highly
                fragmented $20B African learning content market, Qataloog seeks to provide the latest findings from the
                best publishers, authors, and aggregators to reduce students’ learning content budget by 91%.
              </p> */}
              </section>
            </div>
          </div>
        </div>

        <div className="md:py-24 md:px-24 px-8 py-12">
          <h2 className="common-text text-center">Meet the Team</h2>
          <div className="flex  items-center justify-center">
            <div className="flex flex-col gap-8 md:grid md:gap-32 mt-16 grid-cols-3">
              {team.map((data) => {
                return (
                  <div className="flex flex-col justify-center items-center">
                    <div className="rounded-full overflow-hidden bg-brand-primary w-40 h-40 ">
                      <img className="rounded-full" src={data.image} alt="" />
                    </div>
                    <div className="pt-4">
                      <h5>{data.name}</h5>
                      <p>{data.position}</p>
                    </div>
                    <a target="_blank" rel="noreferrer" href={data.linkedin}>
                      <FaLinkedin />
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="my-24 text-center mt-6">
        <h2 className=" text-4xl mb-4  text-center font-semibold">Our Social Impact</h2>
        <p className="small-header-text text-center">
          We strongly believe that knowledge should be cost-effective, open, and <br /> available to
          everyone to make the world a better place.
        </p>
        <ul className="flex  mt-8 gap-8 justify-center">
          <li className="small-header-text flex flex-col items-center max-w-[18rem] text-text-sub text-center !text-base font-light">
            <FaTrophy size={18} className="text-brand-primary" />
            $586k+ saved in learning content costs since 2020.
          </li>
          <li className="small-header-text  flex flex-col items-center max-w-[18rem] text-text-sub text-center !text-base font-light">
            <FaTrophy size={18} className="text-brand-primary" />
            42,483 students from 3 countries impacted
          </li>
          <li className="small-header-text flex flex-col items-center max-w-[18rem] text-text-sub text-center !text-base font-light">
            <FaTrophy size={18} className="text-brand-primary" />
            $205k+ earned by independent authors and small publishers
          </li>
        </ul>
      </div>
      <Footer />
      {/* 





Our Social Impact
We strongly believe that knowledge should be cost-effective, open, and available to everyone to make the
world a better place.
1. $586k+ saved in learning content costs since 2020.
2. 42,483 students from 3 countries impacted
3. $205k+ earned by independent authors and small publishers
4. 28,251 learning content distributed


As Qataloog continues to expand to new subject areas, grade levels, and languages to reach more
students, the price of textbooks in Nigeria, Senegal and Ghana is declining due to learning content
disruption of the textbook market, removing financial barriers to advanced education, and reducing
student budgets, and improving learning outcomes. With a team of educators, researchers, and learning
engineers, Qataloog is creating research-based learning content tools to help teachers and learners better
personalize the education experience. Qataloog needs your partnership to continue its impact.

Schedule a Demo (link this to Calendly schedule meeting link – https://calendly.com/martins-
fidelis/30min)
The Team
Insert Team Profiles photos
Martins Fidelis (Founder &amp; CEO)
(insert Martins’ photo &amp; linkedIn link: https://www.linkedin.com/in/martins-fidelis-2b81b499/ )
Nanichang Katzing (Cofounder &amp; CTO)
(insert Nani’s photo &amp; linkedIn link: https://www.linkedin.com/in/nanichang-katzing/ )
Precious Timilehin (Frontend Lead)
(insert Timi’s photo &amp; linkedIn link: https://www.linkedin.com/in/precious-timilehin-ogundele-
166205220/ )
Nsongurua Akpan (Backend Lead)
(insert Johnson’s photo &amp; linkedIn link: https://www.linkedin.com/in/precious-timilehin-ogundele-
166205220/ )
Do same for Emmanuel and Ajor */}
    </div>
  );
};

export default About;

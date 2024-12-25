import React from "react";
import LandingHeader from "./layout/navbar";
import InputBase from "@/shared/Input/InputBase";
import { Footer } from "./layout/footer";

const Terms = () => {
  return (
    <div className="">
      <LandingHeader />
      {/* <div className="bg-brand-primary  py-8 text-center text-white text-[0.875rem] leading-[1.5rem]">
        We’ve recently changed our T&Cs!
      </div> */}
      <div className="md:py-24  pt-4 py-12 md:pl-[6.8rem] px-8 md:pr-24">
        <div className="flex flex- justify-center md:justify-start">
          <p className="text-brand-primary font-semibold leading-[1.25rem] ">
            Current as of 20 Jan 2023
          </p>
        </div>
        <div className="pt-8 pb-4 md;pb-0 flex flex-wrap justify-center md:items-center">
          <div className="md:basis-1/2">
            <p className="common-text mb-8 font-semibold leading-[3.75rem] -tracking-[0.06rem] ">
              Terms and Conditions
            </p>
            <InputBase className="mb-4" sizes="" fullWidth={false} />
          </div>
          <div className="md:basis-1/2 flex justify-end">
            <p className="md:max-w-[18rem]  flex-end paragraphs-text">
              By accessing our website, you are agreeing to be bound by these terms of service, and
              agree that you are responsible for compliance with any applicable local laws.
            </p>
          </div>
        </div>
        <div className="md:py-24 py-12  md:pr-24">
          <div className="md:max-w-[45rem]">
            <p className="paragraphs-text">
              The use of Qataloog Service, and your agreement to access or use any of the content
              made available to you by means of the Service, is subject to the following terms and
              conditions. Please read them, and the policies referenced herein, carefully. Qataloog
              is a website, mobile application, and related services company that provides for the
              consumption and publication of written and audio-based digital content. <br /> <br />
              The term “Account” refers to a basic Qataloog account maintained by an individual User
              or a single entity (“You”, “User”, or, collectively, “Users&apos;&apos;). The terms
              ``Subscription,” “Subscription Membership,” and “Membership” apply to any paid
              subscription that allows Account holders to access premium and exclusive content
              (“Subscription Content”). <br /> <br />
              The following General Terms of Use is a legal contract between You, either an
              individual User or a single entity, and Qataloog regarding Your use of the Site and
              Apps. If you are accessing and using the Services on behalf of a company (such as your
              employer) or other legal entity, you represent and warrant that you have the authority
              to bind that entity to these Terms. In that case, “You” and “You&rsquo;” will refer to
              the entity. <br />
              <br />
            </p>
            <div className="">
              <h3 className="paragraphs-header ">The Agreement</h3>
              <p className="paragraphs-text">
                Qataloog Inc (“Qataloog” or “we”), is providing you with the Service on a
                subscription basis which includes access to digital versions of certain ebooks
                and/or other content (“eContent”) and certain proprietary electronic resources (
                “eResources”) as well as the ability to use the eReader software (defined below) and
                Service to access and read other digital content supplied by other third parties
                that produce digital content compatible with the Service and the eReader (“Third
                Party Content”) on the condition that you agree with and accept all of the terms and
                conditions set out below. eContent, eResources, and Third Party Content will be
                collectively referred to as “Digital Content”. These terms and conditions of use
                (“Terms and Conditions”), together with all updates, Qataloo&apos;s Content Policy
                (“Content Policy”), and the (“Privacy Policy”) as amended from time to time and
                hereby deemed to be incorporated, shall constitute the “Agreement”. We have our
                registered office at 8 THE GREEN STE R, DOVER DE 19901. <br /> <br />
                Our Services are made available to users who are aged 18 or above. If you are under
                the age of 18, please do not continue with your account creation and Qataloog
                subscription.
              </p>
            </div>
            <div className="pt-2">
              <h3 className="paragraphs-header ">2. Definition of the Service</h3>
              <p className="paragraphs-text">
                Qataloog provides you with access to (i) its systems, software, and separate reading
                software apps (the “eReader”); (ii) the Qataloog workspace (“Workspace”) as further
                detailed in clause 4; and (iii) Digital Content (collectively, the “Service”). To
                access the Digital Content, you, or someone else on your behalf, may purchase access
                to the Digital Content for you. Once you have accessed the compatible Digital
                Content online, you have the ability to view it in the eReader app. Viewing Digital
                Content is explained in greater detail below. <br /> <br />
                The Service consists of software systems and reading apps (“Software”),
                documentation, fonts, and digital content provided by Qataloog and its licensors
                including third-party publishers which are included, where applicable, in the
                Service and are licensed to you by Qataloog for use only under these terms and
                conditions. Qataloog and/or Qataloog&apos;s licensors and publishing partners retain
                ownership of the Qataloog Software and Digital Content and any other component of
                the Service itself and reserve all rights not expressly granted to you. Qataloog, at
                its discretion, may make available future updates to the Service. The Qataloog
                Software and Service updates, if any, may not necessarily include all existing
                software features or new features that Qataloog releases for newer browser versions
                or other devices. The terms of this License will govern any Software updates
                provided by Qataloog that replace and/or supplement the original Qataloog Software
                product unless such updates are accompanied by a separate license in which case the
                terms of that license will govern such updates.
              </p>
            </div>
            <div className="pt-2">
              <h3 className="paragraphs-header ">3. eReader</h3>
              <p className="paragraphs-text">
                In addition to the ability to read/review Digital Content, the eReader may allow you
                to, among other things, (i) add notes, embed content, make comments, and create
                discussion threads relevant to these resources (encompassed under the concept of
                User Content); and (ii) collaborate with other users of the eReader in a Workspace.
                These features may be updated or removed from time to time. The User Content
                supplied to the eReader will remain subject to our Content Policy and the provisions
                of clause 5. User Content in the eReader will be shareable with other Qataloog users
                utilizing the Workspace in which the relevant Digital Content is made available.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Terms;

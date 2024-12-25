import React from "react";

import LandingHeader from "./layout/navbar";
import LandingHero from "./components/landing/heroPage";
import LandingPartners from "./components/landing/partners";
import LandingELibrary from "./components/landing/eLibrary";
import LandingFeatures from "./components/landing/features";
import LandingSubscription from "./components/landing/subscription";
import { LandingBanner } from "./components/landing/banner";
import LandingMac from "./components/landing/mac";
import LandingFeedback from "./components/landing/feedback";
import { Footer } from "./layout/footer";
export const Landing = () => {
  // console.log("hello")
  return (
    <>
      <div className=" max-w-screen pb-4">
        <LandingHeader />
        <LandingHero />
        <LandingPartners />
        <LandingELibrary />
        <LandingFeatures />
        <LandingSubscription />
        <LandingBanner />
        <LandingMac />
        <LandingFeedback />
        <Footer />
      </div>
      <div className="" />
    </>
  );
};

import React from "react";
import AlwaysOn from "../components/pointofsale/AlwaysOn";
import BestPlan from "../components/pointofsale/BestPlan";
import BussinessLoved from "../components/pointofsale/BussinessLoved";
import CreatingDesign from "../components/pointofsale/CreatingDesign";
import Management from "../components/pointofsale/Management";
import PosAnytime from "../components/pointofsale/PosAnytime";
import PosHero from "../components/pointofsale/PosHero";
import TalkUs from "../components/pointofsale/TalkUs";
import Layout from "../components/Layout";
// import Faq from "../components/Home/Faq";

const PointOfSale = () => {
  return (
    <>
      <Layout>
        <PosHero />
        <PosAnytime />
        <CreatingDesign />
        <AlwaysOn />
        <Management />
        <BussinessLoved />
        <BestPlan />
        <TalkUs />
        {/* <Faq /> */}
      </Layout>
    </>
  );
};

export default PointOfSale;

import { Component, Fragment } from "react";
import {Helmet} from "react-helmet";
import Footer from "../component/layout/footer";
import HeaderTwo from "../component/layout/headertwo";
import AboutSection from "../component/section/about";
import AboutSectionThree from "../component/section/aboutthree";
import AppSectionTwo from "../component/section/appsectiontwo";
import BannerTwo from "../component/section/bannertwo";
import MemberSectionTwo from "../component/section/membertwo";
import TransportationSection from "../component/section/transportation";
import WorkSectionTwo from "../component/section/worktwo";

class HomePageTwo extends  Component {
  render() {
    return (
      <Fragment>
        <Helmet>
          <title>Home - Dhaka real service agency</title>
        </Helmet>
        <HeaderTwo />
        <BannerTwo />
        <AboutSectionThree />
        <MemberSectionTwo />
        <AboutSection />
        <TransportationSection />
        <WorkSectionTwo />
        <Footer />
      </Fragment>
    );
  }
}

export default HomePageTwo;

import { Component, Fragment } from "react";
import Footer from "../component/layout/footer";
import PageHeader from "../component/layout/pageheader";
import AboutSection from "../component/section/about";
import AboutSectionSix from "../component/section/aboutsix";
import WorkSectionTwo from "../component/section/worktwo";
import HeaderTwo from "../component/layout/headertwo";
import { Helmet } from "react-helmet";

class AboutPage extends Component {
  render() {
    return (
      <Fragment>
        <Helmet>
          <title>About - Dhaka real service agency</title>
        </Helmet>
        <HeaderTwo />
        <PageHeader title={"About Us"} curPage={"About Us"} />
        <AboutSectionSix />
        <AboutSection />
        <WorkSectionTwo />
        <Footer />
      </Fragment>
    );
  }
}

export default AboutPage;

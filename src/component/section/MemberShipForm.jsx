import React from "react";
import Footer from "../layout/footer";
import HeaderTwo from "../layout/headertwo";

const MemberShipForm = () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
  return (
    <>
      <HeaderTwo />
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSf0rb9eoacg9KE0nTd2qMl3LZ3aAQFAWKxb3r7aorRudgaI0A/viewform?embedded=true"
        width="640"
        height="966"
        frameBorder="0"
        marginHeight="0"
        marginWidth="0"
        title="form"
      >
        Loading…
      </iframe>
      <Footer />
    </>
  );
};

export default MemberShipForm;

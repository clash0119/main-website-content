import React from "react";
import Footer from "../layout/footer";
import HeaderTwo from "../layout/headertwo";

const BookingForm = () => {
  return (
    <>
      <HeaderTwo />
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSdrpOHq3rpuIQdGYE1yBW3FcGems8C6pyi5q0b4a1FqwHSMJg/viewform?embedded=true"
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

export default BookingForm;

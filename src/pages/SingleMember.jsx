import React from "react";
import { Link, useParams } from "react-router-dom";
import Footer from "../component/layout/footer";
import HeaderTwo from "../component/layout/headertwo";
import img1 from "../assets/images/member/home2/01.jpg";
import img2 from "../assets/images/member/home2/02.jpg";
import img3 from "../assets/images/member/home2/03.jpg";
import img4 from "../assets/images/member/home2/04.jpg";
import img5 from "../assets/images/member/home2/05.jpg";
import img6 from "../assets/images/member/home2/06.jpg";
import img7 from "../assets/images/member/home2/07.jpg";
import img8 from "../assets/images/member/home2/08.jpg";
import img9 from "../assets/images/member/home2/09.jpg";
import img10 from "../assets/images/member/home2/10.jpg";
import img11 from "../assets/images/member/home2/11.jpg";
import img12 from "../assets/images/member/home2/12.jpg";
import img13 from "../assets/images/member/home2/13.jpg";

const SingleMember = () => {
  const { modelCode } = useParams();

  let MemberContentList = [
    {
      imgUrl: img1,
      imgAlt: "Dating Thumb",
      modelCode: "01",
      // title: 'Rajib Raj',
      // activity: 'Active',
      // className: "member__activity",
    },
    {
      imgUrl: img2,
      imgAlt: "Dating Thumb",
      modelCode: "02",
      // title: 'Angel Mili',
      // activity: '20 Minutes Ago',
      // className: "member__activity ",
    },
    {
      imgUrl: img3,
      imgAlt: "Dating Thumb",
      modelCode: "03",
      // title: 'Kim Knudsen',
      // activity: 'Active',
      // className: "member__activity",
    },
    {
      imgUrl: img4,
      imgAlt: "Dating Thumb",
      modelCode: "04",
      // title: 'Umme Nishat',
      // activity: 'Active',
      // className: "member__activity",
    },
    {
      imgUrl: img5,
      imgAlt: "Dating Thumb",
      modelCode: "05",
      // title: 'Sajahan Sagor',
      // activity: '55 Minutes Ago',
      // className: "member__activity ",
    },
    {
      imgUrl: img6,
      imgAlt: "Dating Thumb",
      modelCode: "06",
      // title: 'Zinat Zaara',
      // activity: 'Active',
      // className: "member__activity",
    },
    {
      imgUrl: img7,
      imgAlt: "Dating Thumb",
      modelCode: "07",
      // title: 'Rajib Ahmed',
      // activity: 'Active',
      // className: "member__activity",
    },
    {
      imgUrl: img8,
      imgAlt: "Dating Thumb",
      modelCode: "08",
      // title: 'Sabrina Kabir',
      // activity: 'Active',
      // className: "member__activity",
    },
    {
      imgUrl: img9,
      imgAlt: "Dating Thumb",
      modelCode: "09",
      // title: 'Somrat Islam',
      // activity: '2 Hours Ago',
      // className: "member__activity ",
    },
    {
      imgUrl: img10,
      imgAlt: "Dating Thumb",
      modelCode: "10",
      // title: 'Rasmi Rahani',
      // activity: 'Active',
      // className: "member__activity",
    },
    {
      imgUrl: img11,
      imgAlt: "Dating Thumb",
      modelCode: "11",
      // title: 'Rasmi Rahani',
      // activity: 'Active',
      // className: "member__activity",
    },
    {
      imgUrl: img12,
      imgAlt: "Dating Thumb",
      modelCode: "12",
      // title: 'Rasmi Rahani',
      // activity: 'Active',
      // className: "member__activity",
    },
    {
      imgUrl: img13,
      imgAlt: "Dating Thumb",
      modelCode: "13",
      // title: 'Rasmi Rahani',
      // activity: 'Active',
      // className: "member__activity",
    },
  ];

  const singleModelInfoArray = [];

  for (
    let singleCount = 0;
    singleCount < MemberContentList.length;
    singleCount++
  ) {
    const element = MemberContentList[singleCount];
    if (element.modelCode === modelCode) {
      singleModelInfoArray.push(element);
    }
  }

  const singleModelInfo = singleModelInfoArray[0];

  return (
    <>
      <HeaderTwo />
      <div className="single-model">
        <div className="container py-5">
          <div>
            {/* <div className="card mb-3">
              <img
                src={singleModelInfo.imgUrl}
                className="card-img-top"
                alt={singleModelInfo.imgAlt}
              />
              <div className="card-body">
                <Link to={"/booking-form"}></Link>
              </div>
            </div> */}
            <div className="card mb-3">
              <div className="row align-items-center g-0">
                <div className="col-md-4">
                  <img
                    src={singleModelInfo.imgUrl}
                    className="img-fluid rounded-start"
                    alt={singleModelInfo.imgAlt}
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h3>Model Code: {singleModelInfo.modelCode}</h3>
                    <Link
                      to={"/booking-form"}
                      className="default-btn style-2 text-light mt-5"
                    >
                      Book Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SingleMember;

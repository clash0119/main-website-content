import { Component } from "react";
import { Link } from "react-router-dom";

const title = "Our Models";
const desc = "";
const btnText = "See all Models";

let MemberConentGeneralModel = [
    {
        modelCode: "02",
        imgUrl: 'assets/images/member/home2/02.jpg',
        imgAlt: 'Dating Thumb',
        name: 'More Details',
        activity: 'registered 4 months, 1 week ago',
    },
    {
        modelCode: "03",
        imgUrl: 'assets/images/member/home2/03.jpg',
        imgAlt: 'Dating Thumb',
        name: 'More Details',
        activity: 'registered 4 months, 1 week ago',
    },
    {
        modelCode: "05",
        imgUrl: 'assets/images/member/home2/05.jpg',
        imgAlt: 'Dating Thumb',
        name: 'More Details',
        activity: 'registered 4 months, 1 week ago',
    },
    {
        modelCode: "06",
        imgUrl: 'assets/images/member/home2/06.jpg',
        imgAlt: 'Dating Thumb',
        name: 'More Details',
        activity: 'registered 4 months, 1 week ago',
    },
    {
        modelCode: "07",
        imgUrl: 'assets/images/member/home2/07.jpg',
        imgAlt: 'Dating Thumb',
        name: 'More Details',
        activity: 'registered 4 months, 1 week ago',
    },
    {
        modelCode: "10",
        imgUrl: 'assets/images/member/home2/10.jpg',
        imgAlt: 'Dating Thumb',
        name: 'More Details',
        activity: 'registered 4 months, 1 week ago',
    },
    {
        modelCode: "11",
        imgUrl: 'assets/images/member/home2/11.jpg',
        imgAlt: 'Dating Thumb',
        name: 'More Details',
        activity: 'registered 4 months, 1 week ago',
    },
    {
        modelCode: "13",
        imgUrl: 'assets/images/member/home2/13.jpg',
        imgAlt: 'Dating Thumb',
        name: 'More Details',
        activity: 'registered 4 months, 1 week ago',
    },
]

let MemberConentVipModel = [
    
    {
        modelCode: "01",
        imgUrl: 'assets/images/member/home2/01.jpg',
        imgAlt: 'Dating Thumb',
        name: 'More Details',
        activity: 'registered 4 months, 1 week ago',
    },
    {
        modelCode: "04",
        imgUrl: 'assets/images/member/home2/04.jpg',
        imgAlt: 'Dating Thumb',
        name: 'More Details',
        activity: 'registered 4 months, 1 week ago',
    },
    {
        modelCode: "08",
        imgUrl: 'assets/images/member/home2/08.jpg',
        imgAlt: 'Dating Thumb',
        name: 'More Details',
        activity: 'registered 4 months, 1 week ago',
    },
    {
        modelCode: "12",
        imgUrl: 'assets/images/member/home2/12.jpg',
        imgAlt: 'Dating Thumb',
        name: 'More Details',
        activity: 'registered 4 months, 1 week ago',
    }
]

let MemberConentCamModel = [
    {
        modelCode: "04",
        imgUrl: 'assets/images/member/home2/04.jpg',
        imgAlt: 'Dating Thumb',
        name: 'More Details',
        activity: 'registered 4 months, 1 week ago',
    },
    {
        modelCode: "09",
        imgUrl: 'assets/images/member/home2/09.jpg',
        imgAlt: 'Dating Thumb',
        name: 'More Details',
        activity: 'registered 4 months, 1 week ago',
    }
]

class MemberSectionTwo extends Component {
    render() { 
        return (
            <div className="member member--style2 padding-top padding-bottom">
                <div className="container">
                    <div className="section__header style-2 text-center wow fadeInUp" data-wow-duration="1.5s">
                        <h2>{title}</h2>
                        <p>{desc}</p>
                    </div>
                    <div className="section__wrapper wow fadeInUp" data-wow-duration="1.5s">
                        <ul className="nav nav-tabs member__tab" id="myTab" role="tablist">
                            <li className="nav-item" role="presentation">
                                <button className="nav-link active" id="newest-tab" data-bs-toggle="tab" data-bs-target="#newest" type="button" role="tab" aria-controls="newest" aria-selected="true">General Models</button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link" id="activemember-tab" data-bs-toggle="tab" data-bs-target="#activemember" type="button" role="tab" aria-controls="activemember" aria-selected="false">VIP Models</button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link" id="popularmember-tab" data-bs-toggle="tab" data-bs-target="#popularmember" type="button" role="tab" aria-controls="popularmember" aria-selected="false">Cam Service</button>
                            </li>
                        </ul>

                        <div className="tab-content mx-12-none" id="myTabContent">
                            <div className="tab-pane fade show active" id="newest" role="tabpanel" aria-labelledby="newest-tab">
                                <div className="row g-0 justify-content-center">
                                    {MemberConentGeneralModel.map((val, i) => (
                                        <div className="member__item" key={i}>
                                            <div className="member__inner">
                                                <div className="member__thumb">
                                                    <img src={`${val.imgUrl}`} alt={`${val.imgAlt}`} />
                                                    <span className="member__activity"></span>
                                                </div>
                                                <div className="member__content">
                                                    <Link to={`/member-single/${val.modelCode}`}><h5>{val.name}</h5></Link>
                                                    {/* <p>{val.activity}</p> */}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="tab-pane fade" id="activemember" role="tabpanel" aria-labelledby="activemember-tab">
                                <div className="row g-0 justify-content-center">
                                    {MemberConentVipModel.map((val, i) => (
                                        <div className="member__item" key={i}>
                                            <div className="member__inner">
                                                <div className="member__thumb">
                                                    <img src={`${val.imgUrl}`} alt={`${val.imgAlt}`} />
                                                    <span className="member__activity"></span>
                                                </div>
                                                <div className="member__content">
                                                    <Link to={`/member-single/${val.modelCode}`}><h5>{val.name}</h5></Link>
                                                    {/* <p>{val.activity}</p> */}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="tab-pane fade" id="popularmember" role="tabpanel" aria-labelledby="popularmember-tab">
                                <div className="row g-0 justify-content-center">
                                    {MemberConentCamModel.map((val, i) => (
                                        <div className="member__item" key={i}>
                                            <div className="member__inner">
                                                <div className="member__thumb">
                                                    <img src={`${val.imgUrl}`} alt={`${val.imgAlt}`} />
                                                    <span className="member__activity"></span>
                                                </div>
                                                <div className="member__content">
                                                    <Link to={`/member-single/${val.modelCode}`}><h5>{val.name}</h5></Link>
                                                    {/* <p>{val.activity}</p> */}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="text-center mt-4">
                            <Link to="/members" className="default-btn"><span>{btnText}</span></Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default MemberSectionTwo;
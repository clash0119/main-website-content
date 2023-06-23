import { Component } from "react";
import { Link } from "react-router-dom";

const title = "ঢাকা রিয়েল সার্ভিস ইন কল /আউট কল, ক্যাম এবং স্পা";
const desc = "প্রিমিয়াম মেম্বারশিপ ফি মাত্র ১৫০০/= টাকা";
const btnText = "Get A Membership";

const imgLink = "assets/images/banner/02.png";
const imgAlt = "Dating Thumb";

class BannerTwo extends Component {
    render() { 
        return (
            <div className="banner banner--style2 padding-top bg_img" style={{backgroundImage: "url(/assets/images/banner/bg-2.jpg)"}}>
                <div className="container">
                    <div className="banner__wrapper">
                        <div className="row g-0 justify-content-center">
                            <div className="col-lg-4 col-12">
                                <div className="banner__content wow fadeInLeft" data-wow-duration="1.5s">
                                    <div className="banner__title">
                                        <h2>{title}</h2>
                                        <p>{desc}</p>
                                        <div className="row gap-3">
                                            <Link to="/membership" className="default-btn style-2"><span>{btnText}</span></Link>
                                            <a href="https://api.whatsapp.com/send?phone=8801326887464" target={"_blank"} rel="noreferrer" className="default-btn" style={{ backgroundColor: "#0be881" }}><span>WhatsApp 01326887464</span></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-8 col-12">
                                <div className="banner__thumb wow fadeInUp" data-wow-duration="1.5s">
                                    <img src={imgLink} alt={imgAlt} />
                                    <div className="banner__thumb--shape">
                                        <div className="shapeimg shapeimg__one">
                                            <img src="assets/images/banner/shape/home2/01.png" alt="dating thumb" />
                                        </div>
                                        <div className="shapeimg shapeimg__two">
                                            <img src="assets/images/banner/shape/home2/02.png" alt="dating thumb" />
                                        </div>
                                        <div className="shapeimg shapeimg__three">
                                            <img src="assets/images/banner/shape/home2/03.png" alt="dating thumb" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default BannerTwo;
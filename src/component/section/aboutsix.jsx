import { Component } from "react";
import { Link } from "react-router-dom";

const title = "Hello My Friend";
const subtitle = "আপনি কি রিয়েল ইন কল / আউট কল সার্ভিস, কাম সার্ভিস, স্পা সার্ভিস এর সন্ধান করছেন";
const desc = `তাহলে আপনি সঠিক জায়গায় এসেছেন। আমরা দিচ্ছি আপনার পছন্দ মতো রিয়েল সার্ভিস যা আপনাকে দিবে এক নতুন অভিজ্ঞতা। আমরা ঢাকা এবং ইন্ডিয়ার গুজরাট এ রিয়েল সার্ভিস সেবা দিয়ে থাকি। আমাদের রয়েছে ৩/৪/৫ তারকা হোটেল ব্যবস্থা যা আপনাকে করবে আরো প্রাণবন্ত। আমাদের মডেলরা প্রশিক্ষত, যা আপনার চাহিদা মিটানোর জন্য যথেষ্ট। \n আমাদের সার্ভিস পেতে আজই যুক্ত হন আমাদের প্রিমিয়াম মেম্বারশিপ প্ল্যান এ। মেম্বারশিপ ফি মাত্র ১৫০০/= টাকা।`;
const btnText = "Get A Membership";
const imgUrl = "assets/images/about/01.png";
const imgAlt = "Dating Thumb";

class AboutSectionSix extends Component {
    render() { 
        return (
            <div className="about about--style5 padding-top padding-bottom">
                <div className="container">
                    <div className="row justify-content-center g-4 align-items-center">
                        <div className="col-lg-6 col-12">
                            <div className="about__thumb">
                                <img src={`${imgUrl}`} alt={`${imgAlt}`} />
                            </div>
                        </div>
                        <div className="col-lg-6 col-12">
                            <div className="about__content">
                                <h2>{title}</h2>
                                <h5>{subtitle}</h5>
                                <p>{desc}</p>
                                <Link to="/membership" className="default-btn reverse"><span>{btnText}</span></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default AboutSectionSix;
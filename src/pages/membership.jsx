import { Component, Fragment } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import Footer from "../component/layout/footer";
import HeaderTwo from "../component/layout/headertwo";
import PageHeader from "../component/layout/pageheader";

const title = "Get Primium Membership";
const subtitle = "সকল ধরনের আপডেট পেতে আজই জয়েন করুন আমাদের প্রিমিয়াম মেম্বারশিপ প্ল্যান এ";

let MembershipList = [
    {
        daycount: '',
        perMonth: 'লাইফটাইম মেম্বারশিপ',
        price: 'মাত্র ১৫০০ টাকা',
        btnText: 'Get Membership',
        faciList: [
            {
                iconName: 'fa-solid fa-circle-check',
                text: 'মেম্বারশিপ পেতে নিচের Get Membership বাটন এ ক্লিক করুন',
            },
            {
                iconName: 'fa-solid fa-circle-check',
                text: 'গুগল ফর্ম এ প্রয়োজনীয় তথ্য দিয়ে বিকাশ/নগদ এ টাকা পরিশোধ করুন',
            },
            {
                iconName: 'fa-solid fa-circle-check',
                text: 'টাকা পরিশোধ করার ২৪ ঘণ্টার মধ্যে আমাদের প্রিমিয়াম মেম্বারশিপ গ্রুপ এর এক্সেস পেয়ে যাবেন',
            },
            {
                iconName: 'fa-solid fa-circle-check',
                text: 'প্রিমিয়াম গ্রুপ এ আমাদের মডেল এবং আনুষঙ্গিক সকল আপডেট পাবেন',
            },
            {
                iconName: 'fa-solid fa-circle-check',
                text: 'এই প্ল্যান টি লাইফটাইম এর জন্য',
            },
        ]
    }
]

class MembershipPage extends Component {
    render() { 
        return (
            <Fragment>
                <Helmet>
                    <title>Membership Plan - Dhaka real service agency</title>
                </Helmet>
                <HeaderTwo />
                <PageHeader title={`our's Membership Plan`} curPage={'Membership'} />
                <div className="membership padding-top padding-bottom">
                    <div className="container">
                        <div className="section__header style-2 text-center">
                            <h2>{title}</h2>
                            <p>{subtitle}</p>
                        </div>
                        <div className="section__wrapper">
                            <div className="row g-4 justify-content-center row-cols-xl-1 row-cols-lg-1 row-cols-sm-1 row-cols-1">
                                {MembershipList.map((val, i) => (
                                    <div className="col text-left" key={i}>
                                        <div className="membership__item">
                                            <div className="membership__inner">
                                                <div className="membership__head">
                                                    <h4>{val.daycount}</h4>
                                                    <p>{val.perMonth}</p>
                                                </div>
                                                <div className="membership__body">
                                                    <h4>{val.price}</h4>
                                                    <ul>
                                                        {val.faciList.map((val, i) => (
                                                            <li key={i}><i className={val.iconName}></i> <span>{val.text}</span></li>
                                                        ))}
                                                    </ul>
                                                </div>
                                                <div className="membership__footer">
                                                    <Link to="/membership-form" className="default-btn reverse"><span>{val.btnText}</span></Link>
                                                    <Link to="/policy" className="default-btn reverse" style={{ "marginLeft": 20 }}><span>Read our Policy</span></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </Fragment>
        );
    }
}
 
export default MembershipPage;
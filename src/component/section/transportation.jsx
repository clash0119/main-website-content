import { Component } from "react";
import { Link } from "react-router-dom";

const title = "আমাদের সার্ভিস প্লেস সমূহ হলো";
const desc = "আপনি যদি স্পা, ক্যাম সার্ভিস, ইন কল এবং আউট কল রিয়েল সার্ভিস নিতে চাচ্ছেন তবে আপনি সঠিক জায়গায় এসেছেন।";

let TransportContentList = [
    {
        imgUrl: 'assets/images/transport/08.jpg',
        imgAlt: 'trensport thumb',
        countryName: 'India',
    },
    {
        imgUrl: 'assets/images/transport/10.jpg',
        imgAlt: 'trensport thumb',
        countryName: 'Bangladesh',
    },
]

class TransportationSection extends Component {
    render() { 
        return (
            <section className="transportation padding-top padding-bottom">
                <div className="container">
                    <div className="section__wrapper">
                        <div className="row">
                            <div className="col-lg-4 col-12">
                                <div className="left">
                                    <div className="section__header style-2 mb-lg-0 wow fadeInUp" data-wow-duration="1.5s">
                                        <h2>{title}</h2>
                                        <p>{desc}</p>
                                        <ul>
                                            {TransportContentList.map((val, i) => (
                                                <li key={i}>
                                                    <div className="thumb"> <img src={`${val.imgUrl}`} alt={`${val.imgAlt}`} /></div>
                                                    <div className="content"><Link to="/members">{val.countryName}</Link></div>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-8 col-12">
                                <div className="right wow fadeInUp" data-wow-duration="1.5s">
                                    {TransportContentList.map((val, i) => (
                                        <div className="lab-line" key={i}>
                                            <span></span>
                                            <div className="lab-tooltip"><Link to="/members">{val.countryName}</Link></div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
 
export default TransportationSection;
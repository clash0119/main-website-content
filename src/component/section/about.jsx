import { Component } from "react";

const title = "Our services";
const subtitle = "আমরা ঢাকা এবং ইন্ডিয়ার গুজরাট এ নিম্নোক্ত সার্ভিস গুলি দিয়ে থাকি";

let AboutContentList = [
    {
        imgUrl: 'assets/images/about/kiss.png',
        imgAlt: 'Dating Thumb',
        title: 'In Call Service',
        desc: 'আমাদের প্লেস এ এসে সার্ভিস নিতে পারবেন',
    },
    {
        imgUrl: 'assets/images/about/dating-app.png',
        imgAlt: 'Dating Thumb',
        title: 'Out Call Service',
        desc: 'আপনার নির্ধারিত প্লেস এ সার্ভিস নিতে পারবেন',
    },
    {
        imgUrl: 'assets/images/about/video.png',
        imgAlt: 'Dating Thumb',
        title: 'Cam Service',
        desc: 'ফুল ক্যাম এবং হাফ ক্যাম সার্ভিস পাচ্ছেন যে কোনো প্লেস থেকে',
    },
    {
        imgUrl: 'assets/images/about/spa.png',
        imgAlt: 'Dating Thumb',
        title: 'Spa',
        desc: 'স্পা সার্ভিস এর সাথে থাকছে আপনার পছন্দ মতো সার্ভিস',
    },
]

class AboutSection extends Component {
    render() { 
        return (
            <div className="about padding-top padding-bottom">
                <div className="container">
                    <div className="section__header style-2 text-center wow fadeInUp" data-wow-duration="1.5s">
                        <h2>{title}</h2>
                        <p>{subtitle}</p>
                    </div>
                    <div className="section__wrapper">
                        <div className="row g-4 justify-content-center row-cols-xl-4 row-cols-lg-3 row-cols-sm-2 row-cols-1">
                            {AboutContentList.map((val, i) => (
                                <div className="col wow fadeInUp" data-wow-duration="1.5s" key={i}>
                                    <div className="about__item text-center">
                                        <div className="about__inner">
                                            <div className="about__thumb">
                                                <img height={"100"} width={"100"} src={`${val.imgUrl}`} alt={`${val.imgAlt}`} />
                                            </div>
                                            <div className="about__content">
                                                <h4>{val.title}</h4>
                                                <p>{val.desc}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default AboutSection;
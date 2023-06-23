import { Component } from "react";
import CountUp from 'react-countup';

const title = "আমাদের কমিউনিটি";
const desc = "";

let AboutContentList = [
    {
        imgUrl: 'assets/images/about/icon/01.png',
        imgAlt: 'Dating Thumb',
        count: '5000',
        desc: 'Members in Total',
    },
    {
        imgUrl: 'assets/images/about/icon/02.png',
        imgAlt: 'Dating Thumb',
        count: '4500',
        desc: 'Members Take Services',
    },
    {
        imgUrl: 'assets/images/about/icon/03.png',
        imgAlt: 'Dating Thumb',
        count: '30',
        desc: 'Ours Model',
    },
    {
        imgUrl: 'assets/images/about/icon/04.png',
        imgAlt: 'Dating Thumb',
        count: '10',
        desc: 'Video call Models',
    },
]

class AboutSectionThree extends Component {
    render() { 
        return (
            <div className="about padding-top padding-bottom">
                <div className="container">
                    <div className="section__header style-2 text-center wow fadeInUp" data-wow-duration="1.5s">
                        <h2>{title}</h2>
                        <p>{desc}</p>
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
                                                <h3><span className="counter"><CountUp end={val.count} /></span></h3>
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
 
export default AboutSectionThree;
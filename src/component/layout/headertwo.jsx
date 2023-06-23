import { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../../assets/images/logo/logo.png"

let HeaderInfoList = [
    {
        iconName: 'fa-solid fa-phone',
        text: '+880 1326 887464',
    },
    {
        iconName: 'fa-solid fa-location-dot',
        text: 'Dhaka, Bangladesh',
    },
]

let HeaderSocialList = [
    {
        iconName: 'fa-brands fa-facebook-f',
        text: 'Facebook',
        link: 'https://www.facebook.com/groups/367543247693267'
    },
    {
        iconName: 'fa-brands fa-instagram',
        text: 'Instagram',
        link: 'https://www.facebook.com/groups/367543247693267'
    },
    {
        iconName: 'fa-brands fa-youtube',
        text: 'Youtube',
        link: 'https://www.facebook.com/groups/367543247693267'
    },
]

class HeaderTwo extends Component {
    render() { 
        window.addEventListener('scroll', function() {
            var value = window.scrollY;
            if (value > 200) {
                document.querySelector('.header').classList.add(['header-fixed'], ['animated'], ['fadeInDown'])
            }else{
                document.querySelector('.header').classList.remove(['header-fixed'], ['animated'], ['fadeInDown'])
            }
        });
        return (
            <header className="header" id="navbar">
                <div className="header__top d-none d-lg-block">
                    <div className="container">
                        <div className="header__top--area">
                            <div className="header__top--left">
                                <ul>
                                    {HeaderInfoList.map((val, i) => (
                                        <li key={i}>
                                            <i className={val.iconName}></i> <span>{val.text}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="header__top--right">
                                <ul>
                                    {HeaderSocialList.map((val, i) => (
                                        <li key={i}><a href={val.link} target={"_blank"} rel="noreferrer"><i className={val.iconName}></i> {val.text}</a></li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="header__bottom">
                    <div className="container">
                        <nav className="navbar navbar-expand-lg">
                            <Link className="navbar-brand" to="/"><img height={"23"} width={"93"} src={Logo} alt="logo" /></Link>
                            <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"
                                aria-label="Toggle navigation">
                                <span className="navbar-toggler--icon"></span>
                            </button>
                            <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                                <div className="navbar-nav mainmenu">
                                    <ul>
                                        <li className="">
                                            <NavLink to={"/"}>Home</NavLink>
                                        </li>
                                        {/* <li className="menu-item-has-children">
                                            <a href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-bs-offset="0,0">Blogs</a>
                                            <ul className="dropdown-menu">
                                                <li><NavLink to="/blog">Blog</NavLink></li>
                                                <li><NavLink to="/blog-2">Blog Style Two</NavLink></li>
                                                <li><NavLink to="/blog-single">Blog Details</NavLink></li>
                                            </ul>
                                        </li> */}
                                        <li><NavLink to="/about">About</NavLink></li>
                                        <li><NavLink to="/membership">Membership</NavLink></li>
                                        <li><NavLink to="/models">Our Models</NavLink></li>
                                        <li><NavLink to="/policy">Policy</NavLink></li>
                                        <li><NavLink to="/contact">Contact</NavLink></li>
                                    </ul>
                                </div>
                                {/* <div className="header__more">
                                    <button className="default-btn dropdown-toggle" type="button" id="moreoption" data-bs-toggle="dropdown" aria-expanded="false">My Account</button>
                                    <ul className="dropdown-menu" aria-labelledby="moreoption">
                                        <li><Link className="dropdown-item" to="/login">Log In</Link></li>
                                        <li><Link className="dropdown-item" to="/register">Sign Up</Link></li>
                                    </ul>
                                </div> */}
                            </div>
                        </nav>
                    </div>
                </div>
            </header>
        );
    }
}
 
export default HeaderTwo;
import React from 'react';
import Link from "next/link"


export default function Footer() {
    const getCurrentYear = () => {
        return new Date().getFullYear()
    }

    return (
        <div>
            <footer className="footer-section">
                <div className="container">
                    <div className="footer-cta pt-5 pb-5">
                        <div className="row">
                            <div className="col-xl-4 col-md-4 mb-30">
                                <div className="single-cta">
                                    <i className="fas fa-map-marker-alt"></i>
                                    <div className="cta-text">
                                        <h4>Find us</h4>
                                        <span>1010 Avenue, sw 54321, chandigarh</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-md-4 mb-30">
                                <div className="single-cta">
                                    <i className="fas fa-phone"></i>
                                    <div className="cta-text">
                                        <h4>Call us</h4>
                                        <span>9876543210 0</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-md-4 mb-30">
                                <div className="single-cta">
                                    <i className="far fa-envelope-open"></i>
                                    <div className="cta-text">
                                        <h4>Mail us</h4>
                                        <span>mail@info.com</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer-content pt-5 pb-5">
                        <div className="row">
                            <div className="col-xl-3 col-lg-3 mb-50">
                                <div className="footer-widget">
                                    <div className="footer-logo">

                                        <Link href={"/"}>
                                            <a ><img src="https://images.ctfassets.net/di1zc7l0b6uf/4TAhYBRhEu4x4DtOpsfGz3/f51d4a6bd98663247fb9d56b0ff28278/boglogo.png" className="img-fluid" alt="logo" /></a>
                                        </Link>
                                    </div>
                                    <div className="footer-text">
                                        <p>Lorem ipsum dolor sit amet, consec tetur adipisicing elit, sed do eiusmod tempor incididuntut consec tetur adipisicing
                                            elit,Lorem ipsum dolor sit amet.</p>
                                    </div>

                                </div>
                            </div>
                            <div className="col-xl-5 col-lg-5 col-md-6 mb-30">
                                <div className="footer-widget">
                                    <div className="footer-widget-heading">
                                        <h3>Partner Agencies</h3>
                                    </div>
                                    <ul>
                                        <li>
                                            <Link href={"/"}>
                                                <a >Central Bank of Kenya</a>
                                            </Link></li>
                                        <li>
                                            <Link href={"/"}>
                                                <a >Bank of Tanzania</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href={"/"}>
                                                <a >Bank of Tanzania</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href={"/"}>
                                                <a >Bank of Tanzania</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href={"/"}>
                                                <a >Bank of Tanzania</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href={"/"}>
                                                <a >Bank of Tanzania</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href={"/"}>
                                                <a >Bank of Tanzania</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href={"/"}>
                                                <a >Bank of Tanzania</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href={"/"}>
                                                <a >Bank of Tanzania</a>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6 mb-50">
                                <div className="footer-widget">
                                    <div className="footer-widget-heading">
                                        <h3>About BOU</h3>
                                    </div>
                                    <div className="footer-text mb-25">
                                        <p><strong>Mission of Bank of Uganda</strong><br />

                                            To Promote Price Stability and a Sound Financial System in Support of Socio-economic Transformation in Uganda.
                                            <br /> <br /> <strong> Vision of Bank of Uganda
                                            </strong>
                                            <br />
                                            To be a centre of excellence in upholding macroeconomic stability.   <br />
                                            <br /> <strong>Location of Bank of Uganda</strong><br />

                                            1. Bank of Uganda Headquarters is located on Plot 37/45 Kampala Road.

                                            2. The Bank has 9 branches headed by Branch Managers in Kampala, Jinja, Mbale, Gulu, Mbarara, Kabale, Fort Portal , Arua and Masaka towns.</p>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="copyright-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-6 col-lg-6 text-center text-lg-left">
                                <div className="copyright-text">
                                    <p>Copyright &copy; {getCurrentYear()}, All Right Reserved <a href="#">Bank of Uganda</a></p>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 d-none d-lg-block text-right">
                                <div className="footer-menu">
                                    <ul>
                                        <li>
                                            <Link href={"/"}>
                                                <a >Home</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href={"/"}>
                                                <a >Terms</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href={"/"}>
                                                <a >Privacy</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href={"/"}>
                                                <a >Policy</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href={"/"}>
                                                <a >Contact</a>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

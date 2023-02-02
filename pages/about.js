import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FiExternalLink } from 'react-icons/fi'
import { FaGreaterThan } from "react-icons/fa";
import { BsPlayFill } from "react-icons/bs";
import { GoOrganization } from "react-icons/go";
import { MdOutlineVolunteerActivism } from "react-icons/md";
import { HiLocationMarker } from "react-icons/hi";
import { GiSpatter } from "react-icons/gi";

import manDate from "../public/mandate.png";
import wildlife from "../public/wildlife.jpg";

export default function about() {
  return (
    <>
    <section className='about-us-area'>
        <div className='about-bg' style={{ backgroundImage: 'url(/economy.jpg)'}}></div>
        <div className='container'>
            <div className='row'>
                <div className='col-12 col-md-12'>
                    <div className='inner-content'>
                        <div className='title'>
                            <h2>About Us</h2>
                        </div>
                        {/* <div className='menu'>
                            <ul>
                                <li className='menu-item'>
                                    <Link href={'/'}>
                                        <a>Home &nbsp; /</a>
                                    </Link>
                                </li>
                                <li className='menu-item'>About Us</li>
                            </ul>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section className='intro-area'>
        <div className='container'>
            <div className='row'>
                <div className='col-6 col-xl-6 col-md-6 col-12'>
                    <div className='video-gallery'>
                        <div className='video-gallery-bg' style={{ backgroundImage: 'url(/western.jpg)'}}></div>
                        <div className='video-gallery-button'>
                            <div className='icon'>
                                <Link href={'https://www.youtube.com/watch?v=h6HcAySZDTk&ab_channel=BankofUganda'}>
                                    <a><BsPlayFill className='play-icon' /></a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-6 col-xl-6 col-md-6 col-12'>
                    <div className='intro-content-box'>
                        <div className='content-title'><br/>
                            <h2>Overview About <br/> Bank Of Uganda</h2>
                        </div>
                        <div className='content-text'>
                            <p>
                                The Bank of Uganda (BoU) is the Central Bank of the Republic of Uganda. 
                                It was opened on August 15, 1966. It is 100% owned by the Government 
                                of Uganda but it is not a government Department.  Bank of Uganda 
                                conducts all its activities in close association with the&nbsp;
                                <Link href={'/'}>
                                    <a className='link'>Ministry of Finance, Planning and Economic Development(MoFPED).</a>
                                </Link> 
                                &nbsp;Bank of Uganda is responsible for the formulation and implementation of monetary
                            </p>
                        </div>
                        <div className='row'>
                            <div className='col-xl-6 col-lg-6 col-md-6'>
                                <div className='content-box'>
                                    <div className='img-box'>
                                        <div className='inner-img-box' style={{ height: '270px', backgroundImage: 'url(/wildlife.jpg)'}}></div>
                                        <div className='overlay-text'>
                                            <h3>Our Journey</h3>
                                        </div>
                                    </div>
                                    <div className='title-box'>
                                        <h3>
                                            <Link href={'/'}>
                                                <a>Who We Are</a>
                                            </Link>
                                        </h3>
                                    </div>
                                </div>
                            </div>
                            <div className='col-xl-6 col-lg-6 col-md-6'>
                                <div className='content-box'>
                                    <div className='img-box'>
                                        <div className='inner-img-box' style={{ height: '270px', backgroundImage: 'url(/wildlife.jpg)'}}></div>
                                        <div className='overlay-text'>
                                            <h3>Our Team</h3>
                                        </div>
                                    </div>
                                    <div className='title-box'>
                                        <h3>
                                            <Link href={'/'}>
                                                <a>Board Of Directors</a>
                                            </Link>
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section className='related-area'>
        <div className='container'>
            <ul className='row p-0'>
                <li className='col-xl-4 col-lg-4 single-section text-center'>
                    <div className='section-1'>
                        <div className='related-icon-area'>
                            <div className='related-icon-inner'>
                                <GoOrganization className='org-icon' />
                            </div>
                            <div className='count'>01</div>
                        </div>
                        <div className='text'>
                            <h3>
                                <Link href={'/'}>
                                    <a>Organisation & Governance</a>
                                </Link>
                            </h3>
                            <p>
                                According to Article 161 of the Constitution
                                of the Republic of Uganda
                            </p>
                        </div>
                    </div>
                </li>
                <li className='col-xl-4 col-lg-4 single-section text-center'>
                    <div className='section-1'>
                        <div className='related-icon-area'>
                            <div className='related-icon-inner'>
                                <MdOutlineVolunteerActivism className='org-icon' />
                            </div>
                            <div className='count'>02</div>
                        </div>
                        <div className='text'>
                            <h3>
                                <Link href={'/'}>
                                    <a>What We Do</a>
                                </Link>
                            </h3>
                            <p>
                                The Bank of Uganda conducts all its activities
                                with the aim of fulfing its Mission.
                            </p>
                        </div>
                    </div>
                </li>
                <li className='col-xl-4 col-lg-4 single-section text-center'>
                    <div className='section-1'>
                        <div className='related-icon-area'>
                            <div className='related-icon-inner'>
                                <HiLocationMarker className='org-icon' />
                            </div>
                            <div className='count'>03</div>
                        </div>
                        <div className='text'>
                            <h3>
                                <Link href={'/'}>
                                    <a>Location</a>
                                </Link>
                            </h3>
                            <p>
                            Get Support for any Queries or Complaints from
                            our various branches
                            </p>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </section>
    <section className='management-area'>
        <div className='container'>
            <div className='row'>
                <div className='col-xl-12 col-12 col-md-12 col-12'>
                    <div className='management-text-box'>
                        <div className='shape'>
                            <GiSpatter />
                    </div>
                        <div className='inner-title'>
                            <h2>Management Of <br /> Bank of Uganda</h2>
                        </div>
                        <div className='text'>
                            <p>
                                The Board of Directors is responsible for overall 
                                management of the Bank. <br/> It is appointed by the 
                                President of the Republic of Uganda and is 
                                composed of:
                            </p>
                            <div className='text-white'>
                                <ol>
                                    <li>The Governor and Chairman of the Board</li>
                                    <li>The Deputy Governor and Deputy Chairman of the Board</li>
                                    <li>Not more than 5 other members</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section className='mandate-area'>
        <div className='container'>
            <div className='row'>
            <div className='col-xl-6 col-6 col-md-6 col-12'>
                <div className='mandate-content'>
                    <div className='sec-title'>
                        <h2>Bank of Uganda <br/> Mandate</h2>
                    </div>
                    <div className='text-color'>
                        BOU has the mandate to supervise and regulate 
                        the operations of financial institutions in 
                        the country.
                    </div>
                    <div className='text-color'>
                        These include Commercial Banks, Credit Institutions, 
                        Micro Finance Deposit-Taking Institutions (MDIs), and Forex Bureaux.
                    </div>
                    <div className='text-color'>
                        A number of acts and regulations govern this mandate and the 
                        supervision of financial institutions.
                    </div>
                </div>
            </div>
            <div className='col-xl-6 col-6 col-md-6 col-12'>
                <div className='mandate-content-img' style={{ width: "100%"}}>
                    <Image src={manDate} />
                </div>
            </div>
            </div>
        </div>
    </section>
    </>
  )
}

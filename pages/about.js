import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FiExternalLink } from 'react-icons/fi'
import { FaGreaterThan } from "react-icons/fa";
import { BsPlayFill } from "react-icons/bs"

import manDate from "../public/mandate.png";
import wildlife from "../public/wildlife.jpg";

export default function about() {
  return (
    <>
    <section className='about-us-area'>
        <div className='about-bg' style={{ backgroundImage: 'url(/money.jpg)'}}></div>
        <div className='container'>
            <div className='row'>
                <div className='col-12 col-md-12'>
                    <div className='inner-content'>
                        <div className='title'>
                            <h2>About Us</h2>
                        </div>
                        <div className='menu'>
                            <ul>
                                <li className='menu-item'>
                                    <Link href={'/'}>
                                        <a>Home &nbsp; /</a>
                                    </Link>
                                </li>
                                <li className='menu-item'>About Us</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section className='intro-area'>
        <div className='container'>
            <div className='row'>
                <div className='col-6 col-xl-6 col-md-6'>
                    <div className='video-gallery'>
                        <div className='video-gallery-bg' style={{ backgroundImage: 'url(/flow.jpg)'}}></div>
                        <div className='video-gallery-button'>
                            <div className='icon'>
                                <Link href={'https://www.youtube.com/watch?v=h6HcAySZDTk&ab_channel=BankofUganda'}>
                                    <a><BsPlayFill className='play-icon' /></a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-6 col-xl-6 col-md-6'>
                    <div className='intro-content-box'>
                        <div className='content-title'>
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
            <ul className='row'>
                <li className='col-xl-4 col-lg-4 single-section text-center'>
                    <div className='section-1'>
                        <div className='related-icon-area'>
                            <div className='related-icon-inner'></div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </section>
      {/* <div className="row">
        <div className="col-12">
          <div className="banner-about">
            <div className="overlay"></div>
            <div className="container">
              <div className="row">
                <div className="col-md-6 mb-4 mb-sm-0 about-content">
                  <h1 className="display-4 my-4 font-weight-bold">We are <span > Uganda's central bank.</span></h1>
                  <button type="button" className="btn btn-dark btn px-5 py-3 text-white mt-4 mt-sm-0">Learn more</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}

    {/* <div className='container'>
        <div className='row'>
            <div className='col-md-8'>
                <div className='overview-section'>
                    <div className='headline-title'>
                        <h3 className='overview-title'>Overview:- About BOU</h3>
                    </div>
                    <div>                    
                        The Bank of Uganda (BoU) is the Central Bank of the Republic of Uganda. 
                        It was opened on August 15, 1966. It is 100% owned by the Government 
                        of Uganda but it is not a government Department.  Bank of Uganda 
                        conducts all its activities in close association with the&nbsp;
                        <Link href={'/'}>
                            <a className='link'>Ministry of Finance, Planning and Economic Development(MoFPED).</a>
                        </Link> 
                        &nbsp;Bank of Uganda is responsible for the formulation and implementation of monetary 
                    </div>
                    <div className='headline-title'>
                        <h3 className='overview-title'>Management of BoU</h3>
                    </div>
                    <div>
                        The Board of Directors is responsible for overall management of the Bank. 
                        It is appointed by the President of the Republic of Uganda and is composed of:-
                        <ol>
                            <li>The Governor and Chairman of the Board</li>
                            <li>The Deputy Governor and Deputy Chairman of the Board</li>
                            <li>Not more than 5 other members</li>
                        </ol>
                    </div>
                    <div className='headline-title'>
                        <h3 className='overview-title'>BoU Mandate</h3>
                    </div>
                    <div style={{ width: "600px"}}>
                        <Image src={manDate} />
                    </div>
                </div>
            </div>
            <div className='col-md-4'>
                <div className='related-section'>
                    <div className="card">
                        <div className="card-header related-header">
                            <h3>Related Pages</h3>
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                                <Link href={'/'}>
                                    <a className='related-link'>Location <FiExternalLink className='icon-link' /></a>
                                </Link>
                            </li>
                            <li className="list-group-item">
                                <Link href={'/'}>
                                    <a className='related-link'>Organisation and Governance <FiExternalLink className='icon-link' /></a>
                                </Link>
                            </li>
                            <li className="list-group-item">
                                <Link href={'/'}>
                                    <a className='related-link'>What We Do <FiExternalLink className='icon-link' /></a>
                                </Link>
                            </li>
                            <li className="list-group-item">
                                <Link href={'/'}>
                                    <a className='related-link'>Who We Are <FiExternalLink className='icon-link' /></a>
                                </Link>
                            </li>
                            <li className="list-group-item">
                                <Link href={'/'}>
                                    <a className='related-link'>Board of Directors <FiExternalLink className='icon-link' /></a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
      </div>
    </div> */}
    </>
  )
}

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { AiOutlineArrowRight } from "react-icons/ai";
import { BiPlay } from "react-icons/bi";

import manDate from "../public/mandate.png";
import finance from "../public/finance.jpg";
import loan from "../public/loan.jpg";

export default function about() {
  return (
    <>
    <section className='about-us-area'>
        <div className='about-bg' style={{ backgroundImage: 'url(/nile.jpg)'}}></div>
        <div className='container'>
            <div className='row'>
                <div className='col-12 col-md-12'>
                    <div className='inner-content'>
                        <div className='title'>
                            <h2>Blog</h2>
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
    <section className='intro-section'>
        <div className='container'>
          <div className='row'>
            <div className='col-xl-6 col-md-6'>
              <div className='intro-content-box'>
                <div className='sec-title'>
                  <h2>Agricultural Credit Facility <br/> Background</h2>
                </div>
                <div className='text'>
                  <p className='content-text'>
                    The Agricultural Credit Facility (ACF) was set up by the Government 
                    of Uganda (GoU) in partnership with Commercial Banks, 
                    Uganda Development Bank Ltd (UDBL), Micro Deposit Taking 
                    Institutions (MDIs) and Credit Institutions all referred to 
                    as Participating Financial Institutions (PFIs). The Scheme’s 
                    operations started in October 2009, with the aim of 
                    facilitating the provision of medium and long term 
                    financing to projects engaged in Agriculture and Agro 
                    processing, focusing mainly on commercialization and value addition.
                    <br/>
                        Loans under the ACF are disbursed to farmers and agro-processors 
                        through the PFIs at more favorable terms than are usually 
                        available under conventional loans. The scheme is 
                        administered by the Bank of Uganda (BoU) and its 
                        operations are guided by the Memorandum of Understanding 
                        (MoU) signed by all the stakeholders. The GoU is 
                        represented by the Ministry of Finance, Planning 
                        and Economic Development (MFPED). The scheme 
                        operates on a refinance basis in that the PFIs 
                        disburse all the loan amount required by a client 
                        and seek for a re-imbursement from BOU.
                  </p>
                  {/* <button type="button" className="btn btn-dark btn px-5 py-3 text-white mt-4 mt-sm-0">Read more</button> */}
                </div>
              </div>
            </div>
            <div className='col-xl-6 col-md-6'>
              <div className='intro-img-box'>
                <div className='inner-content' style={{ height: '500px', backgroundImage: 'url(/agriculture.jpg)', backgroundPosition: 'center', backgroundSize: 'cover'}}>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    <section className='blog-area'>
        <div className='container'>
            <div className='row'>
                <div className='col-xl-4 col-lg-4 col-md-4'>
                    <div className='single-blog'>
                        <div className='img-holder'>
                            <div className='inner'>
                                <Image alt='' src={finance} width={350} height={270} />
                                <div className='overlay-icon'>
                                    <Link href={'/'}>
                                        <a>
                                            <AiOutlineArrowRight />
                                        </a>
                                    </Link>
                                </div>
                            </div>
                            <div className='category-date-box'>
                                <div className='category'>
                                    <BiPlay className='category-icon' />
                                    <h5>
                                        <Link href={'/blog-item'}>
                                            <a>Finance</a>
                                        </Link>
                                    </h5>
                                </div>
                                <div className='date'>
                                    <h5>March 11, 2021</h5>
                                </div>
                            </div>
                        </div>
                        <div className='text-holder'>
                            <h3 className='blog-title'>
                                <Link href={'/blog-item'}>
                                    <a>What is Financial Stability?</a>
                                </Link>
                            </h3>
                        </div>
                    </div>
                </div>
                <div className='col-xl-4 col-lg-4 col-md-4'>
                    <div className='single-blog'>
                        <div className='img-holder'>
                            <div className='inner'>
                                <Image alt='' src={loan} width={350} height={270} />
                                <div className='overlay-icon'>
                                    <Link href={'/blog-item'}>
                                        <a>
                                            <AiOutlineArrowRight />
                                        </a>
                                    </Link>
                                </div>
                            </div>
                            <div className='category-date-box'>
                                <div className='category'>
                                    <BiPlay className='category-icon' />
                                    <h5>
                                        <Link href={'/blog-item'}>
                                            <a>Finance</a>
                                        </Link>
                                    </h5>
                                </div>
                                <div className='date'>
                                    <h5>January 16, 2023</h5>
                                </div>
                            </div>
                        </div>
                        <div className='text-holder'>
                            <h3 className='blog-title'>
                                <Link href={'/blog-item'}>
                                    <a>Eligibility for Refinance/Sub Loans</a>
                                </Link>
                            </h3>
                        </div>
                    </div>
                </div>
                <div className='col-xl-4 col-lg-4 col-md-4'>
                    <div className='single-blog'>
                        <div className='img-holder'>
                            <div className='inner'>
                                <Image alt='' src={finance} width={350} height={270} />
                                <div className='overlay-icon'>
                                    <Link href={'/blog-item'}>
                                        <a>
                                            <AiOutlineArrowRight />
                                        </a>
                                    </Link>
                                </div>
                            </div>
                            <div className='category-date-box'>
                                <div className='category'>
                                    <BiPlay className='category-icon' />
                                    <h5>
                                        <Link href={'/blog-item'}>
                                            <a>Finance</a>
                                        </Link>
                                    </h5>
                                </div>
                                <div className='date'>
                                    <h5>February 16, 2022</h5>
                                </div>
                            </div>
                        </div>
                        <div className='text-holder'>
                            <h3 className='blog-title'>
                                <Link href={'/blog-item'}>
                                    <a>Eligible Purposes for Sub Loans</a>
                                </Link>
                            </h3>
                        </div>
                    </div>
                </div>
                <div className='col-xl-4 col-lg-4 col-md-4'>
                    <div className='single-blog'>
                        <div className='img-holder'>
                            <div className='inner'>
                                <Image alt='' src={loan} width={350} height={270} />
                                <div className='overlay-icon'>
                                    <Link href={'/blog-item'}>
                                        <a>
                                            <AiOutlineArrowRight />
                                        </a>
                                    </Link>
                                </div>
                            </div>
                            <div className='category-date-box'>
                                <div className='category'>
                                    <BiPlay className='category-icon' />
                                    <h5>
                                        <Link href={'/blog-item'}>
                                            <a>Finance</a>
                                        </Link>
                                    </h5>
                                </div>
                                <div className='date'>
                                    <h5>September 10, 2020</h5>
                                </div>
                            </div>
                        </div>
                        <div className='text-holder'>
                            <h3 className='blog-title'>
                                <Link href={'/blog-item'}>
                                    <a>Collateral Requirements</a>
                                </Link>
                            </h3>
                        </div>
                    </div>
                </div>
                <div className='col-xl-4 col-lg-4 col-md-4'>
                    <div className='single-blog'>
                        <div className='img-holder'>
                            <div className='inner'>
                                <Image alt='' src={finance} width={350} height={270} />
                                <div className='overlay-icon'>
                                    <Link href={'/blog-item'}>
                                        <a>
                                            <AiOutlineArrowRight />
                                        </a>
                                    </Link>
                                </div>
                            </div>
                            <div className='category-date-box'>
                                <div className='category'>
                                    <BiPlay className='category-icon' />
                                    <h5>
                                        <Link href={'/blog-item'}>
                                            <a>Finance</a>
                                        </Link>
                                    </h5>
                                </div>
                                <div className='date'>
                                    <h5>June 16, 2022</h5>
                                </div>
                            </div>
                        </div>
                        <div className='text-holder'>
                            <h3 className='blog-title'>
                                <Link href={'/blog-item'}>
                                    <a>Financing the Grain Trade</a>
                                </Link>
                            </h3>
                        </div>
                    </div>
                </div>
                <div className='col-xl-4 col-lg-4 col-md-4'>
                    <div className='single-blog'>
                        <div className='img-holder'>
                            <div className='inner'>
                                <Image alt='' src={loan} width={350} height={270} />
                                <div className='overlay-icon'>
                                    <Link href={'/blog-item'}>
                                        <a>
                                            <AiOutlineArrowRight />
                                        </a>
                                    </Link>
                                </div>
                            </div>
                            <div className='category-date-box'>
                                <div className='category'>
                                    <BiPlay className='category-icon' />
                                    <h5>
                                        <Link href={'/blog-item'}>
                                            <a>Finance</a>
                                        </Link>
                                    </h5>
                                </div>
                                <div className='date'>
                                    <h5>January 1, 2023</h5>
                                </div>
                            </div>
                        </div>
                        <div className='text-holder'>
                            <h3 className='blog-title'>
                                <Link href={'/blog-item'}>
                                    <a>Procedure of Accessing the  Loan</a>
                                </Link>
                            </h3>
                        </div>
                    </div>
                </div>
                <div className='col-xl-4 col-lg-4 col-md-4'>
                    <div className='single-blog'>
                        <div className='img-holder'>
                            <div className='inner'>
                                <Image alt='' src={finance} width={350} height={270} />
                                <div className='overlay-icon'>
                                    <Link href={'/blog-item'}>
                                        <a>
                                            <AiOutlineArrowRight />
                                        </a>
                                    </Link>
                                </div>
                            </div>
                            <div className='category-date-box'>
                                <div className='category'>
                                    <BiPlay className='category-icon' />
                                    <h5>
                                        <Link href={'/blog-item'}>
                                            <a>Finance</a>
                                        </Link>
                                    </h5>
                                </div>
                                <div className='date'>
                                    <h5>January 16, 2023</h5>
                                </div>
                            </div>
                        </div>
                        <div className='text-holder'>
                            <h3 className='blog-title'>
                                <Link href={'/blog-item'}>
                                    <a>Objectives of the Loan</a>
                                </Link>
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

import Image from 'next/image'
import Link from 'next/link';
import React from 'react';

import finance from "../public/finance.jpg";

export default function blogItem() {
  return (
    <>
        <section className='about-us-area'>
            <div className='about-bg' style={{ backgroundImage: 'url(/header.jpg)'}}></div>
            <div className='container'>
                <div className='row'>
                    <div className='col-12 col-md-12'>
                        <div className='inner-content'>
                            <div className='title'>
                                <h2>Blog Item Page</h2>
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
        <section className='blog-details-area'>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-9 col-md-12 col-sm-12 content-side'>
                        <div className='blog-details-box'>
                            <div className='thm-blog'>
                                <div className='blog-details-img-box'>
                                    <div className='inner'>
                                        <Image src={finance} />
                                    </div>
                                </div>
                                <div className='blog-details-text-box'>
                                    <div className='blog-details-text-1'>
                                        <p className='blog-content-text'>
                                            Financial Stability refers to when the financial system 
                                            can maintain its fundamental functions and is also 
                                            resilient to disruptions that threaten these functions. 
                                            By extension, financial instability is a material 
                                            disruption to the system’s functions, which has 
                                            damaging consequences for the real economy.
                                        </p>
                                    </div>
                                    <div className='blog-details-text-2'>
                                        <p className='blog-content-text'>
                                            The Financial System refers to institutions including 
                                            commercial banks, insurance companies, capital markets 
                                            and other financial agents, as well as the financial 
                                            markets and the financial infrastructure of technical 
                                            systems that is required to make payments and exchange 
                                            securities.
                                        </p>
                                    </div>
                                    <div className='blog-details-text-3'>
                                        <p className='blog-content-text'>
                                            The system also includes the regulatory framework in 
                                            the form of legislation, supervision and regulation, 
                                            and other standards. The fundamental functions of the 
                                            financial system are to intermediate funds between 
                                            savers and investors, facilitate payments, and manage 
                                            risk. Any disruptions that would interfere with the 
                                            execution of these functions would result into 
                                            large costs to the economy. 
                                        </p>
                                    </div>
                                    <div className='blog-details-text-4'>
                                        <p className='blog-content-text'>
                                            For instance, if the payments system is disrupted, 
                                            banks will not be able to effect payments to each 
                                            other as well as to their customers. Another example 
                                            is a credit crunch, where access to credit is limited, 
                                            affecting financial institutions’ ability to fund 
                                            their lending activities.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-xl-3 col-lg-3'>
                        <div className='sidebar-box'>
                            <div className='widget widget-categories'>
                                <div className='sidebar-title'>
                                    <div className='tag-box'></div>
                                    <h3>Categories</h3>
                                </div>
                                <ul>
                                    <li className='item-1'>
                                        <Link href={'/'}>
                                            <a>Banking</a>
                                        </Link>
                                    </li>
                                    <li className='item-1'>
                                        <Link href={'/'}>
                                            <a>Finance</a>
                                        </Link>
                                    </li>
                                    <li className='item-1'>
                                        <Link href={'/'}>
                                            <a>Investments</a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

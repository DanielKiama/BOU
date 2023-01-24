import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FiExternalLink } from 'react-icons/fi'

import manDate from "../public/mandate.png"

export default function about() {
  return (
    <div>
      <div className="row">
        <div className="col-12">
          <div className="banner-about">
            <div className="overlay"></div>
            <div className="container">
              <div className="row">
                <div className="col-md-6 mb-4 mb-sm-0 about-content">

                  <h1 className="display-4 my-4 font-weight-bold">We are <span > Uganda's central bank.</span></h1>
                  <p>Promoting Price and Financial System Stability</p>
                  <button type="button" className="btn btn-dark btn px-5 py-3 text-white mt-4 mt-sm-0">Learn more</button>
                </div>
                <div className="col-md-8 h-100 clipped" >

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    <div className='container'>
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
    </div>
    </div>
  )
}

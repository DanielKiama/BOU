import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import FakeAd from "../public/FakeAdd.jpeg";


export default function career() {
  return (
    <>
      <section className='career-area'>
          <div className='career-bg' style={{ backgroundImage: 'url(/careers.jpg)'}}></div>
          <div className='container'>
              <div className='row'>
                  <div className='col-12 col-md-12'>
                      <div className='inner-content'>
                          <div className='title'>
                              <h2>Careers</h2>
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
              <div className='intro-img-box'>
                <div className='inner-content' style={{ height: '299px', backgroundImage: 'url(/wildlife.jpg)'}}>
                </div>
              </div>
            </div>
            <div className='col-xl-6 col-md-6'>
              <div className='intro-content-box'>
                <div className='sec-title'>
                  <h2>Human Resources <br/> are the Essence of Bank of Uganda.</h2>
                </div>
                <div className='text'>
                  <p>
                    BOU employs more than 900 staff members. We are looking 
                    for people who are willing to make a difference. 
                    If you are well qualified to promote change and 
                    demonstrate competences in relevant areas of the 
                    Central Bank, we encourage you to apply.
                  </p>
                  <button type="button" className="btn btn-dark btn px-5 py-3 text-white mt-4 mt-sm-0">Read more</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='management-area'>
        <div className='container'>
            <div className='row'>
                <div className='col-xl-6 col-6 col-md-6 col-12'>
                    <div className='management-text-box'>
                        <div className='inner-title'>
                            <h2>Be Aware!!</h2>
                        </div>
                        <div className='text'>
                            <p>
                              It has come to our attention that a fraudulent vacancy 
                              advertisement is circulating on various social media 
                              platforms. BoU has no connection whatsoever with the stated application portal. The Public should disregard the advert.
                            </p>
                        </div>
                    </div>
                </div>
                <div className='col-xl-6 col-6 col-md-6 col-12'>
                  <div className='intro-img-box'>
                    <div className='inner-content' style={{ height: '290px', marginTop: '30px'}}>
                      <Image src={FakeAd} />
                    </div>
                  </div>
                </div>
            </div>
        </div>
    </section>
    <section className='job-listing-area'>
      <div className='container'>
        <div className='row'>
          <div className='col-xl-12 col-12 col-md-12'>
            <div className='job-title'>
              <h3>Bank Of Uganda <br/> a Fun Place to Work</h3>
            </div>
          </div>
          <div className='col-xl-12 col-12 col-md-12'>
            <div className='job-listing-box'>
              <div className='table-outer'>
                <table className='job-listing-table'>
                  <thead className='header'>
                    <tr>
                      <th>Job Role</th>
                      <th>Description</th>
                      <th>Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className='job-role'>
                        <h3>Internship Programme</h3>
                      </td>
                      <td className='description'>
                        <p>
                          Following the easing of the Standard Operating Procedures (SOPs) 
                          and subsequent opening of the Economy, 
                          Management of Bank of Uganda has resumed 
                          its Internship Programme.
                        </p>
                      </td>
                      <td>
                        <div className='btn-box'>
                          <Link href={'/'}>
                            <a className='btn-one'>
                              <span className='txt'>Apply</span>
                            </a>
                          </Link>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className='job-role'>
                        <h3>Debt Management Programme</h3>
                      </td>
                      <td className='description'>
                        <p>
                          Applications are invited from suitably qualified 
                          nationals of MEFMI member countries to 
                          fill the position of Director - Debt Management Programme.
                        </p>
                      </td>
                      <td>
                        <div className='btn-box'>
                          <Link href={'/'}>
                            <a className='btn-one'>
                              <span className='txt'>Apply</span>
                            </a>
                          </Link>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

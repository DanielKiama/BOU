import React from 'react';
import Link from "next/link";
import { FaMoneyBillAlt } from 'react-icons/fa'
import { BsFillFileBarGraphFill } from 'react-icons/bs'

export default function NavBar() {
  return (
    <>
        
      {/* NAVIGATION */}

      <header className="navbar navbar-white navbar-expand-sm bg-white fixed-top">
        <div className="container">
          <Link href={"/"}>
            <a aria-label="Home" className="navbar-brand">
              <img alt='logo' width={"200px"} src="https://images.ctfassets.net/di1zc7l0b6uf/4TAhYBRhEu4x4DtOpsfGz3/f51d4a6bd98663247fb9d56b0ff28278/boglogo.png" />
            </a>
          </Link>


          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse">
            <span className="navbar-toggler-icon"></span>
          </button>


          <div id="navbarCollapse" className=" ">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link href={"/"}>
                  <a className="nav-link active">
                    Home
                  </a>
                </Link>

              </li>
              <li className="nav-item has_dropdown">
              <Link href={''}>
                  <a className="nav-link">
                    Bank of Uganda
                </a>
                </Link>
                   
            
                  <div className='mega_nav'>
                   <div className='container'>
                    <ul className='row'>

                      <li className='col-12 col-md-4 '>
                        <Link href={"/about"}>
                          <a className="nav-link active">
                           <div className='row p-0 m-0'>
                              <div className='col-3 p-0'>
                            <FaMoneyBillAlt className='icon'/>
                              </div>
                              <div className='col-9 p-0'>
                            <h6>Who we are <span className='badge badge-pill badge-warning'>New</span></h6>
                            <p>Some dummy text will go in here</p>
                              </div>
                           </div>
                           </a>
                           </Link>
                      </li>

                      <li className='col-12 col-md-4 '>
                        <div className='row p-0 m-0'>
                          <div className='col-3 p-0'>
                            <BsFillFileBarGraphFill className='icon' />
                          </div>
                          <div className='col-9 p-0'>
                            <h6>Careers </h6>
                            <p>Some dummy text will go in here</p>
                          </div>
                        </div>
                      </li>

                      <li className='col-12 col-md-4 '>
                        <div className='row p-0 m-0'>
                          <div className='col-3 p-0'>
                            <FaMoneyBillAlt className='icon' />
                          </div>
                          <div className='col-9 p-0'>
                            <h6>Agricultural Credit Facility</h6>
                            <p>Some dummy text will go in here</p>
                          </div>
                        </div>
                      </li>

                      <li className='col-12 col-md-4 '>
                        <div className='row p-0 m-0'>
                          <div className='col-3 p-0'>
                            <FaMoneyBillAlt className='icon' />
                          </div>
                          <div className='col-9 p-0'>
                            <h6>Who we are </h6>
                            <p>Some dummy text will go in here</p>
                          </div>
                        </div>
                      </li>

                      <li className='col-12 col-md-4 '>
                        <div className='row p-0 m-0'>
                          <div className='col-3 p-0'>
                            <FaMoneyBillAlt className='icon' />
                          </div>
                          <div className='col-9 p-0'>
                            <h6>Banking and Currency </h6>
                            <p>Some dummy text will go in here</p>
                          </div>
                        </div>
                      </li>
                     
                    </ul>
                   </div>
                  </div>
              </li>




              <li className="nav-item has_dropdown">
                <Link href={''}>
                  <a className="nav-link">
               Media center
                  </a>
                </Link>


                <div className='mega_nav'>
                  <div className='container'>
                    <ul className='row'>

                      <li className='col-12 col-md-4 '>
                        <Link href={"/blog"}>
                          <a className="nav-link active">
                            <div className='row p-0 m-0'>
                              <div className='col-3 p-0'>
                                <FaMoneyBillAlt className='icon' />
                              </div>
                              <div className='col-9 p-0'>
                                <h6> Events Calendar<span className='badge badge-pill badge-warning'>New</span></h6>
                                <p>Some dummy text will go in here</p>
                              </div>
                            </div>
                          </a>
                        </Link>
                      </li>

                      <li className='col-12 col-md-4 '>
                        <div className='row p-0 m-0'>
                          <div className='col-3 p-0'>
                            <BsFillFileBarGraphFill className='icon' />
                          </div>
                          <div className='col-9 p-0'>
                            <h6>BOU Public Lectures </h6>
                            <p>Some dummy text will go in here</p>
                          </div>
                        </div>
                      </li>

                      <li className='col-12 col-md-4 '>
                        <div className='row p-0 m-0'>
                          <div className='col-3 p-0'>
                            <FaMoneyBillAlt className='icon' />
                          </div>
                          <div className='col-9 p-0'>
                            <h6>Press Release</h6>
                            <p>Some dummy text will go in here</p>
                          </div>
                        </div>
                      </li>

                      <li className='col-12 col-md-4 '>
                        <div className='row p-0 m-0'>
                          <div className='col-3 p-0'>
                            <FaMoneyBillAlt className='icon' />
                          </div>
                          <div className='col-9 p-0'>
                            <h6>Governor's Profile </h6>
                            <p>Some dummy text will go in here</p>
                          </div>
                        </div>
                      </li>

                    

                    </ul>
                  </div>
                </div>
              </li>



              <li className="nav-item">
                <Link href={"/blog"}>
                  <a className="nav-link active">
                    Blog
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href={"/career"}>
                  <a className="nav-link active">
                    Careers
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href={"/"}>
                  <a className="nav-link active">
                    Contact
                  </a>
                </Link>
              </li>
            </ul>
          </div>

          <div className='mobile_nav'>

          
            <input type="checkbox" id="navi-toggle" className="checkbox" />
            <label for="navi-toggle" className="button">
              <span className="icon">&nbsp;</span>
            </label>
            <div className="background">&nbsp;</div>

  
            <nav className="nav">
              <ul className="list">
                <li className="item "> 
                  <Link href={"/"}>
                    <a className=" active">
                      Home
                    </a>
                  </Link>
                </li>
                <li className="item has_dropdown"> Bank of Uganda <span>+</span>
                <ul>
                    <li>
                      <Link href={"/about"}>
                        <a className=" active">
                          Who we are
                        </a>
                      </Link>
                    </li>
                    <li>Statitics</li>
                    <li>Financial inclusion</li>
                </ul>
                  
                </li>
                <li className="item"> 
                  <Link href={"/blog"}>
                    <a className=" active">
                      Blog
                    </a>
                  </Link>
                  </li>
                <li className="item">
                  <Link href={"/career"}>
                    <a className=" active">
                      Careers
                    </a>
                  </Link>
                </li>
                <li className="item"> Contact</li>
              </ul>
            </nav>
          </div>

        </div>
      </header>


      {/* NAVIGATON */}
    </>
  )
}

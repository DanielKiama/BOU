import React from 'react';
import Link from "next/link";

export default function NavBar() {
  return (
    <>
        
      {/* NAVIGATION */}

      <header className="navbar navbar-white navbar-expand-sm bg-white fixed-top">
        <div className="container">
          <Link href={"/"}>
            <a className="navbar-brand">
              <img width={"200px"} src="https://images.ctfassets.net/di1zc7l0b6uf/4TAhYBRhEu4x4DtOpsfGz3/f51d4a6bd98663247fb9d56b0ff28278/boglogo.png" />
            </a>
          </Link>


          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse">
            <span className="navbar-toggler-icon"></span>
          </button>


          <div id="navbarCollapse" className="collapse navbar-collapse">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link href={"/"}>
                  <a className="nav-link active">
                    Home
                  </a>
                </Link>

              </li>
              <li className="nav-item">
                <Link href={"/"}>
                  <a className="nav-link active">
                    Blog
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href={"/about"}>
                  <a className="nav-link active">
                    About
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



        </div>
      </header>


      {/* NAVIGATON */}
    </>
  )
}

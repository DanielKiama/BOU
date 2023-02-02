import Head from "next/head";
import client from "../lib/sanity";
import styled from "styled-components";
import Link from "next/link"
// import Image from "next/image";

import styles from "../styles/Home.module.css";

export default function Home({ data }) {
  // const { homepageData, siteHeaderData } = data;
  // console.log({ homepageData, siteHeaderData });
  return (
    <div className={styles.container}>
      <Head>
        <title>BOU</title>
        <meta name="description" content="Created By Steve Kibuika" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* BANNER */}
      <div className="row">
        <div className="col-12">
          <div className="banner">

            <div className="container">
              <div className="row">
                <div className="col-md-8 mb-4 mb-sm-0 headline">
                 
                  <h1 className=" my-4 font-weight-bold">Banking Made <span > Easy, More Secure & More Personal</span></h1>
                  <p>Promoting Price and Financial System Stability</p>
                  <button type="button" className="btn btn-dark btn px-5 py-3 text-white mt-4 mt-sm-0">Learn more</button>
                </div>
                <div className="col-md-8 h-100 clipped" >

                </div>
              </div>
            </div>
            <div className="right_graphic">

            </div>
          </div>
        </div>
      </div>

      {/* END BANNER */}

      {/* STARTS CARDS SECTION */}
      <div className="cards_Section  pt-5">
        <div className="container pt-5 ">
          <div className="row">
            <div className="col-12">
              <h2>Bank For A Better Tomorrow
              </h2>
              <p>
                Committed to helping our customers succeed.
              </p>
            </div>
          </div>
        </div>
        <div className="cards_wrap container  pt-5 ">
          <div className="cards_container row">

            <div className="col-12 col-md-4 text-center">
              <div className="card p-5">
                <div className="box">
                  <div className="content">

                    <h3>Inflation target</h3>
                    <h4>4.0 – 6.0 %</h4>
                    <p>CPI Inflation (12 month ptp.)</p>
                    <button className="btn btn-dark btn">Read more</button>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-4 text-center">
              <div className="card p-5">
                <div className="box">
                  <div className="content">

                    <h3>Inflation rate</h3>
                    <h4>10.3%</h4>
                    <p>CPI Inflation (12 month ptp.)</p>
                    <button className="btn btn-dark btn">Read more</button>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-4 text-center">
              <div className="card p-5">
                <div className="box">
                  <div className="content">

                    <h3>Policy interest rate</h3>
                    <h4>7.00%</h4>
                    <p>CPI Inflation (12 month ptp.)</p>
                    <button className="btn btn-dark btn">Read more</button>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>


      </div>


{/* END CARDS SECTION */}
      {/* NEWS */}
      <div className="news">
        <div className="container">
          <div className="row">
            <div className="col-12 mb-4">
              <h2>
                Latest updates
              </h2>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-4">
              <figure className="snip1360">
                <img src="https://www.bou.or.ug/bou/export/sites/default/.gallery/slider/Banners/MainSlider.jpg" alt="sample88" />
                <figcaption>
                  <h2>Bank of Uganda Monetary Policy Report December 2022</h2>
                  <p>I&apos;m looking for something that can deliver a 50-pound payload of snow on a small feminine target. Can you suggest something? Hello? </p>
                  <Link href={"/"}>
                    <a href="#" className="read-more">Read More</a>
                  </Link>
                </figcaption>
              </figure>

            </div>
            <div className="col-12 col-md-4">
              <figure className="snip1360">
                <img src="https://www.bou.or.ug/bou/export/sites/default/.gallery/slider/Banners/MainSlider.jpg" alt="sample88" />
                <figcaption>
                  <h2>Bank of Uganda State of the Economy Report December 2022</h2>
                  <p>I&apos;m looking for something that can deliver a 50-pound payload of snow on a small feminine target. Can you suggest something? Hello? </p>
                  <Link href={"/"}>
                    <a href="#" className="read-more">Read More</a>
                  </Link>
                </figcaption>
              </figure>

            </div>
            <div className="col-12 col-md-4">
              <figure className="snip1360">
                <img src="https://www.bou.or.ug/bou/export/sites/default/.gallery/slider/Banners/MainSlider.jpg" alt="sample88" />
                <figcaption>
                  <h2>Bank of Uganda Monetary Policy Report for October 2022</h2>
                  <p>I&apos;m looking for something that can deliver a 50-pound payload of snow on a small feminine target. Can you suggest something? Hello? </p>
                  <Link href={"/"}>
                    <a href="#" className="read-more">Read More</a>
                  </Link>
                </figcaption>
              </figure>

            </div>
           
          </div>
          <div className="row">
            <div className="col-12 col-md-4">
              <figure className="snip1360">
                <img src="https://www.bou.or.ug/bou/export/sites/default/.gallery/slider/Banners/MainSlider.jpg" alt="sample88" />
                <figcaption>
                  <h2>Bank of Uganda Monetary Policy Report December 2022</h2>
                  <p>I&apos;m looking for something that can deliver a 50-pound payload of snow on a small feminine target. Can you suggest something? Hello? </p>
                  <Link href={"/"}>
                    <a href="#" className="read-more">Read More</a>
                  </Link>
                </figcaption>
              </figure>

            </div>
            <div className="col-12 col-md-4">
              <figure className="snip1360">
                <img src="https://www.bou.or.ug/bou/export/sites/default/.gallery/slider/Banners/MainSlider.jpg" alt="sample88" />
                <figcaption>
                  <h2>Bank of Uganda State of the Economy Report December 2022</h2>
                  <p>I&apos;m looking for something that can deliver a 50-pound payload of snow on a small feminine target. Can you suggest something? Hello? </p>
                  <Link href={"/"}>
                    <a href="#" className="read-more">Read More</a>
                  </Link>
                </figcaption>
              </figure>

            </div>
            <div className="col-12 col-md-4">
              <figure className="snip1360">
                <img src="https://www.bou.or.ug/bou/export/sites/default/.gallery/slider/Banners/MainSlider.jpg" alt="sample88" />
                <figcaption>
                  <h2>Bank of Uganda Monetary Policy Report for October 2022</h2>
                  <p>I&apos;m looking for something that can deliver a 50-pound payload of snow on a small feminine target. Can you suggest something? Hello? </p>
                  <Link href={"/"}>
                    <a href="#" className="read-more">Read More</a>
                  </Link>
                </figcaption>
              </figure>

            </div>

          </div>
        </div>
      </div>
      {/* NEWS */}

      {/* CTA SECTION */}
      <div className="cta_section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1>Safe ● Convenient ● Secure </h1>
              <p></p>
              <p className="mt-4">
                A Financial system should be able to maintain its fundamental functions and is also resilient to disruptions that threaten these functions. By extension, financial instability is a material disruption to the system functions, which has damaging consequences for the real economy.
              </p>
              <p className="mt-5">
                <button className="btn btn-dark btn">Read more</button>
              </p>

            </div>
          </div>
        </div>
      </div>


      {/* CTA SECTION */}
      {/* FOREIGN EXCHANGE RATES */}
      <div className="exchange_section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2>
                Foreign Exchange Rates
              </h2>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th scope="col"></th>
                    <th scope="col">17 Jan 23</th>
                    <th scope="col">Buy</th>
                    <th scope="col">Sell</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row"><img src="https://images.ctfassets.net/di1zc7l0b6uf/6RhsRPr8GIvVHiZARyY4k/a88a27247800b98adb7b0928fd528cee/us1.webp" /></th>
                    <td>USD</td>
                    <td>151.8213</td>
                    <td>154.0369</td>
                  </tr>
                  <tr>

                    <th scope="row"><img src="https://images.ctfassets.net/di1zc7l0b6uf/26EShwKWxOkJKCpqj7RMSc/345aad91702a74e2821bf0a1d44d3e99/ca.webp" /></th>
                    <td>CAD</td>
                    <td>11.7658</td>
                    <td>113.8016</td>
                  </tr>
                  <tr>
                    <th scope="row"><img src="https://images.ctfassets.net/di1zc7l0b6uf/2EztpYXj3k1ctjCyLYCx9e/925951170ec518c01d8164c541487259/uk.webp" /></th>
                    <td>GBP</td>
                    <td>180.701</td>
                    <td>185.8248</td>
                  </tr>
                  <tr>
                    <th scope="row"><img src="https://images.ctfassets.net/di1zc7l0b6uf/4C17um4rB5toAF0JUx9jc0/c950f76684c635a11e1eb0483d921979/eu.webp" /></th>
                    <td>EUR</td>
                    <td>162.9618</td>
                    <td>168.0259</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* END FOREIGN EXCHANGE RATES */}
  
    </div>
  );
}

// // site header query
// const siteHeaderQuery = `*\[_type == "siteheader"\][0] {
//   title,
//   repoURL {
//     current
//   }
// }`;

// // home page query
// const homepageQuery = `*\[_type == "homepage"\][0] {
//   title,
//   subtitle,
//   "ctaUrl": cta {
//     current
//         },
//   image {
//     ...asset->
//   }
// }`;

// export async function getStaticProps() {
//   const homepageData = await client.fetch(homepageQuery);
//   const siteHeaderData = await client.fetch(siteHeaderQuery);

//   const data = { homepageData, siteHeaderData };

//   return {
//     props: {
//       data,
//     },
//     revalidate: 1,
//   };
// }

const HeaderDiv = styled.div`
  height: auto;
  width: 100%;

  font-family: Poppins, sans-serif;

  > p {
    font-size: 1.2em;
    font-weight: 550;
    color: #2d2e2d;
  }

  > a {
    font-size: 1em;
    font-weight: 450;
    text-decoration: underline;
    color: #12361c;
  }

  @media (max-width: 768px) {
    padding: 1em 2.5em;
  }
`;

const ContentDiv = styled.div`
  position: absolute;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  width: 80%;
  margin-top: 16em;
  font-family: Poppins, sans-serif;

  > h2 {
    font-size: 2em;
    font-weight: 790;
    font-family: Poppins, sans-serif;
  }

  > p {
    text-align: center;
    width: 50em;
    line-height: 1.3em;
    font-size: 1.1em;
    font-weight: 500;

    @media (max-width: 768px) {
      width: 100%;
      font-size: 1.1em;
    }
  }

  > a > button {
    background-color: #437d53;
    height: 3.2em;
    width: 13em;
    border: none;
    border-radius: 5px;
    color: white;
    font-weight: 750;
    font-size: 0.9em;
    cursor: pointer;
    margin-top: 3em;

    &:hover {
      background-color: #e4ebe5;
      color: #437d53;
      transition: ease-in-out 0.5s;
    }
  }

  @media (max-width: 768px) {
    margin-top: 10em;

    > h2 {
      text-align: center;
      font-size: 1.8em;
    }
  }
`;

import  { Fragment } from "react";

export default function Header() {
  return (
    <Fragment>
      <div className="ct-navbarMobile ct-navbarMobile--inverse">
        <a className="navbar-brand" href="index.html">
          <div className="ct-image logo">
            <img src="/images/la_miranda_logo.png" alt="Logo Country" />
          </div>
        </a>
        <button type="button" className="navbar-toggle">
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
        </button>
      </div>
      {/* HEADER PC */}
      <header
        className="ct-mediaSection scroll"
        id="home"
        data-stellar-background-ratio="0.3"
        data-type="parallax"
        data-height="460"
        data-bg-image="/images/content/custom/general/frigiliana_bis.jpg"
        data-bg-image-mobile="/images/content/custom/general/la_playa_buriana_3_bis.jpg"
      >
        HELLO HEADER
        <div className="container">
          <a href="index.html">
            <span className="ct-image-logo">
              <img
                style={{ maxHeight: "100px" }}
                src="/images/la_miranda_logo.png"
                alt="LogoMiranda"
              />
            </span>
          </a>
          <div className="clearfix"></div>
        </div>
        <div className="ct-menu" data-startnavbar="315" data-offset="460">
          <div className="container">
            <div className="ct-contact pull-right">
              <ul className="ct-socials list-inline list-unstyled">
                <li>
                  <a
                    href="https://www.facebook.com/createITpl"
                    data-toggle="tooltip"
                    data-placement="top"
                  >
                    <i className="fa fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com/createitpl"
                    data-toggle="tooltip"
                    data-placement="top"
                  >
                    <i className="fa fa-twitter"></i>
                  </a>
                </li>
              </ul>
              <div className="ct-contact-right">
                <i className="fa fa-phone fa-fw"></i> (012) 345-6789
              </div>
            </div>
            <div className="clearfix"></div>
            <a href="index.html">
              <div className="ct-logo ct-logo--transparent">
                <h1>
                  Houses <span>rent</span>
                </h1>
                <img src="/images/la_miranda_logo.png" alt="Logo Country" />
              </div>
            </a>
            <nav className="navbar pull-right">
              <ul className="nav navbar-nav">
                <li className="onepage">
                  <a href="#home" className="ct-js-btnScroll">
                    Home
                  </a>
                </li>
                <li className="onepage">
                  <a href="#about" className="ct-js-btnScroll">
                    About the House
                  </a>
                </li>
                <li className="onepage">
                  <a href="#gallery" className="ct-js-btnScroll">
                    Gallery
                  </a>
                </li>
                <li className="onepage">
                  <a href="#amenities" className="ct-js-btnScroll">
                    Amenities
                  </a>
                </li>
                <li className="onepage">
                  <a href="#latestoffers" className="ct-js-btnScroll">
                    Latest Offers
                  </a>
                </li>
                <li className="onepage">
                  <a href="#lastposts" className="ct-js-btnScroll">
                    Last Posts
                  </a>
                </li>
                <li className="onepage">
                  <a href="#contact" className="ct-js-btnScroll">
                    Contact
                  </a>
                </li>
              </ul>
              <div className="clearfix"></div>
            </nav>
            <div className="clearfix"></div>
          </div>
        </div>
      </header>
    </Fragment>
  );
}

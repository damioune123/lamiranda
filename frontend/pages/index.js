import React from 'react';
import { connect } from 'react-redux';
import { wrapper } from "../src/store/createStore";
import { getHomesAction } from "../src/actions";
import { END } from 'redux-saga';
import Image from 'next/image'

const mapStateToProps = state => ({
    homes: state.homes,
});
class Index extends React.Component {
    render() {
        console.log('INDEX homes', this.props.homes)
        return (
            <div className="container">
                <div className="ct-menuMobile">
                    <ul className="ct-menuMobile-navbar">
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About the House</a></li>
                        <li><a href="#gallery">Gallery</a></li>
                        <li><a href="#amenities">Amenities</a></li>
                        <li><a href="#latestoffers">Latest Offers</a></li>
                        <li><a href="#lastposts">Last Posts</a></li>
                        <li><a href="#latestoffers">Contact</a></li>
                    </ul>
                </div>

                <div id="ct-js-wrapper" className="ct-pageWrapper">
                    <div className="ct-navbarMobile ct-navbarMobile--inverse">
                        <a className="navbar-brand" href="index.html">
                            <div className="ct-image logo">
                                <img src="/images/la_miranda_logo.png" alt="Logo Country"/>
                            </div>
                        </a>
                        <button type="button" className="navbar-toggle">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                    </div>

                    <header className="ct-mediaSection scroll" id="home" data-stellar-background-ratio="0.3"
                            data-type="parallax" data-height="460" data-type="pattern"
                            data-bg-image="/images/content/custom/general/frigiliana_bis.jpg"
                            data-bg-image-mobile="/images/content/custom/general/la_playa_buriana_3_bis.jpg">
                        <div className="container">
                            <a href="index.html">
                              <span className="ct-image-logo">
                                  <img style={{'maxHeight': '100px'}} src="/images/la_miranda_logo.png" alt="LogoMiranda"/>
                              </span>
                            </a>
                            <div className="clearfix"></div>
                        </div>
                        <div className="ct-menu" data-startnavbar="315" data-offset="460">
                            <div className="container">
                                <div className="ct-contact pull-right">
                                    <ul className="ct-socials list-inline list-unstyled">
                                        <li><a href="https://www.facebook.com/createITpl" data-toggle="tooltip"
                                               data-placement="top" title="Facebook"><i className="fa fa-facebook"></i></a>
                                        </li>
                                        <li>
                                            <a href="https://twitter.com/createitpl" data-toggle="tooltip"
                                               data-placement="top" title="Twitter">
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
                                        <h1>Houses <span>rent</span></h1>
                                        <img src="/images/la_miranda_logo.png" alt="Logo Country"/>
                                    </div>
                                </a>
                                <nav className="navbar pull-right">
                                    <ul className="nav navbar-nav">
                                        <li className="onepage">
                                            <a href="#home" className="ct-js-btnScroll">Home</a>
                                        </li>
                                        <li className="onepage">
                                            <a href="#about" className="ct-js-btnScroll">About the House</a>
                                        </li>
                                        <li className="onepage">
                                            <a href="#gallery" className="ct-js-btnScroll">Gallery</a>
                                        </li>
                                        <li className="onepage">
                                            <a href="#amenities" className="ct-js-btnScroll">Amenities</a>
                                        </li>
                                        <li className="onepage">
                                            <a href="#latestoffers" className="ct-js-btnScroll">Latest Offers</a>
                                        </li>
                                        <li className="onepage">
                                            <a href="#lastposts" className="ct-js-btnScroll">Last Posts</a>
                                        </li>
                                        <li className="onepage">
                                            <a href="#contact" className="ct-js-btnScroll">Contact</a>
                                        </li>
                                    </ul>
                                    <div className="clearfix"></div>
                                </nav>
                                <div className="clearfix"></div>
                            </div>
                        </div>
                    </header>
                    <div className="container">
                        <div className="text-center ct-u-paddingTop60 ct-u-paddingBottom80 scroll" id="about">
                            <h2>Welcome</h2>
                            <small>Your summer house awaits! Book now today!</small>
                            <p>In a very beautiful place, near Olsztynka, in the middle of endless forests, lies the
                                small village Guzowy furnace. Bears the same name peaceful, forest lake, which is
                                located on our property, "The Furnace". Indeed, we are already Furnace, because some
                                500m behind the village Guzowy stove - but it is only we have direct access to the lake
                                Guzowy furnace and a unique view of both of our homes for a wide panorama of the lake
                                and the beautiful wall of the forest.</p>
                        </div>
                    </div>
                    <div className="ct-mediaSection" data-stellar-background-ratio="0.3" data-type="parallax"
                         data-bg-image="/images/content/custom/general/la_playa_buriana_1_bis.jpg"
                         data-bg-image-mobile="/images/content/custom/general/la_playa_buriana_3.jpg">
                        <div className="ct-dividedSection ct-dividedSection--primary">
                            <div className="ct-scaleImage">
                                <img src="/images/content/custom/casa/la_miranda.jpg" alt="Chairs"/>
                            </div>
                            <div className="container">
                                <div className="row">
                                    <div className="col-sm-4 col-sm-offset-8">
                                        <div className="ct-dividedSection-content ct-u-paddingBoth55">
                                            <h3 className="ct-u-paddingBottom10">Property you won’t find anywhere
                                                else.</h3>
                                            <p>We have direct access to the lake Guzowy furnace and a unique view of
                                                both of our homes for a wide panorama of the lake.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="ct-dividedSection-mask"></div>
                        </div>
                    </div>
                    <div className="container scroll" id="gallery">
                        <div className="text-center ct-u-paddingTop60 ct-u-paddingBottom20">
                            <h2>Gallery</h2>
                        </div>
                        <div className="row ct-u-paddingBoth30">
                            <div className="col-md-3 col-sm-6">
                                <div className="ct-galleryContainer ct-js-popupGallery ct-u-paddingBoth50">
                                    <div className="ct-galleryContainer-image">
                                        <a href="/images/content/custom/casa/piscina_1.jpg"
                                           className="ct-js-magnificPopupImage" title="Swimming Pool">
                                            <img src="/images/content/custom/casa/piscina_1.jpg" alt="Category"/>
                                        </a>
                                        <a href="/images/content/custom/casa/piscina_2.png"
                                           className="ct-js-magnificPopupImage" title="Swimming Pool"></a>
                                    </div>
                                    <h4>Swimming Pool</h4>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6">
                                <div className="ct-galleryContainer ct-js-popupGallery ct-u-paddingBoth50">
                                    <div className="ct-galleryContainer-image">
                                        <a href="/images/content/custom/general/la_playa_buriana_3.jpg"
                                           className="ct-js-magnificPopupImage" title="Tarrace">
                                            <img src="/images/content/custom/general/la_playa_buriana_3.jpg" alt="Category"/>
                                        </a>
                                        <a href="/images/content/custom/general/la_playa_buriana_3.jpg"
                                           className="ct-js-magnificPopupImage" title="Tarrace"></a>
                                        <a href="/images/content/custom/general/la_playa_buriana_3.jpg"
                                           className="ct-js-magnificPopupImage" title="Tarrace"></a>
                                        <a href="/images/content/custom/general/la_playa_buriana_3.jpg"
                                           className="ct-js-magnificPopupImage" title="Tarrace"></a>
                                        <a href="/images/content/custom/general/la_playa_buriana_3.jpg"
                                           className="ct-js-magnificPopupImage" title="Tarrace"></a>
                                        <a href="/images/content/custom/general/la_playa_buriana_3.jpg"
                                           className="ct-js-magnificPopupImage" title="Tarrace"></a>
                                    </div>
                                    <h4>Outdoor Terrace</h4>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6">
                                <div className="ct-galleryContainer ct-js-popupGallery ct-u-paddingBoth50">
                                    <div className="ct-galleryContainer-image">
                                        <a href="/images/content/custom/general/la_playa_buriana_3.jpg"
                                           className="ct-js-magnificPopupImage" title="Tarrace">
                                            <img src="/images/content/custom/general/la_playa_buriana_3.jpg" alt="Category"/>
                                        </a>
                                        <a href="/images/content/custom/general/la_playa_buriana_3.jpg"
                                           className="ct-js-magnificPopupImage" title="Living Room"></a>
                                        <a href="/images/content/custom/general/la_playa_buriana_3.jpg"
                                           className="ct-js-magnificPopupImage" title="Living Room"></a>
                                        <a href="/images/content/custom/general/la_playa_buriana_3.jpg"
                                           className="ct-js-magnificPopupImage" title="Living Room"></a>
                                        <a href="/images/content/custom/general/la_playa_buriana_3.jpg"
                                           className="ct-js-magnificPopupImage" title="Living Room"></a>
                                        <a href="/images/content/custom/general/la_playa_buriana_3.jpg"
                                           className="ct-js-magnificPopupImage" title="Living Room"></a>
                                    </div>
                                    <h4>Living Room</h4>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6">
                                <div className="ct-galleryContainer ct-js-popupGallery ct-u-paddingBoth50">
                                    <div className="ct-galleryContainer-image">
                                        <a href="/images/content/custom/general/la_playa_buriana_3.jpg"
                                           className="ct-js-magnificPopupImage" title="Bathroom">
                                            <img src="/images/content/custom/general/la_playa_buriana_3.jpg" alt="Category"/>
                                        </a>
                                        <a href="/images/content/custom/general/la_playa_buriana_3.jpg"
                                           className="ct-js-magnificPopupImage" title="Bathroom"></a>
                                        <a href="/images/content/custom/general/la_playa_buriana_3.jpg"
                                           className="ct-js-magnificPopupImage" title="Bathroom"></a>
                                        <a href="/images/content/custom/general/la_playa_buriana_3.jpg"
                                           className="ct-js-magnificPopupImage" title="Bathroom"></a>
                                    </div>
                                    <h4>Bathroom</h4>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6">
                                <div className="ct-galleryContainer ct-js-popupGallery ct-u-paddingBoth50">
                                    <div className="ct-galleryContainer-image">
                                        <a href="/images/content/custom/general/la_playa_buriana_3.jpg"
                                           className="ct-js-magnificPopupImage" title="Belfry">
                                            <img src="/images/content/custom/general/la_playa_buriana_3.jpg" alt="Belfry"/>
                                        </a>
                                        <a href="/images/content/custom/general/la_playa_buriana_3.jpg"
                                           className="ct-js-magnificPopupImage" title="Belfry"></a>
                                        <a href="/images/content/custom/general/la_playa_buriana_3.jpg"
                                           className="ct-js-magnificPopupImage" title="Belfry"></a>
                                    </div>
                                    <h4>Belfry</h4>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6">
                                <div className="ct-galleryContainer ct-js-popupGallery ct-u-paddingBoth50">
                                    <div className="ct-galleryContainer-image">
                                        <a href="/images/content/custom/general/la_playa_buriana_3.jpg"
                                           className="ct-js-magnificPopupImage" title="Laundry Room">
                                            <img src="/images/content/custom/general/la_playa_buriana_3.jpg"
                                                 alt="Laundry Room"/>
                                        </a>
                                        <a href="/images/content/custom/general/la_playa_buriana_3.jpg"
                                           className="ct-js-magnificPopupImage" title="Laundry Room"></a>
                                    </div>
                                    <h4>Laundry Room</h4>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6">
                                <div className="ct-galleryContainer ct-js-popupGallery ct-u-paddingBoth50">
                                    <div className="ct-galleryContainer-image">
                                        <a href="/images/content/custom/general/la_playa_buriana_3.jpg"
                                           className="ct-js-magnificPopupImage" title="Kitchen">
                                            <img src="/images/content/custom/general/la_playa_buriana_3.jpg" alt="Kitchen"/>
                                        </a>
                                        <a href="/images/content/custom/general/la_playa_buriana_3.jpg"
                                           className="ct-js-magnificPopupImage" title="Kitchen"></a>
                                        <a href="/images/content/custom/general/la_playa_buriana_3.jpg"
                                           className="ct-js-magnificPopupImage" title="Kitchen"></a>
                                        <a href="/images/content/custom/general/la_playa_buriana_3.jpg"
                                           className="ct-js-magnificPopupImage" title="Kitchen"></a>
                                    </div>
                                    <h4>Kitchen</h4>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6">
                                <div className="ct-galleryContainer ct-js-popupGallery ct-u-paddingBoth50">
                                    <div className="ct-galleryContainer-image">
                                        <a href="/images/content/custom/general/la_playa_buriana_3.jpg"
                                           className="ct-js-magnificPopupImage" title="Bedroom">
                                            <img src="/images/content/custom/general/la_playa_buriana_3.jpg" alt="Bedroom"/>
                                        </a>
                                        <a href="/images/content/custom/general/la_playa_buriana_3.jpg"
                                           className="ct-js-magnificPopupImage" title="Bedroom"></a>
                                        <a href="/images/content/custom/general/la_playa_buriana_3.jpg"
                                           className="ct-js-magnificPopupImage" title="Bedroom"></a>
                                        <a href="/images/content/custom/general/la_playa_buriana_3.jpg"
                                           className="ct-js-magnificPopupImage" title="Bedroom"></a>
                                    </div>
                                    <h4>Bedroom</h4>
                                </div>
                            </div>
                        </div>
                        <div className="row scroll" id="amenities">
                            <div className="text-center ct-u-paddingTop60 ct-u-paddingBottom20">
                                <h2>Amenities</h2>
                            </div>
                            <div
                                className="ct-dividedMediaSection ct-dividedMediaSection--owl ct-u-marginBottom10 ct-u-marginTop80">
                                <div className="ct-dividedMediaSection-left">
                                    <div id="sync1"
                                         className="owl-carousel ct-js-popupGallery owl-carousel--arrowsType2"
                                         data-snap-ignore="true">
                                        <div className="item">
                                            <a href="/images/content/custom/general/la_playa_buriana_3.jpg"
                                               className="ct-js-magnificPopupImage" title="Beautifull View">
                                                <img src="/images/content/custom/general/la_playa_buriana_3.jpg"
                                                     alt="Thumbnail Image 1"/>
                                            </a>
                                        </div>
                                        <div className="item">
                                            <a href="/images/content/custom/general/la_playa_buriana_3.jpg"
                                               className="ct-js-magnificPopupImage" title="Backyard">
                                                <img src="/images/content/custom/general/la_playa_buriana_3.jpg"
                                                     alt="Thumbnail Image 2"/>
                                            </a>
                                        </div>
                                        <div className="item">
                                            <a href="/images/content/custom/general/la_playa_buriana_3.jpg"
                                               className="ct-js-magnificPopupImage" title="Green Calm">
                                                <img src="/images/content/custom/general/la_playa_buriana_3.jpg"
                                                     alt="Thumbnail Image 3"/>
                                            </a>
                                        </div>
                                        <div className="item">
                                            <a href="/images/content/custom/general/la_playa_buriana_3.jpg"
                                               className="ct-js-magnificPopupImage" title="At the Lake">
                                                <img src="/images/content/custom/general/la_playa_buriana_3.jpg"
                                                     alt="Thumbnail Image 4"/>
                                            </a>
                                        </div>
                                        <div className="item">
                                            <a href="/images/content/custom/general/la_playa_buriana_3.jpg"
                                               className="ct-js-magnificPopupImage" title="Oasis of Calm">
                                                <img src="/images/content/custom/general/la_playa_buriana_3.jpg"
                                                     alt="Thumbnail Image 5"/>
                                            </a>
                                        </div>
                                        <div className="item">
                                            <a href="/images/content/custom/general/la_playa_buriana_3.jpg"
                                               className="ct-js-magnificPopupImage" title="Colourful Inn">
                                                <img src="/images/content/custom/general/la_playa_buriana_3.jpg"
                                                     alt="Thumbnail Image 6"/>
                                            </a>
                                        </div>
                                        <div className="item">
                                            <a href="/images/content/custom/general/la_playa_buriana_3.jpg"
                                               className="ct-js-magnificPopupImage" title="Golden Boneyard">
                                                <img src="/images/content/custom/general/la_playa_buriana_3.jpg"
                                                     alt="Thumbnail Image 7"/>
                                            </a>
                                        </div>
                                        <div className="item">
                                            <a href="/images/content/custom/general/la_playa_buriana_3.jpg"
                                               className="ct-js-magnificPopupImage" title="House in the Middle">
                                                <img src="/images/content/custom/general/la_playa_buriana_3.jpg"
                                                     alt="Thumbnail Image 8"/>
                                            </a>
                                        </div>
                                        <div className="item">
                                            <a href="/images/content/custom/general/la_playa_buriana_3.jpg"
                                               className="ct-js-magnificPopupImage" title="Figurines in the House">
                                                <img src="/images/content/custom/general/la_playa_buriana_3.jpg"
                                                     alt="Thumbnail Image 9"/>
                                            </a>
                                        </div>
                                        <div className="item">
                                            <a href="/images/content/custom/general/la_playa_buriana_3.jpg"
                                               className="ct-js-magnificPopupImage" title="Family">
                                                <img src="/images/content/custom/general/la_playa_buriana_3.jpg"
                                                     alt="Thumbnail Image 10"/>
                                            </a>
                                        </div>
                                        <div className="item">
                                            <a href="/images/content/custom/general/la_playa_buriana_3.jpg"
                                               className="ct-js-magnificPopupImage" title="Fancy Rooms">
                                                <img src="/images/content/custom/general/la_playa_buriana_3.jpg"
                                                     alt="Thumbnail Image 11"/>
                                            </a>
                                        </div>
                                        <div className="item">
                                            <a href="/images/content/custom/general/la_playa_buriana_3.jpg"
                                               className="ct-js-magnificPopupImage" title="Outside - Fresh Green">
                                                <img src="/images/content/custom/general/la_playa_buriana_3.jpg"
                                                     alt="Thumbnail Image 12"/>
                                            </a>
                                        </div>
                                        <div className="item">
                                            <a href="/images/content/custom/general/la_playa_buriana_3.jpg"
                                               className="ct-js-magnificPopupImage" title="Summer Houses">
                                                <img src="/images/content/custom/general/la_playa_buriana_3.jpg"
                                                     alt="Thumbnail Image 13"/>
                                            </a>
                                        </div>
                                        <div className="item">
                                            <a href="/images/content/custom/general/la_playa_buriana_3.jpg"
                                               className="ct-js-magnificPopupImage" title="Water Houses">
                                                <img src="/images/content/custom/general/la_playa_buriana_3.jpg"
                                                     alt="Thumbnail Image 14"/>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="ct-dividedMediaSection-right">
                                    <h3>Backyard Amenities</h3>
                                    <ul className="ct-listBox ct-listBox--divided list-unstyled">
                                        <li>
                                            <span><i className="fa fa-tree"></i> Nature</span>
                                            <span><i className="fa fa-bomb"></i> Grill</span>
                                            <div className="clearfix"></div>
                                        </li>
                                        <li>
                                            <span><i className="fa fa-cloud"></i> Close to a lake</span>
                                            <span><i className="fa fa-dollar"></i> Equipment rental</span>
                                            <div className="clearfix"></div>
                                        </li>
                                        <li>
                                            <span><i className="fa fa-fire"></i> Fireplace</span>
                                            <span><i className="fa fa-soccer-ball-o"></i> Pitch</span>
                                            <div className="clearfix"></div>
                                        </li>
                                        <li>
                                            <span><i className="fa fa-users"></i> No crowds</span>
                                            <span><i className="fa fa-play-circle-o"></i> TV room</span>
                                            <div className="clearfix"></div>
                                        </li>
                                        <li>
                                            <span><i className="fa fa-heart"></i> Friendly places</span>
                                            <span><i className="fa fa-gamepad"></i> Game room</span>
                                            <div className="clearfix"></div>
                                        </li>
                                    </ul>
                                </div>
                                <div className="clearfix"></div>
                            </div>
                            <div id="sync2" className="owl-carousel" data-snap-ignore="true">
                                <div className="item">
                                    <img
                                        src="/images/content/custom/general/la_playa_buriana_3.jpg"
                                        alt="Thumbnail Image 1"/>
                                </div>
                                <div className="item">
                                    <img
                                        src="/images/content/custom/general/la_playa_buriana_3.jpg"
                                        alt="Thumbnail Image 2"/>
                                </div>
                                <div className="item">
                                    <img
                                        src="/images/content/custom/general/la_playa_buriana_3.jpg"
                                        alt="Thumbnail Image 3"/>
                                </div>
                                <div className="item">
                                    <img
                                        src="/images/content/custom/general/la_playa_buriana_3.jpg"
                                        alt="Thumbnail Image 4"/>
                                </div>
                                <div className="item">
                                    <img
                                        src="/images/content/custom/general/la_playa_buriana_3.jpg"
                                        alt="Thumbnail Image 5"/>
                                </div>
                                <div className="item">
                                    <img
                                        src="/images/content/custom/general/la_playa_buriana_3.jpg"
                                        alt="Thumbnail Image 6"/>
                                </div>
                                <div className="item">
                                    <img
                                        src="/images/content/custom/general/la_playa_buriana_3.jpg"
                                        alt="Thumbnail Image 7"/>
                                </div>
                                <div className="item">
                                    <img
                                        src="/images/content/custom/general/la_playa_buriana_3.jpg"
                                        alt="Thumbnail Image 8"/>
                                </div>
                                <div className="item">
                                    <img
                                        src="/images/content/custom/general/la_playa_buriana_3.jpg"
                                        alt="Thumbnail Image 9"/>
                                </div>
                                <div className="item">
                                    <img
                                        src="/images/content/custom/general/la_playa_buriana_3.jpg"
                                        alt="Thumbnail Image 10"/>
                                </div>
                                <div className="item">
                                    <img
                                        src="/images/content/custom/general/la_playa_buriana_3.jpg"
                                        alt="Thumbnail Image 11"/>
                                </div>
                                <div className="item">
                                    <img
                                        src="/images/content/custom/general/la_playa_buriana_3.jpg"
                                        alt="Thumbnail Image 12"/>
                                </div>
                                <div className="item">
                                    <img
                                        src="/images/content/custom/general/la_playa_buriana_3.jpg"
                                        alt="Thumbnail Image 13"/>
                                </div>
                                <div className="item">
                                    <img
                                        src="/images/content/custom/general/la_playa_buriana_3.jpg"
                                        alt="Thumbnail Image 14"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="ct-mediaSection ct-u-marginTop110" data-stellar-background-ratio="0.3"
                         data-type="parallax"
                         data-bg-image="/images/content/beach-discount-bg.jpg"
                         data-bg-image-mobile="/images/content/beach-discount-bg.jpg">
                        <div className="container">
                            <div className="ct-u-marginBoth50" style={{'paddingLeft': '40px', 'paddingRight': '40px'}}>
                                <div className="ct-js-owl owl-carousel owl-carousel--arrowsType1" data-single="false"
                                     data-pagination="false" data-navigation="true" data-lgitems="3" data-mditems="2"
                                     data-autoplay="true" data-items="4" data-snap-ignore="true">
                                    <div className="item">
                                        <div className="ct-promo">
                                            <span className="ct-js-counter" data-ct-to="20"
                                                  data-ct-speed="5000">20</span><span>%</span>
                                            <span>off on winter</span>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="ct-promo">
                                            <span className="ct-js-counter" data-ct-to="15"
                                                  data-ct-speed="5000">15</span><span>%</span>
                                            <span>off on holidays</span>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="ct-promo">
                                            <span className="ct-js-counter" data-ct-to="35"
                                                  data-ct-speed="5000">35</span><span>%</span>
                                            <span>off on weekends</span>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="ct-promo">
                                            <span className="ct-js-counter" data-ct-to="10"
                                                  data-ct-speed="5000">10</span><span>%</span>
                                            <span>off on summer</span>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="ct-promo">
                                            <span className="ct-js-counter" data-ct-to="50"
                                                  data-ct-speed="5000">50</span><span>%</span>
                                            <span>off on parties</span>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="ct-promo">
                                            <span className="ct-js-counter" data-ct-to="20"
                                                  data-ct-speed="5000">20</span><span>%</span>
                                            <span>off on courses</span>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="ct-promo">
                                            <span className="ct-js-counter" data-ct-to="10"
                                                  data-ct-speed="5000">10</span><span>%</span>
                                            <span>off on span</span>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="ct-promo">
                                            <span className="ct-js-counter" data-ct-to="5" data-ct-speed="5000">5</span><span>%</span>
                                            <span>off on shopping</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="text-center ct-u-paddingTop60 ct-u-paddingBottom20 scroll" id="latestoffers">
                            <h2>Latest Offers</h2>
                        </div>
                        <div className="row ct-u-paddingBottom30 ct-u-marginTop80">
                            <div className="col-md-6">
                                <div className="ct-js-owl owl-carousel owl-carousel--arrowsType2 ct-js-popupGallery"
                                     data-single="true" data-autoplay="false" data-pagination="false"
                                     data-navigation="true" data-items="1" data-snap-ignore="true">
                                    <div className="item">
                                        <a href="/images/content/custom/general/la_playa_buriana_3.jpg"
                                           className="ct-js-magnificPopupImage" title="Beautifull House">
                                            <img src="/images/content/custom/general/la_playa_buriana_3.jpg"
                                                 alt="Latest Offer 1"/>
                                        </a>
                                    </div>
                                    <div className="item">
                                        <a href="/images/content/custom/general/la_playa_buriana_3.jpg"
                                           className="ct-js-magnificPopupImage" title="Luxury Interior">
                                            <img src="/images/content/custom/general/la_playa_buriana_3.jpg"
                                                 alt="Latest Offer 2"/>
                                        </a>
                                    </div>
                                    <div className="item">
                                        <a href="/images/content/custom/general/la_playa_buriana_3.jpg"
                                           className="ct-js-magnificPopupImage" title="Modern Interior">
                                            <img src="/images/content/custom/general/la_playa_buriana_3.jpg"
                                                 alt="Latest Offer 3"/>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="ct-infoBox ct-infoBox--casual">
                                    <div className="ct-infoBox-content">
                                        <a href="book.html"><h3>House In The forest With Lovely Views</h3></a>
                                        <p>This house is for 8 ( up to 12 ) stands on the edge of the escarpment ,
                                            making the windows you can see the beautiful panorama of the lake.</p>
                                        <p className="ct-fw-600">The cost of renting - $4600 per week.</p>
                                        <a href="book.html" className="btn btn-primary">Book Now</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row ct-u-paddingBottom30 ct-u-marginBottom50">
                            <div className="col-md-6">
                                <div className="ct-js-owl owl-carousel owl-carousel--arrowsType2 ct-js-popupGallery"
                                     data-single="true" data-autoplay="false" data-pagination="false"
                                     data-navigation="true" data-items="1" data-snap-ignore="true">
                                    <div className="item">
                                        <a href="/images/content/custom/general/la_playa_buriana_3.jpg"
                                           className="ct-js-magnificPopupImage" title="Cosy Winter House">
                                            <img src="/images/content/custom/general/la_playa_buriana_3.jpg"
                                                 alt="Latest Offer 1"/>
                                        </a>
                                    </div>
                                    <div className="item">
                                        <a href="/images/content/custom/general/la_playa_buriana_3.jpg"
                                           className="ct-js-magnificPopupImage" title="Snow House">
                                            <img src="/images/content/custom/general/la_playa_buriana_3.jpg"
                                                 alt="Latest Offer 2"/>
                                        </a>
                                    </div>
                                    <div className="item">
                                        <a href="/images/content/custom/general/la_playa_buriana_3.jpg"
                                           className="ct-js-magnificPopupImage" title="Winter Interior">
                                            <img src="/images/content/custom/general/la_playa_buriana_3.jpg"
                                                 alt="Latest Offer 3"/>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="ct-infoBox ct-infoBox--casual">
                                    <div className="ct-infoBox-content">
                                        <a href="book.html"><h3>Beautiful Villa Surrounded By Mountains</h3></a>
                                        <p>This villa is for 5 people ( up to 8 ) is surrounded by a pine forest, the
                                            path that leads to the private places.</p>
                                        <p className="ct-fw-600">The cost of renting - $2700 week.</p>
                                        <a href="book.html" className="btn btn-primary">Book Now</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="ct-mediaSection" data-stellar-background-ratio="0.3" data-type="parallax"
                         data-bg-image="/images/content/beach-divided-section4.jpg"
                         data-bg-image-mobile="/images/content/beach-divided-section4.jpg">
                        <div className="ct-dividedSection ct-dividedSection--primary">
                            <div className="ct-scaleImage">
                                <img src="/images/content/beach-divided-section-middle4.jpg" alt="Recipe"/>
                            </div>
                            <div className="container">
                                <div className="row">
                                    <div className="col-sm-4 col-sm-offset-8">
                                        <div className="ct-dividedSection-content ct-u-paddingBoth55">
                                            <h3 className="ct-u-paddingBottom10">Property you won’t find anywhere
                                                else.</h3>
                                            <p>We have direct access to the lake Guzowy furnace and a unique view of
                                                both of our homes for a wide panorama of the lake.</p>
                                            <a href="book.html" className="btn btn-link">Book Now</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="ct-dividedSection-mask"></div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="col-md-10 col-md-offset-1 text-center">
                            <div className="text-center ct-u-paddingTop70 ct-u-paddingBottom120">
                                <h2>Our Latest Tweets</h2>
                                <i className="fa fa-twitter fa-3x ct-u-marginBoth30"></i>
                                <div className="ct-js-twitter"></div>
                            </div>
                        </div>
                    </div>
                    <div className="ct-board scroll" id="lastposts">
                        <div className="container ct-board-content">
                            <div className="ct-wallBox text-center">
                                <a href="blog-single.html">
                                    <img src="/images/content/custom/general/la_playa_buriana_3.jpg" alt="Board Image 1"/>
                                </a>
                                <div className="ct-wallBox-date">Posted by <a href="#">Admin</a> / 19 March, 2015</div>
                                <a href="#"><h4>The Living Room</h4></a>
                                <p>
                                    XXI century gave a rise to yet another revolution in Europe, but this time it's not
                                    a french grizzly struggle for human rights.
                                    It's a choice of a luxury that came straight from scandinavian lands. Your living
                                    room will never be the same!
                                </p>
                                <a className="btn btn-transparent" href="blog-single.html">Read Article</a>
                            </div>
                            <div className="ct-wallBox text-center">
                                <a href="blog-single.html">
                                    <img src="/images/content/custom/general/la_playa_buriana_3.jpg" alt="Board Image 2"/>
                                </a>
                                <div className="ct-wallBox-date">Posted by <a href="#">Admin</a> / 18 March, 2015</div>
                                <a href="#"><h4>Our Big Fireplace</h4></a>
                                <p>Once a young russian furniture designer claimed
                                    that both "empires of west and east strife for a simplicity in their houses that can
                                    keep up the pace with a modern man".
                                    Thus began a new trend of house decore. </p>
                                <a className="btn btn-transparent" href="blog-single.html">Read Article</a>
                            </div>
                            <div className="ct-wallBox text-center">
                                <a href="blog-single.html">
                                    <img src="/images/content/custom/general/la_playa_buriana_3.jpg" alt="Board Image 3"/>
                                </a>
                                <div className="ct-wallBox-date">Posted by <a href="#">Admin</a> / 18 March, 2015</div>
                                <a href="#"><h4>Our Big Fireplace</h4></a>
                                <p>Remember the times when music bands and computer companies rose from small, smelly
                                    garages? Those times are way behind us, or are they?
                                    Learn for yourself why a garage can now become a substitution for your living. </p>
                                <a className="btn btn-transparent" href="blog-single.html">Read Article</a>
                            </div>
                            <div className="ct-wallBox ct-wallBox-last text-center">
                                <h4 className="ct-u-paddingTop60">Sign Up<span>For Free</span></h4>
                                <p>Be the first to receive our latest news about our bookings! Enter your email
                                    address:</p>
                                <form className="contactForm validateIt" method="post"
                                      action="/assets/form/send.php"
                                      role="form" data-email-subject="Contact Form" data-show-errors="true">
                                    <div className="input-group">
                                        <input type="text" className="form-control" name="field[]"
                                               placeholder="Your Email Address" required/>
                                    </div>
                                    <div className="input-group ct-u-paddingTop30">
                                        <button className="btn btn-secondary" type="submit">Subscribe</button>
                                    </div>
                                </form>
                                <div className="successMessage alert alert-success ct-u-marginTop20"
                                     style={{'display': 'none'}}>
                                    <button type="button" className="close" data-dismiss="alert"
                                            aria-hidden="true">&times;</button>
                                    Thank You!
                                </div>
                                <div className="errorMessage alert alert-danger ct-u-marginTop20" style={{'display': 'none'}}>
                                    <button type="button" className="close" data-dismiss="alert"
                                            aria-hidden="true">&times;</button>
                                    Ups! An error occured. Please try again later.
                                </div>
                            </div>
                            <div className="clearfix"></div>
                        </div>
                    </div>
                    <div className="container">La Miranda at Torrox village - home vacation
                        <div className="ct-googleMap ct-js-googleMap" data-location="Warszawa, ul. Narbutta 22/15"
                             data-zoom="15" data-height="465"></div>
                    </div>
                    <div className="ct-contactBox">
                        <div className="container">
                            <div className="text-center ct-u-paddingTop60 ct-u-paddingBottom100 scroll" id="contact">
                                <h2>Contact Us Directly</h2>
                                <small>Do you have questions? Write to us.</small>
                                <p>For a non-binding reservation please enter below the additional company information.
                                    We are happy to answer all your open questions in a personal conversation. Call us
                                    at: (012) 345-6789. If you are not fluent reach, please leave a callback request in
                                    your mailbox. If you want to contact us, please fill in the following fields: If you
                                    want to contact us, please fill in the following fields:</p>
                                <div className="row">
                                    <div className="col-sm-6 col-sm-offset-3">
                                        <form className="ct-bookForm contactForm validateIt" method="post"
                                              action="/assets/form/send.php"
                                              role="form" data-email-subject="Contact Form" data-show-errors="true">
                                            <div className="input-group">
                                                <input type="text" className="form-control" name="field[]"
                                                       placeholder="first name" required/>
                                            </div>
                                            <div className="input-group">
                                                <input type="text" className="form-control" name="field[]"
                                                       placeholder="last name" required/>
                                            </div>
                                            <div className="input-group">
                                                <input type="email" className="form-control" name="field[]"
                                                       placeholder="email" required/>
                                            </div>
                                            <div className="input-group">
                                                <textarea rows="6" className="form-control" name="field[]"
                                                          placeholder="message" required></textarea>
                                            </div>
                                            <div className="input-group ct-u-paddingTop20">
                                                <button type="submit" className="btn btn-primary">Contact Us</button>
                                            </div>
                                        </form>
                                        <div className="successMessage alert alert-success ct-u-marginTop20"
                                             style={{'display': 'none'}}>
                                            <button type="button" className="close" data-dismiss="alert"
                                                    aria-hidden="true">&times;</button>
                                            Thank You!
                                        </div>
                                        <div className="errorMessage alert alert-danger ct-u-marginTop20"
                                             style={{'display': 'none'}}>
                                            <button type="button" className="close" data-dismiss="alert"
                                                    aria-hidden="true">&times;</button>
                                            Ups! An error occured. Please try again later.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <footer className="ct-u-paddingTop80">
                        <div className="container">
                            <div className="row text-center-sm">
                                <div className="col-sm-3">
                                    <a href="index.html">
                    <span className="ct-white-logo">
                        <img src="/images/la_miranda_logo.png" alt="Logo"/>
                    </span>
                                    </a>
                                </div>
                                <div className="col-sm-1">

                                </div>
                                <div className="col-sm-3">
                                    <div className="widget">
                                        <div className="widget-title"><i className="fa fa-map-marker fa-fw"></i> Spain
                                        </div>
                                        <address>
                                            El camino<br/>
                                            96190Torrox<br/>
                                            09533 46 19 27<br/>
                                        </address>
                                    </div>
                                </div>

                                <div className="col-sm-3">
                                </div>
                            </div>
                            <div className="ct-u-paddingTop50 text-center">
                                <hr/>
                                <div
                                    className="ct-scrollUpButton ct-js-btnScrollUp ct-u-marginTop40 ct-u-marginBottom30">Go
                                    to top
                                </div>
                            </div>
                        </div>
                    </footer>
                </div>
            </div>
        );
    }
}
export default connect(mapStateToProps)(Index);

export const getStaticProps = wrapper.getStaticProps(store => async context => {
        store.dispatch(getHomesAction());
        store.dispatch(END);
        await store.sagaTask.toPromise();
    });
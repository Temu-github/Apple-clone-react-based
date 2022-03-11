import React from "react";
import Product from "../../HomePage/Product/Product";
import iphone13 from "../../../images/Iphone/iphone_13_pro_logo__2azch2ecffmi_small_2x.png"
import iphone13img from "../../../images/Iphone/iphone_13_logo__wnft2v5iq2qa_large_2x.png"
import ProductIphone from "../../HomePage/Product/ProductIphone";


function Iphones() {
    return (
        <div className="iphonesPage">
            <div class="welcome_info_wrapper">
                <div class="welcome_info sub-heading-links">
                    <p className=" title-wraper shop-heading " > Get 3% Daily Cash back with Apple Card. And pay for your new iPhone over 24 months, interest‑free when you choose to check out with Apple Card Monthly Installments.*<a href="/some link/"> <br/>Learn more</a> </p>
                </div>

            </div>
            <section className="iphone-wrapper">
                <div className="container">
                    <div className="title-wraper bold black">
                        <img src={iphone13} alt="iphone13-logo"/>
                    </div>
                    <div className="title-wraper bold black">
                        Oh.So.Pro.
                    </div>
                    <div className="description-wrapper black">
                        From $41.62/mo. for 24 mo. or $999 before trade‑in<sup>1</sup>
                    </div>
                    <div className="links-wrapper ">
                        <Product linkName="Buy" linkUrl="/some link"
                            linkName1="Learn more" linkUrl1="/some link" />
                    </div>
                </div>
            </section>
            <div className="iphone-container">
                <section className="iphone-2-wrapper">
                    <div className="container">
                        
                        <div className="logo-wrapper">
                             <img src={iphone13img} />
                        </div>
                        <div className="title-wraper bold13">
                           
                            Your new Superpower.
                        </div>
                        <div className="description-wrapper  ">
                            From $29.12/mo. for 24 mo. or $699 before trade‑in<sup>1</sup>
                        </div>
                        <div className="links-wrapper">
                            <Product linkName="Buy" linkUrl="/some link"
                                linkName1="Learn more" linkUrl1="/some link" />
                        </div>
                    </div>
                </section></div>
            <section className="iphone-3-wrapper">
                <div className="container ">
                    <div className="description-wrapper">
                        A Guided Tour of
                    </div>
                    <div className="title-wraper bold13 black">
                        iPhone 13 & iPhone 13 Pro
                    </div>
                    <div className="links-wrapper">
                    <a href="/some link/">Watch the film</a>
                    </div>
                </div>
            </section>
            <section className="iphone-4-wrapper">
                <div className="container-fluid">
                    <div className="row">
                        <div className="left-side-wrapper col-sm-12 col-md-6">
                            <div className="left-side-container">
                                <div className="title-wraper bold13 black">
                                    Trade in your smartphone for credit.
                                </div>
                                <div className="description-wraper">
                                    With Apple Trade In, you can get credit toward a new Phone when you trade in an eligible smartphone.<sup>6</sup> Its good for you and the planet.
                                </div>
                                <div className="links-wrapper">
                                    <ProductIphone linkName="Learn more" linkUrl="/some link" />
                                </div>
                            </div>
                        </div>
                        <div className="right-side-wrapper col-sm-12 col-md-6">
                            <div className="right-side-container">
                                <div className="title-wraper bold13 black ">
                                    Get 3% Daily Cash back with Apple Card.
                                </div>
                                <div className="description-wraper">
                                    And pay for your new iPhone over 24 months, interest‑free when you choose to check out with Apple Card Monthly Installments.*
                                </div>
                                <div className="links-wrapper">
                                    <ProductIphone linkName="Learn more" linkUrl="/some link" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="iphone-5-wrapper dddd">
                <div className="container">
                    <div className="title-wraper bold13 black iphone13">
                        Why Apple is the best place to buy iPhone.
                    </div>
                    <div className="description-wrapper iphone13 ">
                        You can choose a payment option that works for you, pay less with a trade‑in, connect your new iPhone to your carrier, and get set up quickly.
                        You can also chat with a Specialist anytime.
                    </div>
                    <div className="links-wrapper iphone13">
                        <ProductIphone linkName="Learn more" linkUrl="/some link" />
                    </div>
                </div>
            </section>
        </div>
    )
}
export default Iphones

import React from 'react';

const Features = () => {
    return (
        <div className="features">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 feature_col">
                        <div className="feature d-flex flex-row align-items-start justify-content-start">
                            <div className="feature_left">
                                <div className="feature_icon"><img src={require("../../assets/images/icon_1.svg")} alt="icon_1" /></div>
                            </div>
                            <div className="feature_right d-flex flex-column align-items-start justify-content-center">
                                <div className="feature_title">Fast Secure Payments</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 feature_col">
                        <div className="feature d-flex flex-row align-items-start justify-content-start">
                            <div className="feature_left">
                                <div className="feature_icon ml-auto mr-auto"><img src={require("../../assets/images/icon_2.svg")} alt="icon_2" /></div>
                            </div>
                            <div className="feature_right d-flex flex-column align-items-start justify-content-center">
                                <div className="feature_title">Premium Products</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 feature_col">
                        <div className="feature d-flex flex-row align-items-start justify-content-start">
                            <div className="feature_left">
                                <div className="feature_icon"><img src={require("../../assets/images/icon_3.svg")} alt="icon_3" /></div>
                            </div>
                            <div className="feature_right d-flex flex-column align-items-start justify-content-center">
                                <div className="feature_title">Free Delivery</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Features;
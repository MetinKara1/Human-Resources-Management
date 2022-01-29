import React from 'react';

const Boxes = () => {
    return (
        <div className="boxes">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="boxes_container d-flex flex-row align-items-start justify-content-between flex-wrap">
                            <div className="box">
                                <div className="background_image" style={{ backgroundImage: 'url(../../../assets/images/box_1.jpg)' }} />
                                <div className="box_content d-flex flex-row align-items-center justify-content-start">
                                    <div className="box_left">
                                        <div className="box_image">
                                            <a href="~/Category/Category">
                                                <div className="background_image" style={{ backgroundImage: 'url(../../../assets/images/box_1_img.jpg)' }} />
                                            </a>
                                        </div>
                                    </div>
                                    <div className="box_right text-center">
                                        <div className="box_title">Trendsetter Collection</div>
                                    </div>
                                </div>
                            </div>
                            <div className="box">
                                <div className="background_image" style={{ backgroundImage: 'url(../../../assets/images/box_2.jpg)' }} />
                                <div className="box_content d-flex flex-row align-items-center justify-content-start">
                                    <div className="box_left">
                                        <div className="box_image">
                                            <a href="~/Category/Category">
                                                <div className="background_image" style={{ backgroundImage: 'url(../../../assets/images/box_2_img.jpg)' }} />
                                            </a>
                                        </div>
                                    </div>
                                    <div className="box_right text-center">
                                        <div className="box_title">Popular Choice</div>
                                    </div>
                                </div>
                            </div>
                            <div className="box">
                                <div className="background_image" style={{ backgroundImage: 'url(../../../assets/images/box_3.jpg)' }} />
                                <div className="box_content d-flex flex-row align-items-center justify-content-start">
                                    <div className="box_left">
                                        <div className="box_image">
                                            <a href="~/Category/Category">
                                                <div className="background_image" style={{ backgroundImage: 'url(../../../assets/images/box_3_img.jpg)' }} />
                                            </a>
                                        </div>
                                    </div>
                                    <div className="box_right text-center">
                                        <div className="box_title">Popular Choice</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Boxes;
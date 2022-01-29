import React from 'react';

const Product = () => {
    return (
        <div className="products">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 offset-lg-3">
                        <div className="section_title text-center">Popular on Little Closet</div>
                    </div>
                </div>
                <div className="row page_nav_row">
                    <div className="col">
                        <div className="page_nav">
                            <ul className="d-flex flex-row align-items-start justify-content-center">
                                <li className="active"><a href="~/Category/Category">Women</a></li>
                                <li><a href="~/Category/Category">Men</a></li>
                                <li><a href="~/Category/Category">Kids</a></li>
                                <li><a href="~/Category/Category">Home Deco</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="row products_row">
                    <div className="col-xl-4 col-md-6">
                        <div className="product">
                            <div className="product_image"><img src={require("../../../assets/images/product1.jpeg")} alt="" /></div>
                            <div className="product_content">
                                <div className="product_info d-flex flex-row align-items-start justify-content-start">
                                    <div>
                                        <div>
                                            <div className="product_name"><a href="/Home/ShowProductDetail">Cool Clothing with Brown Stripes</a></div>
                                            <div className="product_category">In <a href="~/Category/Category">Category</a></div>
                                        </div>
                                    </div>
                                    <div className="ml-auto text-right">
                                        <div className="rating_r rating_r_4 home_item_rating"><i /><i /><i /><i /><i /></div>
                                        <div className="product_price text-right">$3<span>.99</span></div>
                                    </div>
                                </div>
                                <div className="product_buttons">
                                    <div className="text-right d-flex flex-row align-items-start justify-content-start">
                                        <div className="product_button product_fav text-center d-flex flex-column align-items-center justify-content-center">
                                            <div><div><img src={require("../../../assets/images/heart_2.svg")} className="svg" alt="" /><div>+</div></div></div>
                                        </div>
                                        <div className="product_button product_cart text-center d-flex flex-column align-items-center justify-content-center">
                                            <div><div><img src={require("../../../assets/images/cart.svg")} className="svg" alt="" /><div>+</div></div></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-md-6">
                        <div className="product">
                            <div className="product_image"><img src={require("../../../assets/images/product2.jpeg")} alt="" /></div>
                            <div className="product_content">
                                <div className="product_info d-flex flex-row align-items-start justify-content-start">
                                    <div>
                                        <div>
                                            <div className="product_name"><a href="~/Template/product.html">Cool Clothing with Brown Stripes</a></div>
                                            <div className="product_category">In <a href="~/Category/Category">Category</a></div>
                                        </div>
                                    </div>
                                    <div className="ml-auto text-right">
                                        <div className="rating_r rating_r_4 home_item_rating"><i /><i /><i /><i /><i /></div>
                                        <div className="product_price text-right">$3<span>.99</span></div>
                                    </div>
                                </div>
                                <div className="product_buttons">
                                    <div className="text-right d-flex flex-row align-items-start justify-content-start">
                                        <div className="product_button product_fav text-center d-flex flex-column align-items-center justify-content-center">
                                            <div><div><img src={require("../../../assets/images/heart_2.svg")} className="svg" alt="" /><div>+</div></div></div>
                                        </div>
                                        <div className="product_button product_cart text-center d-flex flex-column align-items-center justify-content-center">
                                            <div><div><img src={require("../../../assets/images/cart.svg")} className="svg" alt="" /><div>+</div></div></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-md-6">
                        <div className="product">
                            <div className="product_image"><img src={require("../../../assets/images/product3.jpeg")} alt="" /></div>
                            <div className="product_content">
                                <div className="product_info d-flex flex-row align-items-start justify-content-start">
                                    <div>
                                        <div>
                                            <div className="product_name"><a href="/Home/ShowProductDetail">Cool Clothing with Brown Stripes</a></div>
                                            <div className="product_category">In <a href="~/Category/Category">Category</a></div>
                                        </div>
                                    </div>
                                    <div className="ml-auto text-right">
                                        <div className="rating_r rating_r_4 home_item_rating"><i /><i /><i /><i /><i /></div>
                                        <div className="product_price text-right">$3<span>.99</span></div>
                                    </div>
                                </div>
                                <div className="product_buttons">
                                    <div className="text-right d-flex flex-row align-items-start justify-content-start">
                                        <div className="product_button product_fav text-center d-flex flex-column align-items-center justify-content-center">
                                            <div><div><img src={require("../../../assets/images/heart_2.svg")} className="svg" alt="" /><div>+</div></div></div>
                                        </div>
                                        <div className="product_button product_cart text-center d-flex flex-column align-items-center justify-content-center">
                                            <div><div><img src={require("../../../assets/images/cart.svg")} className="svg" alt="" /><div>+</div></div></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-md-6">
                        <div className="product">
                            <div className="product_image"><img src={require("../../../assets/images/product4.jpeg")} alt="" /></div>
                            <div className="product_content">
                                <div className="product_info d-flex flex-row align-items-start justify-content-start">
                                    <div>
                                        <div>
                                            <div className="product_name"><a href="/Home/ShowProductDetail">Cool Clothing with Brown Stripes</a></div>
                                            <div className="product_category">In <a href="~/Category/Category">Category</a></div>
                                        </div>
                                    </div>
                                    <div className="ml-auto text-right">
                                        <div className="rating_r rating_r_4 home_item_rating"><i /><i /><i /><i /><i /></div>
                                        <div className="product_price text-right">$3<span>.99</span></div>
                                    </div>
                                </div>
                                <div className="product_buttons">
                                    <div className="text-right d-flex flex-row align-items-start justify-content-start">
                                        <div className="product_button product_fav text-center d-flex flex-column align-items-center justify-content-center">
                                            <div><div><img src={require("../../../assets/images/heart_2.svg")} className="svg" alt="" /><div>+</div></div></div>
                                        </div>
                                        <div className="product_button product_cart text-center d-flex flex-column align-items-center justify-content-center">
                                            <div><div><img src={require("../../../assets/images/cart.svg")} className="svg" alt="" /><div>+</div></div></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-md-6">
                        <div className="product">
                            <div className="product_image"><img src={require("../../../assets/images/product5.jpeg")} alt="" /></div>
                            <div className="product_content">
                                <div className="product_info d-flex flex-row align-items-start justify-content-start">
                                    <div>
                                        <div>
                                            <div className="product_name"><a href="/Home/ShowProductDetail">Cool Clothing with Brown Stripes</a></div>
                                            <div className="product_category">In <a href="~/Category/Category">Category</a></div>
                                        </div>
                                    </div>
                                    <div className="ml-auto text-right">
                                        <div className="rating_r rating_r_4 home_item_rating"><i /><i /><i /><i /><i /></div>
                                        <div className="product_price text-right">$3<span>.99</span></div>
                                    </div>
                                </div>
                                <div className="product_buttons">
                                    <div className="text-right d-flex flex-row align-items-start justify-content-start">
                                        <div className="product_button product_fav text-center d-flex flex-column align-items-center justify-content-center">
                                            <div><div><img src={require("../../../assets/images/heart_2.svg")} className="svg" alt="" /><div>+</div></div></div>
                                        </div>
                                        <div className="product_button product_cart text-center d-flex flex-column align-items-center justify-content-center">
                                            <div><div><img src={require("../../../assets/images/cart.svg")} className="svg" alt="" /><div>+</div></div></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-md-6">
                        <div className="product">
                            <div className="product_image"><img src={require("../../../assets/images/product6.jpeg")} alt="" /></div>
                            <div className="product_content">
                                <div className="product_info d-flex flex-row align-items-start justify-content-start">
                                    <div>
                                        <div>
                                            <div className="product_name"><a href="/Home/ShowProductDetail">Cool Clothing with Brown Stripes</a></div>
                                            <div className="product_category">In <a href="~/Category/Category">Category</a></div>
                                        </div>
                                    </div>
                                    <div className="ml-auto text-right">
                                        <div className="rating_r rating_r_4 home_item_rating"><i /><i /><i /><i /><i /></div>
                                        <div className="product_price text-right">$3<span>.99</span></div>
                                    </div>
                                </div>
                                <div className="product_buttons">
                                    <div className="text-right d-flex flex-row align-items-start justify-content-start">
                                        <div className="product_button product_fav text-center d-flex flex-column align-items-center justify-content-center">
                                            <div><div><img src={require("../../../assets/images/heart_2.svg")} className="svg" alt="" /><div>+</div></div></div>
                                        </div>
                                        <div className="product_button product_cart text-center d-flex flex-column align-items-center justify-content-center">
                                            <div><div><img src={require("../../../assets/images/cart.svg")} className="svg" alt="" /><div>+</div></div></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row load_more_row">
                    <div className="col">
                        <div className="button load_more ml-auto mr-auto"><a href="#">load more</a></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Product;
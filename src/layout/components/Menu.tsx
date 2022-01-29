import React from 'react';

const Menu = () => {
    return(
        <div className="menu">
                {/* <div className="menu_search">
                    <form action="#" id="menu_search_form" className="menu_search_form">
                        <input type="text" className="search_input" placeholder="Search Item" />
                        <button className="menu_search_button"><img src={require("../../assets/images/search.png")} alt="" /></button>
                    </form>
                </div> */}
                <div className="menu_nav">
                    <ul>
                        <li><a href="~/">Home</a></li>
                        <li><a href="~/candidates">Candidates</a></li>
                        <li><a href="~/aboutus">About Us</a></li>
                    </ul>
                </div>
                {/* <div className="menu_contact">
                    <div className="menu_phone d-flex flex-row align-items-center justify-content-start">
                        <div><div><img src={require("../../assets/images/phone.svg")} alt="https://www.flaticon.com/authors/freepik" /></div></div>
                        <div>+1 912-252-7350</div>
                    </div>
                </div> */}
            </div>
    )
}
export default Menu;
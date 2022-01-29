import React, { useCallback, FormEvent } from 'react';
import { useDispatch } from '../../config/store';
import { navigate } from '../../pages/Services/action';

const Header = () => {
    const dispatch = useDispatch();

    const onNavigateHome = useCallback((e?: FormEvent<HTMLElement>) => {
        e && e.preventDefault();
        dispatch(navigate('Home'));
    }, []);

    const onNavigateCandidates = useCallback((e?: FormEvent<HTMLElement>) => {
        e && e.preventDefault();
        dispatch(navigate('Candidates'));
    }, []);

    const onNavigateAboutUs = useCallback((e?: FormEvent<HTMLElement>) => {
        e && e.preventDefault();
        dispatch(navigate('AboutUs'));
    }, []);

    return (
        <header className="header">
            <div className="header_overlay" />
            <div className="header_content d-flex flex-row align-items-center justify-content-start">
                {/* <div className="logo">
                    <a href="" onClick={onNavigateHome}>
                        <div className="d-flex flex-row align-items-center justify-content-start">
                            <div><img src={require("../../assets/images/logo_1.png")} alt="" /></div>
                            <div>Little Closet</div>
                        </div>
                    </a>
                </div> */}
                <div className="hamburger"><i className="fa fa-bars" aria-hidden="true" /></div>
                <nav className="main_nav">
                    <ul className="d-flex flex-row align-items-start justify-content-start">
                    <li><a href="/" onClick={onNavigateHome}>Home</a></li>
                        <li><a href="/candidates" onClick={onNavigateCandidates}>Candidates</a></li>
                        <li><a href="/aboutus" onClick={onNavigateAboutUs}>About Us</a></li>
                    </ul>
                </nav>
                {/* <div className="header_right d-flex flex-row align-items-center justify-content-start ml-auto">
                    <div className="header_search">
                        <form action="#" id="header_search_form">
                            <input type="text" className="search_input" placeholder="Search Item" />
                            <button className="header_search_button"><img src="~/Template/images/search.png" alt="" /></button>
                        </form>
                    </div>
                </div> */}
            </div>
        </header>
    )
}
export default Header;
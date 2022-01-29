import React, { useCallback, FormEvent, useState } from 'react';

import { useDispatch, useSelector } from '../../../config/store';
import { navigate } from '../../Services/action';
import { login, changeEmail, changePassword } from '../logic/action';
import { setLayoutOptions } from '../../../layout/Layout';

const Login = () => {
    const dispatch = useDispatch();

    const [showLoader, setLoader] = useState(false);

    const email = useSelector(state => state.auth.email);
    const password = useSelector(state => state.auth.password);

    const onEmailChange = useCallback((e: FormEvent<HTMLInputElement>) => {
        dispatch(changeEmail(e.currentTarget.value));
    }, []);

    const onPasswordChange = useCallback((e: FormEvent<HTMLInputElement>) => {
        dispatch(changePassword(e.currentTarget.value));
    }, []);

    const onLoginClick = useCallback(() => {
        setLoader(true);
        dispatch(login());
    }, []);

    const onNavigateRegister = useCallback(() => {
        dispatch(navigate('Register'));
    }, [])

    return (
        <form className='login-wrapper'>
            <h2>Login</h2>
            <div className="row">
                <div className='col-md-12'>
                    <input type="text" value={email} onChange={onEmailChange} className="textbox-wrapper" placeholder="Email" />
                </div>
            </div>
            <div className="row">
                <div className='col-md-12'>
                    <input type="text" value={password} onChange={onPasswordChange} className="textbox-wrapper" placeholder="Password" />
                </div>
            </div>
            
                <>
                    <div className="row">
                        <div className='col-md-12'>
                            <input type="button" onClick={onLoginClick} className="button-wrapper" value='Sign In' />
                        </div>
                    </div>
                    <div className="row">
                        <br />
                        <p>Or</p>
                        <p>If you don't have an account.</p>
                        <br />
                        <div className='col-md-12'>
                            <input type='button'
                                onClick={onNavigateRegister}
                                className='button-wrapper'
                                value='Register' />
                        </div>
                    </div>
                </>
            {showLoader &&
                <div className='row'>
                    <div className='col-md-12'>
                        <div className="loader"></div>
                    </div>
                </div>}
        </form>
    )
}

setLayoutOptions(Login, {
    layout: 'AuthLayout'
})
export default Login;
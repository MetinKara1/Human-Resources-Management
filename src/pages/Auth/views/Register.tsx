import React, { useCallback, FormEvent, useState } from 'react';

import { useDispatch, useSelector } from '../../../config/store';
import { navigate } from '../../Services/action';

import {
    changeName,
    changeEmail,
    changePhone,
    changePassword,
    changeRePassword,
    register,
} from '../logic/action';
import { setLayoutOptions } from '../../../layout/Layout';

const Register = () => {
    const dispatch = useDispatch();

    const [showLoader, setLoader] = useState(false);

    const name = useSelector(state => state.auth.name);
    const email = useSelector(state => state.auth.email);
    const phone = useSelector(state => state.auth.phone);
    const password = useSelector(state => state.auth.password);
    const rePassword = useSelector(state => state.auth.rePassword);

    const onNameChange = useCallback((e: FormEvent<HTMLInputElement>) => {
        dispatch(changeName(e.currentTarget.value));
    }, []);

    const onEmailChange = useCallback((e: FormEvent<HTMLInputElement>) => {
        dispatch(changeEmail(e.currentTarget.value));
    }, []);

    const onPhoneChange = useCallback((e: FormEvent<HTMLInputElement>) => {
        dispatch(changePhone(e.currentTarget.value));
    }, []);

    const onPasswordChange = useCallback((e: FormEvent<HTMLInputElement>) => {
        dispatch(changePassword(e.currentTarget.value));
    }, []);

    const onRePasswordChange = useCallback((e: FormEvent<HTMLInputElement>) => {
        dispatch(changeRePassword(e.currentTarget.value));
    }, []);

    const onRegisterClick = useCallback(() => {
        setLoader(true);
        dispatch(register());
    }, []);

    const onNavigateLogin = useCallback(() => {
        dispatch(navigate('Login'));
    }, []);

    return (
        <form className='login-wrapper'>
            <h2>Register</h2>
            <div className="row">
                <div className='col-md-12'>
                    <input type="text" value={name} onChange={onNameChange} className="textbox-wrapper" placeholder="Adınız ve Soyadınız" />
                </div>
            </div>
            <div className="row">
                <div className='col-md-12'>
                    <input type="text" value={email} onChange={onEmailChange} className="textbox-wrapper" placeholder="Mail" />
                </div>
            </div>
            <div className="row">
                <div className='col-md-12'>
                    <input type="text" value={phone} onChange={onPhoneChange} className="textbox-wrapper" placeholder="Telefon" />
                </div>
            </div>
            <div className="row">
                <div className='col-md-12'>
                    <input type="text" value={password} onChange={onPasswordChange} className="textbox-wrapper" placeholder="Şifre" />
                </div>
            </div>
            <div className="row">
                <div className='col-md-12'>
                    <input type="text" value={rePassword} onChange={onRePasswordChange} className="textbox-wrapper" placeholder="Şifre-Tekrar" />
                </div>
            </div>
            
            <>
            <div className="row">
                <div className='col-md-12'>
                    <input type="button" onClick={onRegisterClick} className="button-wrapper" value='Sign Up' />
                </div>
            </div> 
            <div className="row">
                <br />
                <p>Or</p>
                <p>If you have an account.</p>
                <br />
                <div className='col-md-12'>
                    <input type="button" onClick={onNavigateLogin} className="button-wrapper" value='Login' />

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
setLayoutOptions(Register, {
    layout: 'AuthLayout'
})
export default Register;
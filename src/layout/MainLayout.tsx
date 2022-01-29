import React, { useEffect } from 'react';

import { useDispatch, useSelector } from '../config/store';

import Alert from './components/Alert';
import Header from './components/Header';
import Footer from './components/Footer';
import Menu from './components/Menu';

interface Props {
    layoutOptions: {
        title: string;
        layout: 'MainLayout' | 'AuthLayout' | 'ModalLayout';
        authorized: boolean;
        permissionName: PermissionName | undefined;
        modalHeight: number;
    };
    children?: JSX.Element | JSX.Element[];
}

const MainLayout = (props: Props) => {
    const { children } = props;


    // const visible = useSelector(state => state.service.alert.visible);
    // const type = useSelector(state => state.service.alert.type);
    // const message = useSelector(state => state.service.alert.message);
    // const isModalVisible = useSelector(state => state.service.isModalVisible);

    return (
        <div className='super_container'>
            <Menu />
            <Header />
            <div className=''>
                {/* <Alert visible={!isModalVisible && visible} type={type} message={message} /> */}
                {children}
            </div>
            {/* <Footer /> */}
        </div>
    )
}
export default MainLayout;
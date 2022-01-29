import React, { useEffect, useMemo, useState } from 'react';

import { useDispatch, useSelector } from '../config/store';
import { history } from '../config/router';
import { replace } from '../pages/Services/action';
import MainLayout from './MainLayout';

type Pick<T> = T | ((pick: <C, U>(forCreate: C, forUpdate: U) => C | U) => T);

export interface LayoutOptions {
    title?: Pick<string>;
    layout?: Pick<'MainLayout' | 'AuthLayout' | 'ModalLayout'>;
    authorized?: Pick<boolean>;
    permissionName?: Pick<PermissionName | undefined>;
    modalHeight?: Pick<number>;
}

interface Props {
    layoutOptions?: any;
    Component: any;
}

const Layout = (props: Props) => {
    const { Component } = props;

    const dispatch = useDispatch();

    //const isLoggedIn = useSelector((state) => state.storage.isLoggedIn);

    const [pathname, setPathname] = useState(history.location.pathname);

    useEffect(() => {
        const unsubscribe = history.listen(location => {
            //dispatch(clearAlert());
            setPathname(location.pathname);
        });
        return () => {
            unsubscribe();
        };
    }, []);

    const pick = useMemo(() => <C, U>(forCreate: C, forUpdate: U) => {
        return pathname.toLowerCase().includes('edit') ? forUpdate : forCreate;
    }, [pathname]);

    const title = useMemo(() => {
        const o = props.layoutOptions.title;
        return o !== undefined ? (typeof o === 'function' ? o(pick) : o) : '💀 - 💥 No title here!';
    }, [props.layoutOptions.title, pick]);

    const layout = useMemo(() => {
        const o = props.layoutOptions.layout;
        return o !== undefined ? (typeof o === 'function' ? o(pick) : o) : 'MainLayout';
    }, [props.layoutOptions.layout, pick]);

    const authorized = useMemo(() => {
        const o = props.layoutOptions.authorized;
        return o !== undefined ? (typeof o === 'function' ? o(pick) : o) : true;
    }, [props.layoutOptions.authorized, pick]);

    const permissionName = useMemo(() => {
        const o = props.layoutOptions.permissionName;
        return o !== undefined ? (typeof o === 'function' ? o(pick) : o) : undefined;
    }, [props.layoutOptions.permissionName, pick]);

    const modalHeight = useMemo(() => {
        const o = props.layoutOptions.modalHeight;
        return o !== undefined ? (typeof o === 'function' ? o(pick) : o) : 600;
    }, [props.layoutOptions.modalHeight, pick]);

    const layoutOptions = useMemo(() => ({
        title,
        layout,
        authorized,
        permissionName,
        modalHeight,
    }), [title, layout, authorized, permissionName, modalHeight]);

    // useEffect(() => {
    //     if (authorized) {
    //         dispatch(replace('Login', pathname !== '/' ? btoa(pathname) : ''));
    //     }
    // }, [authorized]);

    const Layout = useMemo(
        () =>
            layout === 'MainLayout'
                ? MainLayout
                : React.Fragment,
        [],
    );

    // return useMemo(() => (
    //     (authorized) ? null :
    //         <Layout layoutOptions={layoutOptions as any}>
    //             <Component />
    //         </Layout>
    // ), [authorized, permissionName]);

    return useMemo(() => (
        <Layout layoutOptions={layoutOptions as any}>
            <Component />
        </Layout>
    ), []);
};

export default Layout;

export const setLayoutOptions = (Component: any, layoutOptions: LayoutOptions) => {
    Component.layoutOptions = layoutOptions;
};
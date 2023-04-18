import React, { Suspense } from 'react'
import { Outlet } from 'react-router-dom';
import LayoutStyled from './Style'
import Sidebar from './SidebarLayout';
import { FooterLayout } from './FooterLayout';
import HeaderLayout from './HeaderLayout';
import { Layout } from 'antd';
import { Content } from 'antd/es/layout/layout';
import AntdSpinnerPrivite from '../Components/Spinner/AntdSpinner';
function LayoutMain() {
    return (
        <LayoutStyled>
            <Layout style={{
                minHeight: '100vh',
            }}>
                <Sidebar />
                <Layout className="site-layout" >
                    <HeaderLayout />
                    <Content style={{ margin: '0 16px' }}>
                        <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }} >
                            <Suspense fallback={<AntdSpinnerPrivite />}>
                                <Outlet />
                            </Suspense>
                        </div>
                    </Content>
                    <FooterLayout />
                </Layout>
            </Layout>
        </LayoutStyled>
    )
}

export default LayoutMain
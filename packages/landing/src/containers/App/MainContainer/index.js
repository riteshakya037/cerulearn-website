import React from 'react';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import Sticky from 'react-stickynode';
import { appTheme } from 'common/theme/app';
import {
    GlobalStyle,
    AppWrapper,
} from 'containers/App/app.style';
import ResetCSS from 'common/assets/css/style';
import Navbar from 'containers/App/Navbar';
import Footer from 'containers/App/FooterMinimal';
import { DrawerProvider } from 'common/contexts/DrawerContext';
import ParticlesComponent from 'containers/App/particles';
import { withInnerWidth } from 'common/contexts/SizeContext'

const MainContainer = ({ children, size }) => {
    const isThickerFooter = size.innerWidth < 991;

    return <ThemeProvider theme={appTheme}>
        <>
            <Head>
                <title>Cerulearn | Experience the Future of Education</title>
                <meta name="Description" content="Cerulearn - Your Comprehensive Educational Super App with AI-Powered Personalization, Interactive Tutoring, and Seamless Institution Integration. Revolutionizing Education for Students, Teachers, and Parents." />
                <meta name="theme-color" content="#1A73E8" />
                <link
                    href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,700"
                    rel="stylesheet"
                />
            </Head>

            <ResetCSS />
            <GlobalStyle />

            <AppWrapper>
                <Sticky top={0} innerZ={9999} activeClass="sticky-nav-active">
                    <DrawerProvider>
                        <Navbar showIcons={false} />
                    </DrawerProvider>
                </Sticky>
                <ParticlesComponent />
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        minHeight: isThickerFooter ? 'calc(100vh - 296px)' : 'calc(100vh - 244px)',
                        fontFamily: 'Lato',
                    }}
                >
                    {children}
                </div>
                <Footer />
            </AppWrapper>
        </>
    </ThemeProvider>
};

const MainContainerWithInnerWidth = withInnerWidth(MainContainer);

export default MainContainerWithInnerWidth;

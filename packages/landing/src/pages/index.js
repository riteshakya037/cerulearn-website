import React from 'react';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import Sticky from 'react-stickynode';
import { appTheme } from 'common/theme/app';
import {
  GlobalStyle,
  AppWrapper,
  ConditionWrapper,
} from 'containers/App/app.style';
import ResetCSS from 'common/assets/css/style';
import Navbar from 'containers/App/Navbar';
import DomainSection from 'containers/App/Banner';
import FeatureSection from 'containers/App/FeatureSection';
import CerulearnApp from 'containers/App/CerulearnApp';
import TestimonialSection from 'containers/App/Testimonial';
import CerulyticsFeature from 'containers/App/CerulyticsFeature';
import CerulyticsDashboard from 'containers/App/CerulyticsDashboard';
import Footer from 'containers/App/FooterMinimal';
import CallToAction from 'containers/App/CallToAction';
import FeatureSlider from 'containers/App/FeatureSlider';
import FeatureSliderTwo from 'containers/App/FeatureSliderTwo';
import { DrawerProvider } from 'common/contexts/DrawerContext';
import Faq from 'containers/App/Faq'
import { withInnerWidth } from 'common/contexts/SizeContext'

const App = ({ size }) => {
  return (
    <ThemeProvider theme={appTheme}>
      <>
        <Head>
          <title>Cerulearn | Experience the Future of Online Education</title>
          <meta name="description" content="Cerulearn - Your Comprehensive Online Education Platform with AI-Powered Personalization. Revolutionizing Online Education for Students, Teachers, and Parents." />
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
              <Navbar />
            </DrawerProvider>
          </Sticky>
          <DomainSection />
          <FeatureSection />
          <CerulearnApp />
          <ConditionWrapper id="keyfeature">
            {size.innerWidth > 1100 ? <FeatureSlider /> : <FeatureSliderTwo />}
          </ConditionWrapper>
          <CerulyticsDashboard />
          {/* <CerulyticsFeature /> */}
          <TestimonialSection />
          <Faq />
          <CallToAction />
          <Footer />
        </AppWrapper>
      </>
    </ThemeProvider>
  );
};

const AppWithInnerWidth = withInnerWidth(App);

export default AppWithInnerWidth;

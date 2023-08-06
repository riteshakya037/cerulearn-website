import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import NavbarWrapper from 'common/components/Navbar';
import Drawer from 'common/components/Drawer';
import Button from 'common/components/Button';
import Logo from 'common/components/UIElements/Logo';
import HamburgMenu from 'common/components/HamburgMenu';
import ScrollSpyMenu from 'common/components/ScrollSpyMenu';
import { Container } from './navbar.style';
import { openModal, closeModal } from '@redq/reuse-modal';
import SearchPanel from '../SearchPanel';
import LoginModal from '../LoginModal';
import Link from 'next/link';
import { useWindowSize } from 'common/contexts/SizeContext'

import LogoImage from 'common/assets/image/app/logo.svg';
import LogoTextImage from 'common/assets/image/app/logo_text_alt.svg';

import { DrawerContext } from 'common/contexts/DrawerContext';

import data from 'common/data/App/MenuItems';

// Default close button for modal
const CloseModalButton = () => (
  <Button
    className="modalCloseBtn"
    variant="fab"
    onClick={() => closeModal()}
    icon={<i className="flaticon-plus-symbol" />}
  />
);
const CloseModalButtonAlt = () => (
  <Button
    className="modalCloseBtn alt"
    variant="fab"
    onClick={() => closeModal()}
    icon={<i className="flaticon-plus-symbol" />}
  />
);
const Navbar = ({ navbarStyle, logoStyle, button, btnStyle }) => {
  const { state, dispatch } = useContext(DrawerContext);
  // Search modal handler
  const handleSearchModal = () => {
    openModal({
      config: {
        className: 'search-modal',
        disableDragging: true,
        width: '100%',
        height: '100%',
        animationFrom: { transform: 'translateY(100px)' }, // react-spring <Spring from={}> props value
        animationTo: { transform: 'translateY(0)' }, //  react-spring <Spring to={}> props value
        transition: {
          mass: 1,
          tension: 180,
          friction: 26,
        },
      },
      component: SearchPanel,
      componentProps: {},
      closeComponent: CloseModalButtonAlt,
      closeOnClickOutside: false,
    });
  };
  // Authentication modal handler
  const handleLoginModal = () => {
    openModal({
      config: {
        className: 'login-modal',
        disableDragging: true,
        width: '100%',
        height: '100%',
        animationFrom: { transform: 'translateY(100px)' }, // react-spring <Spring from={}> props value
        animationTo: { transform: 'translateY(0)' }, //  react-spring <Spring to={}> props value
        transition: {
          mass: 1,
          tension: 180,
          friction: 26,
        },
      },
      component: LoginModal,
      componentProps: {},
      closeComponent: CloseModalButton,
      closeOnClickOutside: false,
    });
  };
  // Toggle drawer
  const toggleHandler = () => {
    dispatch({
      type: 'TOGGLE',
    });
  };

  const size = process.browser && useWindowSize();
  const isMobile = size.innerWidth < 480;

  return (
    <NavbarWrapper {...navbarStyle}>
      <Container>
        <Logo
          key={isMobile}
          href="#"
          logoSrc={isMobile ? LogoTextImage : LogoImage}
          title="Agency"
          logoStyle={logoStyle}
        />
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Link href="https://app.ceruai.com" >
            <a target="_blank" rel="noopener noreferrer">
              <Button
                variant="textButton"
                icon={<i className="flaticon-user" />}
                aria-label="login"
              />
            </a>
          </Link>
          <Drawer
            width="420px"
            placement="right"
            drawerHandler={<HamburgMenu />}
            open={state.isOpen}
            toggleHandler={toggleHandler}
          >
            <ScrollSpyMenu
              menuItems={data.menuItems}
              drawerClose={true}
              offset={-100}
            />
          </Drawer>
        </div>
      </Container>
    </NavbarWrapper>
  );
};

// Navbar style props
Navbar.propTypes = {
  navbarStyle: PropTypes.object,
  logoStyle: PropTypes.object,
  button: PropTypes.object,
  btnStyle: PropTypes.object,
};

Navbar.defaultProps = {
  navbarStyle: {
    minHeight: '70px',
  },
  logoStyle: {
    height: "60px"
  },
  button: {
    type: 'button',
    fontSize: '14px',
    fontWeight: '600',
    color: '#fff',
    borderRadius: '4px',
    pl: '22px',
    pr: '22px',
    colors: 'primaryWithBg',
  },
  btnStyle: {
    minWidth: '156px',
    fontSize: '14px',
    fontWeight: '500',
  },
};

export default Navbar;

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
import { withInnerWidth } from 'common/contexts/SizeContext'
import { SHOW_FOR_RELEAE } from 'common/constants';

import LogoImage from 'common/assets/image/app/logo.svg';
import LogoTextImage from 'common/assets/image/app/logo_text.svg';

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
const Navbar = ({ navbarStyle, logoStyle, showIcons, size }) => {
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

  const isMobile = size.innerWidth < 480;
  console.log(data.menuItems.map((item) => {
    if (isMobile) {
      delete item.offset;
    }
    return item;
  }))

  return (
    <NavbarWrapper {...navbarStyle}>
      <Container>
        <Logo
          key={isMobile}
          href="/"
          logoSrc={isMobile ? LogoTextImage : LogoImage}
          title="Agency"
          logoStyle={logoStyle}
        />
        {showIcons && <div style={{ display: 'flex', alignItems: 'center' }}>
          {SHOW_FOR_RELEAE &&
            <Link href="https://app.ceruai.com" >
              <a target="_blank" rel="noopener noreferrer">
                <Button
                  variant="textButton"
                  icon={<i className="flaticon-user" />}
                  aria-label="login"
                />
              </a>
            </Link>
          }
          <Drawer
            width="420px"
            placement="right"
            drawerHandler={<HamburgMenu />}
            open={state.isOpen}
            toggleHandler={toggleHandler}
          >
            <ScrollSpyMenu
              menuItems={data.menuItems.map((item) => {
                if (isMobile) {
                  item.offset = "100";
                }
                return item;
              })}
              drawerClose={true}
              offset={-100}
            />
          </Drawer>
        </div>
        }
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
  showIcons: PropTypes.bool,
};

Navbar.defaultProps = {
  navbarStyle: {
    minHeight: '70px',
  },
  logoStyle: {
    height: "60px"
  },
  buttonStyle: {
    minHeight: '70px',
    color: '#fff',
  },
  showIcons: true,
};

const NavbarWithInnerWidth = withInnerWidth(Navbar);

export default NavbarWithInnerWidth;

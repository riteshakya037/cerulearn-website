import footerLogo from 'common/assets/image/app/logo.svg';

import footerLinkedIn from 'common/assets/image/app/footer/footer-linkedin.svg';
import footerFacebook from 'common/assets/image/app/footer/footer-facebook.svg';
import footerTwitter from 'common/assets/image/app/footer/footer-twitter.svg';
import footerInstagram from 'common/assets/image/app/footer/footer-instagram.svg';
import footerTiktok from 'common/assets/image/app/footer/footer-tiktok.svg';

const data = {
  menuWidget: [
    {
      id: 1,
      title: 'About Us',
      menuItems: [
        {
          id: 1,
          url: '#',
          text: 'Support Center',
        },
        {
          id: 2,
          url: '#',
          text: 'Customer Support',
        },
        {
          id: 3,
          url: '#',
          text: 'About Us',
        },
        {
          id: 4,
          url: '#',
          text: 'Copyright',
        },
        {
          id: 5,
          url: '#',
          text: 'Popular Campaign',
        },
      ],
    },
    {
      id: 2,
      title: 'Our Information',
      menuItems: [
        {
          id: 1,
          url: '#',
          text: 'Return Policy',
        },
        {
          id: 2,
          url: '#',
          text: 'Privacy Policy',
        },
        {
          id: 3,
          url: '#',
          text: 'Terms & Conditions',
        },
        {
          id: 4,
          url: '#',
          text: 'Site Map',
        },
        {
          id: 5,
          url: '#',
          text: 'Store Hours',
        },
      ],
    },
    {
      id: 3,
      title: 'My Account',
      menuItems: [
        {
          id: 1,
          url: '#',
          text: 'Press inquiries',
        },
        {
          id: 2,
          url: '#',
          text: 'Social media directories',
        },
        {
          id: 3,
          url: '#',
          text: 'Images & B-roll',
        },
        {
          id: 4,
          url: '#',
          text: 'Permissions',
        },
        {
          id: 5,
          url: '#',
          text: 'Speaker requests',
        },
      ],
    },
    {
      id: 4,
      title: 'Policy',
      menuItems: [
        {
          id: 1,
          url: '#',
          text: 'Application security',
        },
        {
          id: 2,
          url: '#',
          text: 'Software principles',
        },
        {
          id: 3,
          url: '#',
          text: 'Unwanted software policy',
        },
        {
          id: 4,
          url: '#',
          text: 'Responsible supply chain',
        },
      ],
    },
  ],
  menu: [
    {
      link: '/support',
      label: 'Support',
    },
    {
      link: 'mailto:support@ceruai.com',
      label: 'Terms',
    },
    {
      link: '/privacy',
      label: 'Privacy',
    },
    {
      link: '/contact',
      label: 'Contact',
    },
  ],
  logo: footerLogo,
  social: [
    {
      link: '#',
      icon: footerFacebook,
    },
    {
      link: '#',
      icon: footerInstagram,
    },
    {
      link: '#',
      icon: footerTiktok,
    },
    {
      link: '#',
      icon: footerTwitter,
    },
    {
      link: '#',
      icon: footerLinkedIn,
    },
  ],
};
export default data;

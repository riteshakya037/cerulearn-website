import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

const LoginModalWrapper = styled.div`
  width: 80%;
  margin: 0 0 32px 0;
  border-radius: 5px;
  overflow: hidden;
  background-color: ${themeGet('colors.white', '#ffffff')};
  @media only screen and (min-width: 1201px) {
    max-width: 1170px;
    width: 100%;
  }
  @media only screen and (max-width: 667px) {
    width: 100%;
  }
  .col {
    position: relative;
    .patternImage {
      position: absolute;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    @media only screen and (max-width: 991px) {
      width: 100%;
      &.imageCol {
        display: none;
      }
    }
  }
  .reusecore__input {
    margin-bottom: 30px;
    &.is-material {
      &.is-focus {
        label {
          color: ${themeGet('colors.primary', '#10ac84')};
          top: -12px;
        }
        .highlight {
          background-color: ${themeGet('colors.primary', '#10ac84')};
        }
      }
    }

    label {
      font-weight: 400;
      font-size: 14px;
      color: rgba(0, 0, 0, 0.6);
      top: 15px;
    }
  }
  .reusecore__checkbox {
    margin: 0 0 35px;
    label {
      .reusecore__field-label {
        font-size: 13px;
        font-weight: 400;
      }
    }
  }
  .reusecore__button {
    background-color: transparent;
    &.default {
      background-color: ${themeGet('colors.primary', '#10ac84')};
      transition: all 0.3s ease;
      &:hover {
        box-shadow: 0px 9px 20px -5px rgba(16, 172, 132, 0.57);
      }
    }
  }
  }
`;

export default LoginModalWrapper;

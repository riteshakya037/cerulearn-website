import styled from 'styled-components';
import Mail from 'common/assets/image/app/mail.svg';

export const DiscountWrapper = styled.div`
  text-align: left;
`;
export const ButtonWrapper = styled.div`
  position: relative;
  @media screen and (max-width: 991px) and (min-width: 767px) {
    display: flex;
    .reusecore__button {
      padding-left: 0;
      padding-right: 0;
      &.withoutBg {
        margin-left: 25px;
        &:hover {
          background: transparent !important;
          box-shadow: none !important;
        }
      }
    }
  }
  @media (max-width: 480px) {
    display: flex;
    flex-direction: column;
    .reusecore__button {
      width: 100%;
      &.withoutBg {
        border: 0;
      }
    }
  }
`;

export const EmailWrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  position: relative;
  width: 100%;
  max-width: 480px;
  margin-top: 30px;
  padding-bottom: 30px;
  margin-bottom: 30px;
  box-shadow: 0px 7px 25px 0px rgba(22, 53, 76, 0.08) !important;
  @media (max-width: 1566px) {
    max-width: 430px;
  }
  @media (max-width: 1200px) {
    max-width: 430px;
  }
  @media (max-width: 480px) {
    margin-top: 30px;
    margin-bottom: 30px;
    padding-bottom: 20px;
  }
  &::before {
    content: url(${Mail?.src});
    display: block;
    position: relative;
    width: 22px;
    left: 22px;
    top: 24px;
    z-index: 9;
  }
  @media (max-width: 1566px) {
    &::before {
      top: 18px;
    }
  }
  .input-email {
    width: 100%;
    max-width: 480px;
    max-height: 70px;
    background-color: rgb(255, 255, 255);
    border-radius: 5px;
    border: none;
    outline: none;
    height: 70px;
    border-radius: 5px;
    font-size: 16px;
    letter-spacing: -0.3px;
    position: absolute;
    color: #343d48;
    padding-left: 60px;
    padding-right: 80px;
    transition: all 500ms ease;
    @media (max-width: 1550px) {
      height: 60px;
      max-width: 430px;
      padding-right: 70px;
    }
    @media (max-width: 1199px) {
      max-width: 400px;
    }
    &::placeholder {
      color: #343d48;
      opacity: 1;
      max-width: 161px;
      max-height: 19px;
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 19px;
      letter-spacing: -0.3px;
    }
    &:focus {
      box-shadow: 0 0 0 1px #aaa;
    }
  }
  .input-button {
    border: none;
    outline: none;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80px;
    height: 70px;
    border-radius: 5px;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    background-color: #1a73e8;
    color: #white;
    position: absolute;
    right: 0;
    opacity: 1;
    cursor: pointer;
    transition: opacity 500ms ease;
    &:hover {
      opacity: 0.85;
    }
    @media (max-width: 1550px) {
      height: 60px;
      width: 70px;
    }
  }
`


export const DiscountLabel = styled.div`
  font-family: 'Open Sans', sans-serif;
  display: inline-block;
  border-radius: 4em;
  padding: 10px 24px 0 6px;
  box-shadow: 0px 7px 25px 0px rgba(22, 53, 76, 0.05);
  margin-bottom: 30px;
  background-color: #fff;
  height: 45px;
  @media (max-width: 990px) {
    margin-top: 50px;
  }
  @media (max-width: 420px) {
    padding: 10px;
  }
  span {
    @media (max-width: 420px) {
      font-size: 12px;
    }
  }
  .discountAmount {
    padding: 9px 21px;
    border-radius: 28px;
    text-transform: uppercase;
    @media (max-width: 420px) {
      padding: 8px 16px;
      font-size: 10px;
    }
  }
`;

export const DownloadButtonWrapper = styled.section`
  margin-top: 25px;
  display: flex;
  flex-wrap: wrap;
  gap: 10px 10px;
  .download-button {
    background-color: #fff;
    border: 1px solid #081c27;
    border-radius: 10px;
    display: flex;
    align-items: center;
    padding-left: 17px;
    padding-right: 17px;
    text-align: left;
    color: #081c27;
    padding-top: 14.5px;
    padding-bottom: 14.5px;
    transition: all 500ms ease;
    @media (max-width: 1024px) {
      padding-left: 17px;
      padding-right: 17px;
    }
    @media (max-width: 480px) {
      padding-left: 5px;
      padding-right: 5px;
    }
    &:hover {
      opacity: 0.85;
      cursor: pointer;
      img {
        filter: invert(20%);
      }
    }
    /* + .download-button {
      margin-left: 16px;
      @media (max-width: 414px) {
        margin-left: 10px;
      } */
  }
  .download-button-icon {
    flex-shrink: 0;
    filter: invert(0%);
    transition: 500ms ease;
  }
  .download-button-content {
    margin-left: 17px;
    @media (max-width: 480px) {
      margin-left: 0px;
    }
    @media (max-width: 414px) {
      margin-left: 0px;
    }
  }
  .download-button-content-text {
    margin: 0;
    display: block;
    font-size: 13px;
    line-height: 1;
    letter-spacing: 0.2px;
    opacity: 0.8;
  }
  .download-button-content-title {
    margin: 0;
    font-size: 18px;
    font-weight: 500;
    line-height: 1;
    margin-top: 5px;
    @media (max-width: 480px) {
      font-size: 16px;
    }
  }
`

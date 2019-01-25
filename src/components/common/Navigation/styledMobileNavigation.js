import styled from 'styled-components';

export const StyledMobileNavigation = styled.div`
  .MobileNavigation__container {
    height: 0;
    width: 100%;
    position: fixed; /* Stay in place */
    z-index: 9999; 
    left: 0;
    top: 0;
    background-color: #ffffff;
    overflow-x: hidden; 
    transition: 0.5s; 
    .MobileNavigation__header {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      padding: 30px;
      width: 100%;
      &__logo {
        align-items: left;
      }
      &__close {
        align-items: right;
        .closebtn {
          border-radius: 50%;
          width: 46px;
          height: 46px;
          font-size: 36px;
          line-height: 36px;
          padding: 0;
          border: 2px solid #00a0df;
          background-color: transparent;
          color: #00a0df;
          transition: 0.4s;
          &:hover {
            border: 2px solid #f0426c;
          }
        }
      }
    }
    .MobileNavigation__links {
      position: relative;
      text-align: center; 
      margin-top: 30px;
      a {
        font-size: 24px;
        font-weight: 500;
        font-style: normal;
        font-stretch: normal;
        line-height: 2.29;
        letter-spacing: 0.7px;
        text-align: center;
        color: #1f1f1f;
        padding: 0px;
        text-decoration: none;
        display: block; 
        transition: 0.3s;
        &:hover, &:focus {
          color: #f0426c;
        }
      }
    }
    .MobileNavigation__talk {
      margin-top: 50px;
      width: 100%;
      text-align: center;
    }
  }
`
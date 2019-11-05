import React from 'react'
import { css } from '@emotion/core'
import { Link } from 'react-router-dom'

const Nav = () => (
  <header css={layoutStyle}>
    <nav css={navStyle}>
      <Link css={logoStyle} to='/'>
        <img alt='Divvy logo' id='divvy-logo' src='https://app.divvy.co/assets/icons/firefox_app_512x512.png' />
      </Link>
      <ul >
        <li>
          <Link to='/'>DASHBOARD</Link>
        </li>
        <li>
          <Link to='/upload'>UPLOAD</Link>
        </li>
      </ul>
    </nav>
    <div css={userLayout}>
      USER
    </div>
  </header>
)

const layoutStyle = css`
  background-color: #000000;
  color: #ffffff;
  display: grid;
  grid-template-columns: 80% 20%;
  padding: 20px 40px;
`

const navStyle = css`
  align-items: center;
  display: grid;
  grid-template-columns: 8% 92%;
  
  & > ul {
    display: flex;
    flex-direction: row;
    list-style-type: none;

    a {
      color: #ffffff;
      font-family: 'Calibre-Bold';
      font-size: 13px;
      text-decoration: none;

      &:hover,
      &:focus {
        opacity: 0.8;
      }
    }
  }
  
  & > ul > li:not(:first-child) {
    margin-left: 15px;
  }
`

const userLayout = css`
  align-items: center;
  display: flex;
  font-family: 'Calibre-Bold';
  font-size: 13px;
  justify-content: flex-end;
`

const logoStyle = css`
  height: 50px;

  #divvy-logo {
    height: 50px;
  }
`

export default Nav

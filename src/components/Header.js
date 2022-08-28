import React from 'react';
import styled from 'styled-components';
import ImgLogo from '../assets/images/logo.png'

const HeaderStyles = styled.div`
    top: 0;
    padding: 1rem 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0rem 1rem 0.5rem 0.5rem;
    #logo {
        display: flex;
        align-items: center;
        width: 100%;
    }
    #logo-img {
        padding-right: 1%;
    }
    #logo h1 {
        margin: 0;
        font-family: 'Calistoga', sans-serif;
        font-weight: bold;
        font-size: 45px;
    }
    #logo p {
        margin: 0;
        margin-top: -5px;
        font-style: italic;
    }
        nav {
        
            a {
                text-decoration: none;
                color: black;
                padding: 10px;
                font-size:1.5vw;
            }
        }
`;

export default function Header() {
  return (
    <HeaderStyles>
        <div id="logo">
            <img src={ImgLogo} alt="" width={60} height={60} id="logo-img" />
            <div className='logo-title'>
            <h1>Study in Finland</h1>
            <p>Everything about education in Finland</p>
            </div>
        </div>
        <nav>
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/projects">Projects</a>
            <a href="/contacts">Contacts</a>
        </nav>
    </HeaderStyles>
  )
}

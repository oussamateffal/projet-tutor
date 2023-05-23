import React from 'react';
import styled from 'styled-components';
import myLogo from '../images/logo-light.png';
import profilepic from '../images/image1.jpg';
import logoutIcon from '../images/logout-icon.png';
import { Link } from 'react-router-dom';

const HeaderContainer = styled.div`
  height: 4%;
  width: 98%;
  display: flex;
  justify-content: flex;
  align-items: center;
  padding: 2%;
  background-color: #000000;
  border-bottom: 1px solid #dee2e6;
  position: fixed;
`;

const Logo = styled.img`
  height: 40px;
  margin-left: 100%;
  margin-right: 30%;
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 12%;
  margin-left:15%;

  & a {
    margin-right: 25px;
    text-decoration: none;
    color: #ffffff;
    font-size: 15px;
    font-family: Segoe UI;
    font-weight: bold;
    font-style: italic;
  }

  & a:last-child {
    margin-right: 0;
  }
`;

const SearchBar = styled.div`
  display: flex;
  align-items: center;
  padding-left: 2%;
  padding-right: 1%;
  margin-right: 9%;
`;

const SearchInput = styled.input`
  border: 1px solid #dee2e6;
  border-radius: 4px;
  padding: 5px 10px;
  height: 23px;
  opacity: 0.92;
`;

const SearchButton = styled.button`
  margin-left: 15px;
  text-decoration: none;
  padding: 5px;
  border: 4px solid #2da7c7;
  border-radius: 10px;
  height: 23px;
`;

const LoginLink = styled(Link)`
  margin-left: 15px;
  text-decoration: none;
  color: #333;
  padding: 5px 10px;
  border: 4px solid #2da7c7;
  border-radius: 10px;
  color: #ffffff;
  font-weight: bold;
  font-style: italic;
  &:hover {
    background: #2da7c7;
  }
`;

const ProfileIcon = styled.img`
  height: 50px;
  width: 50px;
  border-radius: 50%;
  margin-right: 2%;
`;

const LogoutIcon = styled.img`
  height: 30px;
  width: 30px;
  margin-left: 20%;
`;

const Header = () => {
    return (
        <HeaderContainer>
            <Link to="/home">
                <Logo src={myLogo} alt="Logo de l'entreprise" />
            </Link>
            <Nav>
                <Link to="/">Accueil</Link>
                <Link to="/home">Actualités</Link>
                <Link to="/about">À propos</Link>
                <Link to="/contact">Contact</Link>
            </Nav>
            <SearchBar>
                <SearchInput type="text" placeholder="Recherche..." />
                <LoginLink to="/">Chercher</LoginLink>
            </SearchBar>
            <Link to="/myprofile">
                <ProfileIcon src={profilepic} alt="Profile Icon" />
            </Link>
            <Link to="/">
                <LogoutIcon src={logoutIcon} alt="Logout Icon" />
            </Link>
        </HeaderContainer>
    );
};

export default Header;

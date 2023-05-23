import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const LandingContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-image: url('chemin/vers/votre/image.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-color: rgba(19, 13, 188, 0.65);
`;

const Title = styled.h1`
    color: white;
    font-size: 40px;
    text-align: center;
    text-transform: uppercase;
    font-weight: bold;
    margin-bottom: 20px;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
`;

const Description = styled.p`
    color: white;
    font-size: 18px;
    text-align: center;
    margin-bottom: 20px;
    max-width: 600px;
`;

const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const LandingLink = styled(Link)`
    margin: 10px;
    padding: 10px 20px;
    font-size: 20px;
    color: white;
    text-decoration: none;
    background-color: #2DA7C7;
    border-radius: 5px;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
`;

const LandingPage = () => {
    return (
        <LandingContainer>
            <Title>Bienvenue à la communauté de la filière IID</Title>
            <Description>Notre plateforme est la première à rassembler la communauté de la filière IID, regroupant les lauréats, professeurs et étudiants dans le but d'assurer un échange professionnel.</Description>
            <ButtonContainer>
                <LandingLink to="/login">Connexion</LandingLink>
                <LandingLink to="/register">Inscription</LandingLink>
            </ButtonContainer>
        </LandingContainer>
    );
};

export default LandingPage;

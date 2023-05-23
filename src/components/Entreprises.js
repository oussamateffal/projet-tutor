// Entreprises.js
import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

// Données de test

// Création des composants stylisés
const EntrepriseContainer = styled.div`
    background: white;
    padding: 6px;
    margin: 9% ;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    border-radius:18px ;
    box-shadow: inset 2px 2px rgba(19, 13, 188, 0.45), 2px 2px 2px 2px rgba(0, 0, 0, .4);
    &:hover {
        box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, .4);
        background: rgba(19, 13, 188, 0.45);
    }
`;

const EntrepriseName = styled.div`
    font-weight: bold;
    color: black;
    opacity: 0.8;
    font-family: Segoe UI;
    font-weight: bold;
    font-style: italic;
    font-size: 90%;
    margin-left: 12%;
    text-transform: uppercase;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    ${EntrepriseContainer}:hover & {
        color: #ffffff;
    }
`;

const EntrepriseLink = styled.a`
    font-style: italic;
    color: #4B4646;
    margin-left: 1%;
    text-decoration: none;
    margin-left:15%;
    ${EntrepriseContainer}:hover & {
        color: #4B4646;
    }

    &:hover {
        color: #0056b3;
    }
`;

const Title = styled.h1`
    margin-bottom: 5px;
    margin-left: 25%;
    font-size: 100%;
    font-family:Segoe UI;
    font-weight: bold;
    font-style: italic;
    
`;

const Line = styled.hr`
    width:50%;
    border: 0;
    height: 4px;
    background: #2DA7C7;
    margin-bottom: 1%;
`;

const EntreprisesList = styled.div`
    height: calc(89% - 4%); // 60px prend en compte la hauteur du titre et de la ligne
    overflow-y: scroll;
    scrollbar-width: none; /* For Firefox */
    -ms-overflow-style: none; /* For Internet Explorer and Edge */
    &::-webkit-scrollbar { 
        width: 0px; /* For Chrome, Safari, and Opera */
    }
`;

const Entreprises = () => {
    const [entreprises, setEntreprises] = React.useState([]);

    React.useEffect(() => {
        // Remplacez 'url_de_votre_api' par l'URL de votre API backend
        axios.get('http://localhost:8080/api/entreprises')
            .then(response => {
                setEntreprises(response.data);
            })
            .catch(error => {
                console.error('Il y avait une erreur!', error);
            });
    }, []);

    return (
        <div style={{
            backgroundColor: 'white',
            width: '17%',
            height: '60%',
            position: 'fixed',
            marginRight: '1%',
            borderRadius: '10px',
            boxShadow: '2px 2px 2px 2px rgba(0, 0, 0, .2)',
        }}>
            <Title>ENTREPRISES</Title>
            <Line />
            <EntreprisesList>
                {entreprises.map(entreprise => (
                    <EntrepriseContainer key={entreprise.id}>
                        <EntrepriseName>{entreprise.name}</EntrepriseName>
                        <EntrepriseLink href={entreprise.email} target="_blank">Email</EntrepriseLink>
                    </EntrepriseContainer>
                ))}
            </EntreprisesList>
        </div>
    );
}

export default Entreprises;


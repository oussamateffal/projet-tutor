// SimilarProfiles.js
import React from 'react';
import axios from 'axios';
import styled from "styled-components";
import myImage from '../images/image2.jpeg';
import { Link } from 'react-router-dom';

// Création des composants stylisés
const ProfileContainer = styled.div`
     background: rgba(19, 13, 188, 0.45);
    padding: 1%; // Augmentation de la hauteur des profils
    margin: 2% ;
    margin-top:4%;
    display: flex;
    align-items: center;
    border-radius:18px;
    cursor:pointer;
    width:93%;
    height:16%;
    box-shadow: 0px 2px 2px 2px rgba(0, 0, 0, .2);
    &:hover {
        background: rgba(188, 185, 185, 1);
    }
`;

const ProfileImage = styled.img`
    width: 25%;
    height: 85%;
    border-radius: 50%;
    margin-right: 1%;
    margin-left:3%;
    box-shadow:     1px 1px 1px 1px rgba(255, 255, 255, 0.25);
`;
const StyledLink = styled(Link)`
  text-decoration: none;
`;
const ProfileName = styled.div`
    font-weight: bold;
    color: white;
    opacity: 0.8;
    padding-left: 10px;
    font-family: Segoe UI;
    font-weight: bold;
    font-style: italic;
    font-size: 105%;
    text-transform: uppercase;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    ${ProfileContainer}:hover & {
        color: #5D596A;
    }
`;

const ProfileStatus = styled.div`
    font-style: italic;
    color: #4B4646;
    padding-left: 10%;
    font-family: Segoe UI;
    font-weight: bold;
    font-style: italic;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    ${ProfileContainer}:hover & {
        color: #4B4646;
    }
`;


const Title = styled.h1`
    margin-bottom: 1%;
    margin-left: 20%;
    font-size: 110%;
    padding-right:15px;
    font-family:Segoe UI;
    font-weight: bold;
    font-style: italic;
`;

const Line = styled.hr`
  margin-left:20%;
  width:60%;
  border: 0;
  height: 4px;
  background: #2DA7C7;
  margin-bottom: 1%;
`;

const ProfilesList = styled.div`
    height: calc(90% - 2%); // 60px prend en compte la hauteur du titre et de la ligne
    overflow-y: scroll;
    scrollbar-width: none;  /* Pour Firefox */
    -ms-overflow-style: none;  /* Pour Internet Explorer et Edge */
    &::-webkit-scrollbar {
        width: 0px;  /* Pour Chrome, Safari, et Opera */
    }
`;


const testData = [
    {
        id: 1,
        pic: 'myImage',
        name: 'teffal oussama',
        status: 'Ingénieur',
    },
    {
        id: 2,
        pic: './image2.jpg',
        name: 'Jane Doe',
        status: 'Inactif',
    },
    {
        id: 3,
        pic: 'myImage',
        name: 'John Doe',
        status: 'Actif',
    },
    {
        id: 4,
        pic: './image2.jpg',
        name: 'Jane Doe',
        status: 'Inactif',
    },
    {
        id: 5,
        pic: 'myImage',
        name: 'John Doe',
        status: 'Actif',
    },
    {
        id: 6,
        pic: './image2.jpg',
        name: 'Jane Doe',
        status: 'Inactif',
    },
    {
        id: 7,
        pic: 'myImage',
        name: 'John Doe',
        status: 'Actif',
    },
    {
        id: 8,
        pic: './image2.jpg',
        name: 'Jane Doe',
        status: 'Inactif',
    },
    // Ajoutez plus de profils ici
];

const SimilarProfiles = () => {
    const [profiles, setProfiles] = React.useState(testData);

    React.useEffect(() => {
        // Remplacez 'url_de_votre_api' par l'URL de votre API backend
        axios.get('url_de_votre_api')
            .then(response => {
                setProfiles(response.data);
            })
            .catch(error => {
                console.error('Il y avait une erreur!', error);
            });
    }, []);


    return (
        <div
            style={{
                backgroundColor: 'white',
                width: '20%',
                height: '75%',
                position: 'fixed',
                padding: '2% ',
                marginLeft: '74%',
                borderRadius: '10px',
                boxShadow: '0px 3px 3px 3px rgba(0, 0, 0, .2)',
            }}
        >
            <Title>SIMILAR PROFILES</Title>
            <Line />
            <ProfilesList>
                {profiles.map((profile) => (
                    <StyledLink to={`/profile/${profile.id}`} key={profile.id}>
                        <ProfileContainer>
                            <ProfileImage src={myImage} alt="profile pic" />
                            <div>
                                <ProfileName>{profile.name}</ProfileName>
                                <ProfileStatus>{profile.status}</ProfileStatus>
                            </div>
                        </ProfileContainer>
                    </StyledLink>
                ))}
            </ProfilesList>
        </div>
    );
};

export default SimilarProfiles;
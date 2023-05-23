// AddPost.js
import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Image from '../images/image2.jpg';
import iconeimage from '../images/iconeimage.png';
import iconevideo from '../images/iconevideo.png';
import iconepdf from '../images/iconepdf.png';

const PostContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 1%;
    background-color: white;
    border-radius: 10px;
    box-shadow: 0 0 5px rgba(0,0,0,0.2);
`;

const InputContainer = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    margin-bottom: 1%;
`;

const UserLogo = styled.img`
    width: 60px;
    height: 60px;
    border-radius: 50%;
    margin:1%;
    margin-left:2%;
`;

const PostInput = styled.input`
    height:30px;
    flex-grow: 1;
    border: none;
    border-radius: 10px;
    padding: 10px;
    margin: 2%;
    margin-bottom:1%;
    box-shadow: inset 0 0 5px rgba(0,0,0,0.4);
`;

const IconContainer = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    margin-left:5%;
    margin-bottom:3%;
`;



// Remplacez 'YourImage' par le chemin vers vos images
const IconWithDescription = styled.div`
    display: flex;
    align-items: center;
    margin-right: 5%;
`;

const IconDescription = styled.span`
    margin-left: 1%;
  
`;

const IconImage = styled.img`
    width: 35px;
`;

const Icon = ({ src, alt, description }) => (
    <IconWithDescription>
        <IconImage src={src} alt={alt} />
        <IconDescription>{description}</IconDescription>
    </IconWithDescription>
);


const PublishButton = styled.button`
    border: none;
    width:25%;
    height:35px;
    border-radius: 15px;
    background-color: #2DA7C7;
    color: white;
    cursor: pointer;
    transition: background-color 0.3s ease;
    &:hover {
        background-color: #283593;
    }
    &:focus {
        outline: none;
        box-shadow: 0 0 0 1px #283593;
    }
`;

const AddPost = () => {
    const [inputValue, setInputValue] = React.useState('');

    const handleInput = (event) => {
        setInputValue(event.target.value);
    };

    const handlePublish = () => {
        // Remplacez 'url_de_votre_api' par l'URL de votre API backend
        axios.post('url_de_votre_api', { text: inputValue })
            .then(response => {
                console.log(response);
                setInputValue(''); // Remet l'input à vide après la publication
            })
            .catch(error => {
                console.error('Il y avait une erreur!', error);
            });
    };

    return (
        <PostContainer>
            <InputContainer>
                <UserLogo src={Image} alt="user logo"/>
                <PostInput type="text" value={inputValue} onChange={handleInput} placeholder="Quoi de neuf ?" />
            </InputContainer>
            <IconContainer>
                <Icon src={iconeimage} alt="Image Icon" description="Image"/>
                <Icon src={iconevideo} alt="Video Icon" description="Vidéo"/>
                <Icon src={iconepdf} alt="PDF Icon" description="PDF"/>
                <PublishButton onClick={handlePublish}>Publier</PublishButton>
            </IconContainer>
        </PostContainer>
    );

}

export default AddPost;

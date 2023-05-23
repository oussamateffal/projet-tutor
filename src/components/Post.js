import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Image from '../images/image2.jpg';
import photo1 from '../images/photo1.jpg';
import photo2 from '../images/photo2.jfif';
import likeIcon from '../images/like.png';
import commentIcon from '../images/comment.gif';
import shareIcon from '../images/share.png';

const PostContainer = styled.div`
    margin-bottom: 1%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 10px;
    background-color: white;
    box-shadow: 0 0 5px rgba(0,0,0,0.2);
`;

const UserContainer = styled.div`
    display: flex;
    align-items: center;
    margin-top:1%;
`;

const UserInfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 1%;
`;

const UserPic = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 25px;
    margin-right: 1%;
    margin-left:2%;
`;

const UserName = styled.div`
    font-weight: bold;
`;

const UserStatus = styled.div`
    font-size: 0.8em;
    color: gray;
`;

const PostContent = styled.div`
    
    margin:7%;
    margin-top: 2%;
    margin-bottom:2%;
    padding:2%;
    padding-bottom:1%;
`;

const PostImage = styled.img`
    display: block;
    width: 85%;
    max-height: 35%;
    margin: auto;
    height: auto; // Cette ligne assure que les proportions de l'image sont maintenues
    border-radius:7px;
    
`;


const ButtonContainer = styled.div`
    display: flex;
    justify-content: space-around;
    margin-top: 5%;
    margin-bottom:3%;
    
`;

const ActionButton = styled.button`
    display: flex;
    align-items: center;
    box-shadow: 0 0 0 1px #283593;  
    width:25%;
    height:35px;
    border-radius: 15px;
    border: 1px solid gray; // Add this line to set the border color to gray
    background: ${props => props.liked ? 'rgba(19, 13, 188, 0.45)' : 'transparent'}; // Change background color based on 'liked' state
    transition: background-color 0.3s ease;
    cursor: pointer;
    color: ${props => props.liked ? '#ffffff' : '#000000'};
    font-weight:200;
`;


const Icon = styled.img`
    height: 20px;
    width: 20px;
    margin: 10%;
    
`;

// Test data
const testData = [
    {
        id: 1,
        userPic: "lien_vers_photo_utilisateur_1",
        userName: "TEFFAL OUSSAMA",
        status: "Ingénieur en informatique et ingénierie des données",
        content: "La Tour Eiffel : L'emblème emblématique de Paris, la Tour Eiffel est un incontournable." +
            " Vous pouvez monter jusqu'au sommet pour profiter d'une vue panoramique sur la ville.",
        postPic: photo1,
    },
    {
        id: 2,
        userPic: "lien_vers_photo_utilisateur_2",
        userName: "TEFFAL OUSSAMA",
        status: "Ingénieur en informatique et ingénierie des données",
        content: "Les jardins du Luxembourg : Ces jardins pittoresques offrent un espace vert paisible au cœur de la ville. Vous pouvez vous promener dans les allées, admirer les fleurs et vous détendre près des fontaines.",
        postPic: photo2,
    },
    // Add more test posts here
];

const Post = () => {
    const [posts, setPosts] = React.useState(testData);
    const [liked, setLiked] = React.useState(false);

    const handleLikeClick = () => {
        setLiked(!liked);
    };

    React.useEffect(() => {
        // Replace 'url_de_votre_api' with the URL of your backend API
        axios.get('url_de_votre_api')
            .then(response => {
                setPosts(response.data);
            })
            .catch(error => {
                console.error('Il y avait une erreur!', error);
            });
    }, []);
    return (
        <div>
            {posts.map(post => (
                <PostContainer key={post.id}>
                    <UserContainer>
                        <UserPic src={Image} alt="user pic"/>
                        <UserInfoContainer>
                            <UserName>{post.userName}</UserName>
                            <UserStatus>{post.status}</UserStatus>
                        </UserInfoContainer>
                    </UserContainer>
                    <PostContent>{post.content}</PostContent>
                    <PostImage src={post.postPic} alt="post pic" />
                    <ButtonContainer>
                        <ActionButton liked={liked} onClick={handleLikeClick}>
                            <Icon src={likeIcon} alt="like" />
                            J'aime
                        </ActionButton>
                        <ActionButton>
                            <Icon src={commentIcon} alt="comment" />
                            Commenter
                        </ActionButton>
                        <ActionButton>
                            <Icon src={shareIcon} alt="share" />
                            Partager
                        </ActionButton>
                    </ButtonContainer>
                </PostContainer>
            ))}
        </div>
    );
}

export default Post;



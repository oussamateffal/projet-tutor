import React from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import AddPost from './components/AddPost';
import Post from './components/Post';
import SimilarProfiles from './components/SimilarProfiles';
import Entreprises from './components/Entreprises';
import Event from './components/Event';
import styled from 'styled-components';
import ProfilePage from './components/ProfilePage';
import MyProfilePage from './components/MyProfilePage';

import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import LandingPage from './components/LandingPage';


const MainContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 6% 0px;  // Top padding de 60px, padding gauche/droite de 20px
  background-color:#EFEFEF;
`;

const LeftSide = styled.div`
  position: fixed;
  left: 0;
  top: 15%;  
  width: 20%;
  margin-left:4%;
`;

const RightSide = styled.div`
  width: 20%;
  position: fixed;
  top: 15%;  
  margin-right:5%;
 
`;

const Middle = styled.div`
  width: 50%;
  margin: auto;
  padding: 2%;
  padding-top:20px;  
  margin-left:13%;
  margin-right:5%;
`;

const AddPostContainer = styled.div`
  width: 94%;
  margin-bottom: 2%;  
  margin-left:18%;
`;

const PostContainer = styled.div`
  width: 94%;
  overflow-y: auto;
  height: calc(100vh - 20% - 4%);  
  padding: 10px;  // Ajout d'un padding de 20px
  margin-left:17%;
`;

const EventContainer = styled.div`
  position: fixed;
  bottom: 0;
  width: 20%;
  height: 18%;
  margin-bottom:2%;
`;


function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/register" element={<RegisterPage />} />
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/home" element={
                        <>
                            <Header/>
                            <MainContainer>
                                <LeftSide>
                                    <Entreprises />
                                    <EventContainer>
                                        <Event />
                                    </EventContainer>
                                </LeftSide>
                                <Middle>
                                    <AddPostContainer>
                                        <AddPost />
                                    </AddPostContainer>
                                    <PostContainer>
                                        <Post />
                                    </PostContainer>
                                </Middle>
                                <RightSide>
                                    <SimilarProfiles />
                                </RightSide>
                            </MainContainer>
                        </>
                    } />
                    <Route path="/profile/:id" element={
                    <>
                    <Header/>
                    <ProfilePage />
                    </>
                    } />
                    <Route path="/myprofile" element={<MyProfilePage />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;


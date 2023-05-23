import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Logo from '../images/logo-light.png';
import { useNavigate } from "react-router-dom";


const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: rgb(77,76,88,26%);
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 32%;
  height : 75%;
  padding: 20px;
  margin-right:47%;
  border-radius: 10px;
  box-shadow: 0px 0px 10px 0px #00000033;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 2;
`;

const Label = styled.label`
  font-size: 18px;
  color: rgb(255,255,255,90%);
  margin-bottom: 2%;
   margin-left:8%;
  margin-right:7%;
  font-weight:600;
  font-style:italic;
  
`;

const Input = styled.input`
  margin-bottom: 20px;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #cccccc;
  margin-left:5%;
  margin-right:5%;
  background-color:rgb(255,255,255,90%);
`;

const Button = styled.button`
  padding: 10px;
  border-radius: 5px;
  border: none;
  background-color: rgb(0,185,169);
  color: #ffffff;
  cursor: pointer;
  margin-left:30%;
  margin-right:30%;
  font-weight:bold;
`;

const ErrorMessage = styled.p`
  color: red;
  padding:2%;
  font-size: 16px;
  margin-left:18%;
  margin-right:20%;
  font-weight:bold;
  font-style:italic;

 
`;

const RegisterContainer = styled.div`
  position: fixed;
  display: flex;
  border-radius:500px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 80%;
  height: 140%;
  margin-left:50%;
  background-color: rgba(19,13,188,0.62);
  box-shadow: 0px 5px 5px 5px rgba(0, 0, 0, .5);

`;

const RegisterButton = styled(Button)`
  padding: 18%;
  border-radius: 5px;
  border: none;
  background-color: rgb(0,185,169);
  color: #ffffff;
  cursor: pointer;
  witdh:100%;
  font-weight:bold;
  box-shadow: 0px 5px 5px 5px rgba(0, 0, 0, .5);
`;

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        if(email === 'test@test.com' && password === 'password') {
            navigate("/home");
        } else {
            setError('Email ou mot de passe incorrect.');
        }
    };

    return (
        <Container>
            <RegisterContainer>
                <p style={{fontSize:'40px',marginLeft:'10%', fontFamily:'Raleway', color:'#ffffff',fontWeight:'1000'}}>NEW HERE?</p>
                <Link to="/register">
                    <RegisterButton style={{fontSize:'16px',width:'200%'}}>S'inscrire</RegisterButton>
                </Link>
            </RegisterContainer>

            <Form onSubmit={handleSubmit}>
                <img src={Logo} style={{width:'30%' ,padding:'3%',marginLeft:'33%',marginBottom:'6%',marginTop:'5%'}} alt="Logo" />
                <Label>Email</Label>
                <Input type="email" placeholder="Email" required value={email} onChange={e => setEmail(e.target.value)} style={{fontSize:'16px'}} />
                <Label>Mot de passe</Label>
                <Input type="password" placeholder="Mot de passe" required value={password} onChange={e => setPassword(e.target.value)} style={{fontSize:'16px'}} />
                {error && <ErrorMessage>{error}</ErrorMessage>}

                <Button type="submit" style={{fontSize:'16px'}}>Se connecter</Button>

            </Form>
        </Container>
    );
};

export default LoginPage;

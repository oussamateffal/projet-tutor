import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from "react-router-dom";
import background from '../images/background.jpg';
import axios from 'axios';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image: url(${background});
  background-repeat: no-repeat;
  background-size: cover;
  background-color: rgb(77, 76, 88, 26%);
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 32%;
  height: 75%;
  padding: 2%;
  border-radius: 10px;
  box-shadow: 0px 0px 10px 0px #00000033;
  background-color: rgba(19, 13, 188, 0.6);
  z-index: 2;
`;

const Label = styled.label`
  font-size: 100%;
  color: rgb(255,255,255,90%);
  margin-bottom: 2%;
  margin-left: 8%;
  margin-right: 7%;
  font-weight: 600;
  font-style: italic;
`;

const Input = styled.input`
  margin-bottom: 3%;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #cccccc;
  margin-left: 5%;
  margin-right: 5%;
  background-color: rgb(255,255,255,90%);
`;

const Select = styled.select`
  margin-bottom: 10%;
  padding: 2%;
  border-radius: 5px;
  border: 1px solid #cccccc;
  margin-left: 5%;
  margin-right: 5%;
  background-color: rgb(255,255,255,90%);
`;

const Button = styled.button`
  padding: 3%;
  border-radius: 5px;
  border: none;
  background-color: rgb(0, 185, 169);
  color: #ffffff;
  cursor: pointer;
  margin-left: 30%;
  margin-right: 30%;
  font-weight: bold;
`;

const Title = styled.h1`
  font-size:200%;
  font-weight: 600;
  font-family: 'Raleway';
  color: white;
  font-style: italic;
  text-align: center; /* Ajout de cette propriété pour centrer le titre */
`;

const ErrorMessage = styled.p`
  color: red;
  padding: 2%;
  font-size: 16px;
  margin-left: 18%;
  margin-right: 20%;
  font-weight: bold;
  font-style: italic;
`;

const RegisterPage = () => {
    const [form, setForm] = useState({
        nom: '',
        prenom: '',
        email: '',
        password: '',
        statut: '',
    });
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        // Création d'un objet contenant les données du formulaire
        const formData = {
            nom: form.nom,
            prenom: form.prenom,
            email: form.email,
            password: form.password,
            statut: form.statut,
        };

        // Envoi des données à l'API backend en utilisant Axios
        axios.post("https://projettutor.herokuapp.com/register", formData)
            .then(response => {
                // Si la réponse de l'API est réussie, redirige l'utilisateur vers la page d'accueil
                navigate("/home");
            })
            .catch(error => {
                // Gérer les erreurs de connexion ou autres erreurs
                console.log("Une erreur s'est produite lors de l'envoi des données.", error);
            });
    };

    return (
        <Container>
            <Form onSubmit={handleSubmit}>
                <Title>INSCRIPTION</Title>
                <Label>Nom</Label>
                <Input
                    type="text"
                    placeholder="Nom"
                    required
                    value={form.nom}
                    onChange={(e) => setForm({ ...form, nom: e.target.value })}
                />
                <Label>Prénom</Label>
                <Input
                    type="text"
                    placeholder="Prénom"
                    required
                    value={form.prenom}
                    onChange={(e) => setForm({ ...form, prenom: e.target.value })}
                />
                <Label>Email</Label>
                <Input
                    type="email"
                    placeholder="Email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                />
                <Label>Password</Label>
                <Input
                    type="password"
                    placeholder="Password"
                    required
                    value={form.password}
                    onChange={(e) => setForm({ ...form, password: e.target.value })}
                />
                <Label>Statut</Label>
                <Select
                    required
                    value={form.statut}
                    onChange={(e) => setForm({ ...form, statut: e.target.value })}
                >
                    <option value="">Choisir un statut</option>
                    <option value="Laureat">Lauréat</option>
                    <option value="Etudiant">Etudiant</option>
                    <option value="Professeur">Professeur</option>
                </Select>
                <Button type="submit">Envoyer</Button>
            </Form>
        </Container>
    );
};

export default RegisterPage;
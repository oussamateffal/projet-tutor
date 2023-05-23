import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from "react-router-dom";
import background from '../images/background.jpg';

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
  font-size: 18px;
  color: rgb(255,255,255,90%);
  margin-bottom: 2%;
  margin-left: 8%;
  margin-right: 7%;
  font-weight: 600;
  font-style: italic;
`;

const Input = styled.input`
  margin-bottom: 20px;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #cccccc;
  margin-left: 5%;
  margin-right: 5%;
  background-color: rgb(255,255,255,90%);
`;

const Select = styled.select`
  margin-bottom: 10%;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #cccccc;
  margin-left: 5%;
  margin-right: 5%;
  background-color: rgb(255,255,255,90%);
`;

const Button = styled.button`
  padding: 10px;
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

const FormPage1 = ({ form, setForm }) => {
    return (
        <Form>
            <Title>INSCRIPTION</Title>
            <Label>Nom</Label>
            <Input
                type="text"
                placeholder="Nom"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
            <Label>Email</Label>
            <Input
                type="email"
                placeholder="Email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
            <Label>Profession</Label>
            <Select
                required
                value={form.profession}
                onChange={(e) => setForm({ ...form, profession: e.target.value })}
            >
                <option value="Laureat">Lauréat</option>
                <option value="Etudiant">Etudiant</option>
                <option value="Professeur">Professeur</option>
            </Select>
            <Button onClick={() => setForm({ ...form, currentPage: 2 })}>Suivant</Button>
        </Form>
    );
};

const FormPage2 = ({ form, setForm }) => {
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        // Remplacer cette vérification par votre propre logique de validation
        if (form.currentPage === 2) {
            // Si nous sommes à la dernière page du formulaire, nous soumettons le formulaire
            // et redirigeons l'utilisateur
            console.log(form); // Remplacer par votre propre logique d'inscription
            navigate("/home");
        } else {
            // Sinon, nous passons à la page suivante du formulaire
            setForm({ ...form, currentPage: form.currentPage + 1 });
        }
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Title>INSCRIPTION</Title>
            <Label>Entreprise</Label>
            <Input
                type="text"
                placeholder="Entreprise"
                required
            />
            <Label>Email Entreprise</Label>
            <Input
                type="email"
                placeholder="Email entreprise"
                required

            />
            <Label>Site web</Label>
            <Input
                type="text"
                placeholder="Siteweb"
                required

            />
            <Label>Domaine</Label>
            <Input
                type="domaine"
                placeholder="domaine"
                required

            />
            <Button type="submit">Envoyer</Button> {/* Changement du texte du bouton */}
        </Form>
    );
};

const RegisterPage = () => {
    const [form, setForm] = useState({
        currentPage: 1,
        name: '',
        email: '',
        profession: '',
        // Ajoutez d'autres champs au besoin
    });
    const navigate = useNavigate();

    return (
        <Container>
            {form.currentPage === 1 && <FormPage1 form={form} setForm={setForm} />}
            {form.currentPage === 2 && <FormPage2 form={form} setForm={setForm} />}
            {/* Ajoutez plus de pages de formulaire au besoin */}
        </Container>
    );
};

export default RegisterPage;

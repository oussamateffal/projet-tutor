import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Header from './Header';
import { FiEdit } from 'react-icons/fi';
import myImage from '../images/image2.jpeg';

const TitleContainer = styled.div`
  display: flex;

  
`;

const Title = styled.h2`
  font-size: 20px;
  font-family: Segoe UI;
  font-weight: bold;
  font-style: italic;
`;

const MyProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f0f0f0;

`;

const ProfileSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  padding: 20px;
  background-color: #ffffff;
  border: 1px solid #e1e4e8;
  border-radius: 6px;
    box-shadow:     3px 3px 3px 3px rgba(0, 0, 0, 0.5);

`;


const InformationSection = styled(ProfileSection)`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: 20px;
  align-items: center;
`;

const PersonalInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const PersonalInfoItem = styled.div`
  margin-bottom: 10px;
  display: flex;
  align-items: center;
`;

const ProfileImage = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  margin-right: 20px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
`;

const Label = styled.label`
  font-weight: bold;
  margin-right: 5px;
`;

const EditIcon = styled.span`
  cursor: pointer;
  margin-left: 10px;
  padding: 0 15px;
  color: #007bff;
  transition: color 0.2s;
    margin-left:70%;
  &:hover {
    color: #0056b3;
  }
`;


const Input = styled.input`
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.15);
  margin-left: 5%;
  width: 60%;
  box-sizing: border-box;
`;


const CareerSection = styled(ProfileSection)`
  .newJobForm {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
  }
`;

const Button = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  border: none;
  background-color: #24292e;
  color: white;
  cursor: pointer;
  font-size: 16px;
  border-radius: 6px;
`;

const JobExperienceContainer = styled.div`
  margin-bottom: 20px;
`;

const JobExperienceItem = styled.div`
  margin-bottom: 10px;
`;

const Line = styled.hr`
  border: none;
  height: 1px;
  background-color: #e1e4e8;
`;

const MyProfilePage = () => {
    const [profile, setProfile] = useState({
        image: myImage,
        name: 'Jean Dupont',
        email: 'jean.dupont@example.com',
        profession: 'Développeur Full Stack',
        bio: 'Passionné de code et de nouvelles technologies',
        career: [
            {
                id: 1,
                company: 'Entreprise 1',
                emailHR: 'rh@entreprise1.com',
                startDate: '2018-01-01',
                endDate: '2020-12-31',
            },
            {
                id: 2,
                company: 'Entreprise 2',
                emailHR: 'rh@entreprise2.com',
                startDate: '2021-01-01',
                endDate: 'Présent',
            },
        ],
    });

    const [editMode, setEditMode] = useState(false);

    const handleInputChange = (e) => {
        setProfile({ ...profile, [e.target.name]: e.target.value });
    };

    const handleJobInputChange = (e, index) => {
        const updatedCareer = profile.career.map((job, i) =>
            i === index ? { ...job, [e.target.name]: e.target.value } : job
        );
        setProfile({ ...profile, career: updatedCareer });
    };

    const [newExperience, setNewExperience] = useState({
        company: '',
        emailHR: '',
        startDate: '',
        endDate: '',
    });

    const handleNewExperienceChange = (e) => {
        const { name, value } = e.target;
        setNewExperience((prevExperience) => ({
            ...prevExperience,
            [name]: value,
        }));
    };

    const addExperience = () => {
        setProfile((prevProfile) => ({
            ...prevProfile,
            career: [
                ...prevProfile.career,
                {
                    id: prevProfile.career.length + 1,
                    ...newExperience,
                },
            ],
        }));
        setNewExperience({
            company: '',
            emailHR: '',
            startDate: '',
            endDate: '',
        });
    };

    const updateProfile = () => {
        console.log('Updated profile:', profile);
    };

    return (
        <>
            <Header />
            <MyProfileContainer>
                <TitleContainer style={{marginTop:'8%'}}>
                    <Title>Informations Personnels</Title>
                </TitleContainer>
                <InformationSection>

                    <ProfileImage src={profile.image} alt="Profile" />
                    <PersonalInfoContainer>
                        <PersonalInfoItem>
                            <Label>Nom :</Label>
                            {editMode ? (
                                <Input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={profile.name}
                                    onChange={handleInputChange}
                                />
                            ) : (
                                <span>{profile.name}</span>
                            )}
                            {!editMode && (
                                <EditIcon onClick={() => setEditMode(true)}>
                                    Edit<FiEdit />
                                </EditIcon>
                            )}

                        </PersonalInfoItem>
                        <PersonalInfoItem>
                            <Label>Email :</Label>
                            {editMode ? (
                                <Input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={profile.email}
                                    onChange={handleInputChange}
                                />
                            ) : (
                                <span>{profile.email}</span>
                            )}
                        </PersonalInfoItem>
                        <PersonalInfoItem>
                            <Label>Profession :</Label>
                            {editMode ? (
                                <Input
                                    type="text"
                                    id="profession"
                                    name="profession"
                                    value={profile.profession}
                                    onChange={handleInputChange}
                                />
                            ) : (
                                <span>{profile.profession}</span>
                            )}
                        </PersonalInfoItem>
                        <PersonalInfoItem>
                            <Label>Bio :</Label>
                            {editMode ? (
                                <Input
                                    type="text"
                                    id="bio"
                                    name="bio"
                                    value={profile.bio}
                                    onChange={handleInputChange}
                                />
                            ) : (
                                <span>{profile.bio}</span>
                            )}
                        </PersonalInfoItem>
                    </PersonalInfoContainer>
                </InformationSection>
                <TitleContainer>
                    <Title>Parcours professionnel</Title>
                </TitleContainer>
                <CareerSection>

                    {profile.career.map((job, index) => (
                        <JobExperienceContainer key={job.id}>
                            <JobExperienceItem>
                                <Label htmlFor={`company-${index}`}>
                                    Nom de l'entreprise :
                                </Label>
                                {editMode ? (
                                    <Input
                                        type="text"
                                        id={`company-${index}`}
                                        name="company"
                                        value={job.company}
                                        onChange={(e) => handleJobInputChange(e, index)}
                                    />
                                ) : (
                                    <span>{job.company}</span>
                                )}
                            </JobExperienceItem>
                            <JobExperienceItem>
                                <Label htmlFor={`emailHR-${index}`}>Email du RH :</Label>
                                {editMode ? (
                                    <Input
                                        type="email"
                                        id={`emailHR-${index}`}
                                        name="emailHR"
                                        value={job.emailHR}
                                        onChange={(e) => handleJobInputChange(e, index)}
                                    />
                                ) : (
                                    <span>{job.emailHR}</span>
                                )}
                            </JobExperienceItem>
                            <JobExperienceItem>
                                <Label htmlFor={`startDate-${index}`}>Date de début :</Label>
                                {editMode ? (
                                    <Input
                                        type="date"
                                        id={`startDate-${index}`}
                                        name="startDate"
                                        value={job.startDate}
                                        onChange={(e) => handleJobInputChange(e, index)}
                                    />
                                ) : (
                                    <span>{job.startDate}</span>
                                )}
                            </JobExperienceItem>
                            <JobExperienceItem>
                                <Label htmlFor={`endDate-${index}`}>Date de fin :</Label>
                                {editMode ? (
                                    <Input
                                        type="date"
                                        id={`endDate-${index}`}
                                        name="endDate"
                                        value={job.endDate}
                                        onChange={(e) => handleJobInputChange(e, index)}
                                    />
                                ) : (
                                    <span>{job.endDate}</span>
                                )}
                            </JobExperienceItem>
                            <Line />
                        </JobExperienceContainer>
                    ))}

                    {editMode && (
                        <div className="newJobForm">
                            <h3>Ajouter une expérience</h3>
                            <label>Nom de l'entreprise:</label>
                            <Input
                                name="company"
                                value={newExperience.company}
                                onChange={handleNewExperienceChange}
                                placeholder="Nom de l'entreprise"
                                borderRadius="4px"
                                margin="0 0 10px 0"
                            />
                            <label>Email du RH:</label>
                            <Input
                                name="emailHR"
                                value={newExperience.emailHR}
                                onChange={handleNewExperienceChange}
                                placeholder="Email du RH"
                                borderRadius="4px"
                                margin="0 0 10px 0"
                            />
                            <label>Date de début:</label>
                            <Input
                                type="date"
                                name="startDate"
                                value={newExperience.startDate}
                                onChange={handleNewExperienceChange}
                                placeholder="Date de début"
                                borderRadius="4px"
                                margin="0 0 10px 0"
                            />
                            <label>Date de fin:</label>
                            <Input
                                type="date"
                                name="endDate"
                                value={newExperience.endDate}
                                onChange={handleNewExperienceChange}
                                placeholder="Date de fin"
                                borderRadius="4px"
                                margin="0 0 10px 0"
                            />

                            <Button style={{width:'25%',alignItems:'center',marginLeft:'20%'}} onClick={addExperience}>Ajouter une expérience</Button>
                        </div>
                    )}
                </CareerSection>

                {editMode && (
                    <Button onClick={() => { setEditMode(false); updateProfile(); }}>
                        Sauvegarder
                    </Button>
                )}
            </MyProfileContainer>
        </>
    );
};

export default MyProfilePage;

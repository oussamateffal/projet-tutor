import React, { useState } from 'react';
import styled from 'styled-components';

import Header from './Header';
import SimilarProfiles from './SimilarProfiles';
import myImage from '../images/image2.jpeg';

const PageContainer = styled.div`
  padding: 20px;
`;

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 6%;

`;

const ProfileSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  margin: 20px 0;
  padding: 20px;
  
  background-color: #ffffff;
  align-items : center;
  border: 1px solid #e1e4e8;
  border-radius: 6px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12),
    0 1px 2px rgba(0, 0, 0, 0.24);
`;

const InformationSection = styled(ProfileSection)`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: 20px;
  align-items: center;
   box-shadow:     3px 3px 3px 3px rgba(0, 0, 0, 0.5);

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
  width: 150px;
  height: 150px;
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
  box-shadow: 
    3px 3px 3px 3px rgba(0, 0, 0, 0.5);
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
  padding:2%;
`;

const JobExperienceItem = styled.div`
  margin-bottom: 10px;
  
`;

const Line = styled.hr`
  border: none;
  height: 1px;
  background-color: #e1e4e8;
`;

const ProfilePage = () => {
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

    return (
        <>
            <Header />
            <PageContainer>
                <ProfileContainer>
                    <ProfileSection>
                        <h2>Informations personnelles </h2>
                        <InformationSection>

                            <ProfileImage src={profile.image} alt="Profile" />
                            <PersonalInfoContainer>
                                <PersonalInfoItem>
                                    <Label>Nom :</Label>
                                    <span>{profile.name}</span>
                                </PersonalInfoItem>
                                <PersonalInfoItem>
                                    <Label>Email :</Label>
                                    <span>{profile.email}</span>
                                </PersonalInfoItem>
                                <PersonalInfoItem>
                                    <Label>Profession :</Label>
                                    <span>{profile.profession}</span>
                                </PersonalInfoItem>
                                <PersonalInfoItem>
                                    <Label>Bio :</Label>
                                    <span>{profile.bio}</span>
                                </PersonalInfoItem>
                            </PersonalInfoContainer>
                        </InformationSection>
                        <CareerSection>
                            <h2>Parcours professionnel</h2>
                            {profile.career.map((job, index) => (
                                <JobExperienceContainer key={job.id}>
                                    <JobExperienceItem>
                                        <Label htmlFor={`company-${index}`}>
                                            Nom de l'entreprise :
                                        </Label>
                                        <span>{job.company}</span>
                                    </JobExperienceItem>
                                    <JobExperienceItem>
                                        <Label htmlFor={`emailHR-${index}`}>Email du RH :</Label>
                                        <span>{job.emailHR}</span>
                                    </JobExperienceItem>
                                    <JobExperienceItem>
                                        <Label htmlFor={`startDate-${index}`}>
                                            Date de début :
                                        </Label>
                                        <span>{job.startDate}</span>
                                    </JobExperienceItem>
                                    <JobExperienceItem>
                                        <Label htmlFor={`endDate-${index}`}>Date de fin :</Label>
                                        <span>{job.endDate}</span>
                                    </JobExperienceItem>
                                    <Line />
                                </JobExperienceContainer>
                            ))}
                        </CareerSection>

                    </ProfileSection>
                    <SimilarProfiles />
                </ProfileContainer>
            </PageContainer>
        </>
    );
};

export default ProfilePage;

import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import calendarIcon from '../images/calendar.png';

// Données de test
const testData = [
    {
        id: 1,
        name: "Événement 1",
        date: "2023-05-15",
    },
    {
        id: 2,
        name: "Événement 2",
        date: "2023-05-16",
    },
    {
        id: 3,
        name: "Événement 3",
        date: "2023-05-15",
    },
    {
        id: 4,
        name: "Événement 4",
        date: "2023-05-16",
    },
    // Ajoutez plus d'événements de test ici
];

const Container = styled.div`
    width: 86%;
    height:90%;
    
   
    
   
   
`;

const EventContainer = styled.div`
    background: white;
    height:40%;
    margin:2%;
   
    border-radius:7px;
    cursor:pointer;
     box-shadow: 3px 2px 2px 2px rgba(0, 0, 0, .2);
`;

const EventName = styled.div`
    font-size: 15px;
    font-weight: 600;
    color: black;
    margin-left:8%;
`;

const EventDate = styled.div`
    font-size: 13px;
    color: rgba(0, 0, 0, .8);
    display: flex;
    align-items: center;
`;

const CalendarIcon = styled.img`
    width: 20px;
    height: 20px;
    margin: 1%;
    margin-left:10%;
`;
const Event = () => {
    const [events, setEvents] = React.useState(testData);
    const [activeSlide, setActiveSlide] = React.useState(0);

    React.useEffect(() => {
        // Remplacez 'url_de_votre_api' par l'URL de votre API backend
        axios.get('url_de_votre_api')
            .then(response => {
                setEvents(response.data);
            })
            .catch(error => {
                console.error('Il y avait une erreur!', error);
            });
    }, []);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        vertical: true,
        verticalSwiping: false,
        autoplay: true,
        autoplaySpeed: 3000, // Durée de 3 secondes entre chaque transition
        beforeChange: (current, next) => setActiveSlide(next),
    };

    return (
        <Container>
            <Slider {...settings}>
                {events.map(event => (
                    <EventContainer key={event.id}>
                        <EventName>{event.name}</EventName>
                        <EventDate>
                            <CalendarIcon src={calendarIcon} alt="Calendar icon" />
                            {event.date}
                        </EventDate>
                    </EventContainer>
                ))}
            </Slider>
        </Container>
    );
}

export default Event;



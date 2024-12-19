import React from "react";
import styled from "styled-components";

// Styled Components
const FeaturesPage = styled.div`
  padding: 20px;
  text-align: center;
  font-family: Arial, sans-serif;
  background-color: #f5f5f5;
  color: #333;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 10px;
  background-image:url("https://images.squarespace-cdn.com/content/v1/65899401195ba416670c0913/cc555d6e-7ffa-4817-abea-c0cbacfbb9f5/DALL%C2%B7E+2024-05-14+12.43.52+-+A+vibrant+banner+showcasing+a+dynamic+clash+between+cricket+and+badminton.+On+the+left+side%2C+draw+a+cricket+player+in+action%2C+mid-swing+with+a+bat%2C+we.jpeg?format=1500w");
  background-size:100% 100%;
  background-repeat:no-repeat;
  `;


const FeaturesTitle = styled.h1`
  font-size: 2.5rem;
  color:black; /* Green */
  margin-bottom: 20px;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.8rem;
  }
`;

const FeaturesList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  justify-items: center;
  padding: 0 10px;

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const FeatureItem = styled.div`
  background-color: #fff;
  border: 2px solid #ddd;
  border-radius: 10px;
  padding: 20px;
  width: 100%;
  max-width: 300px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 6px 10px rgba(0, 0, 0, 0.15);
  }
`;

const FeatureIcon = styled.span`
  font-size: 2.5rem;
  margin-bottom: 10px;
  display: block;

  @media (max-width: 768px) {
    font-size: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.8rem;
  }
`;

const FeatureTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 10px;
  color: #333;

  @media (max-width: 768px) {
    font-size: 1.3rem;
  }

  @media (max-width: 480px) {
    font-size: 1.2rem;
  }
`;

const FeatureDescription = styled.p`
  font-size: 1rem;
  color: #555;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }

  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`;

// React Component
function Features() {
  const featureList = [
    {
      icon: "⚽",
      title: "Easy Turf Booking",
      description: "Book your turf effortlessly with a simple and intuitive booking system.",
    },
    {
      icon: "📅",
      title: "Real-Time Availability",
      description: "Check the live availability of turfs and book your preferred slots.",
    },
    {
      icon: "🏆",
      title: "Multiple Sports Options",
      description: "Choose from a variety of sports like football, cricket, tennis, and more.",
    },
    {
      icon: "⏰",
      title: "Flexible Time Slots",
      description: "Book turfs for hourly, daily, or custom time slots as per your needs.",
    },
    {
      icon: "📍",
      title: "Location-Based Search",
      description: "Find nearby turfs using our map-based search feature.",
    },
    {
      icon: "⭐",
      title: "User Reviews & Ratings",
      description: "View reviews and ratings to choose the best turf for your game.",
    },
    
  ];

  return (
    <FeaturesPage>
      <FeaturesTitle>Our Features</FeaturesTitle>
      <FeaturesList>
        {featureList.map((feature, index) => (
          <FeatureItem key={index}>
            <FeatureIcon>{feature.icon}</FeatureIcon>
            <FeatureTitle>{feature.title}</FeatureTitle>
            <FeatureDescription>{feature.description}</FeatureDescription>
          </FeatureItem>
        ))}
      </FeaturesList>
    </FeaturesPage>
  );
}

export default Features;

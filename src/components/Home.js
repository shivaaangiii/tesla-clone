import React from "react";
import styled from "styled-components";
import Section from "./Section";

function Home() {
  return (
    <Container>
      <Section title="Model S" desc="Order Online for Touchless Delivery" bgimg="model-s.jpg" lbtntext="Custom order" rbtntext="Existing Inventory"/>
      <Section title="Model 3" desc="Order Online for Touchless Delivery" bgimg="model-3.jpg" lbtntext="Custom order" rbtntext="Existing Inventory"/>
      <Section title="Model X" desc="Order Online for Touchless Delivery" bgimg="model-X.jpg" lbtntext="Custom order" rbtntext="Existing Inventory"/>
      <Section title="Model Y" desc="Order Online for Touchless Delivery" bgimg="model-y.jpg" lbtntext="Custom order" rbtntext="Existing Inventory"/>
      <Section title="Lowest Cost Solar Panels in America" desc="Money-back guarantee" bgimg="solar-panel.jpg" lbtntext="Order now" rbtntext="Learn more"/>
      <Section title="Solar for New Roofs" desc="Solar Roofs Costs Less Than a New Roof Plus Solar Panels" bgimg="solar-roof.jpg" lbtntext="Order now" rbtntext="Learn more"/>
      <Section title="Accessories" desc="" bgimg="accessories.jpg" lbtntext="Shop now" />

    </Container>
  );
}

export default Home;

const Container = styled.div`
  height: 100vh;
`;

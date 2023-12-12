import React from "react";
import { Container, Row, Col } from "reactstrap";
import "../../styles/about-section.css";
import aboutImg from "../../assets/all-images/cars-img/-bmw-x7-removebg-preview.png";

const AboutSection = ({ aboutClass }) => {
  return (
    <section
      className="about__section"
      style={
        aboutClass === "aboutPage"
          ? { marginTop: "0px" }
          : { marginTop: "280px" }
      }
    >
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="about__section-content">
              <h4 className="section__subtitle">About Us</h4>
              <h2 className="section__title">Welcome to rent car service</h2>
              <p className="section__description">
              "Welcome to 'rent car service', your premier destination for hassle-free and reliable car rental services. At 'rent car service', we pride ourselves on delivering exceptional experiences to our valued customers. Our commitment to excellence is evident in every aspect of our car rental service.

As your trusted partner in transportation, we offer a diverse fleet of well-maintained and top-quality vehicles to meet your travel needs. Whether you're embarking on a business trip, planning a family vacation, or simply need a reliable vehicle for your daily commute, we have the perfect solution for you.

What sets us apart is our dedication to providing a seamless and convenient rental experience. Our user-friendly booking platform ensures that you can easily reserve the vehicle of your choice with just a few clicks. Additionally, our knowledgeable and friendly customer support team is always ready to assist you in navigating any inquiries or concerns.

At 'rent car service', we prioritize your safety and comfort. Our vehicles undergo regular maintenance to ensure optimal performance and reliability on the road. We also offer flexible rental options and competitive pricing to accommodate your budget and schedule.

Thank you for choosing 'rent car service' as your go-to car rental service. We look forward to serving you and making every journey a memorable and enjoyable one. Your satisfaction is our priority, and we strive to exceed your expectations with every rental experience.

Discover the convenience, reliability, and excellence that define 'rent car service'. Welcome aboard!"
              </p>

              <div className="about__section-item d-flex align-items-center">
                <p className="section__description d-flex align-items-center gap-2">
                  <i class="ri-checkbox-circle-line"></i>quality
                </p>

                <p className="section__description d-flex align-items-center gap-2">
                  <i class="ri-checkbox-circle-line"></i>comfort
                </p>
              </div>

              <div className="about__section-item d-flex align-items-center">
                <p className="section__description d-flex align-items-center gap-2">
                  <i class="ri-checkbox-circle-line"></i> Experience
                </p>

                <p className="section__description d-flex align-items-center gap-2">
                  <i class="ri-checkbox-circle-line"></i> Right price
                </p>
              </div>
            </div>
          </Col>

          <Col lg="6" md="6">
            <div className="about__img">
              <img src={aboutImg} alt="" className="w-100" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutSection;

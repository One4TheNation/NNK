import React from "react";
import "../css/style.css";
import { Container, Row, Col, Button, Card } from "react-bootstrap";

import icon from "../Image/icons8-netflix.svg";

const icons = {
  yoga: "🧘",
  dining: "🍽️",
  pool: "🏊",
  fitness: "💪",
  eventSpace: "🏛️",
  wifi: "📶",
};

const services = [
  {
    icon: icons.yoga,
    title: "Yoga & Meditation",
    description:
      "Rejuvenate your body and mind with our yoga and meditation classes, led by experienced instructors. Whether you're a beginner or an advanced practitioner, our classes cater to all levels and offer a peaceful retreat from the hustle and bustle of the city. With serene surroundings and expert guidance.",
  },
  {
    icon: icons.dining,
    title: "Dining",
    description:
      "Rejuvenate your body and mind with our yoga and meditation classes, led by experienced instructors. Whether you're a beginner or an advanced practitioner, our classes cater to all levels and offer a peaceful retreat from the hustle and bustle of the city. With serene surroundings and expert guidance.",
    highlighted: true,
  },
  {
    icon: icons.pool,
    title: "Rooftop Pool",
    description:
      "Rejuvenate your body and mind with our yoga and meditation classes, led by experienced instructors. Whether you're a beginner or an advanced practitioner, our classes cater to all levels and offer a peaceful retreat from the hustle and bustle of the city. With serene surroundings and expert guidance.",
  },
  {
    icon: icons.fitness,
    title: "Fitness Center",
    description:
      "Rejuvenate your body and mind with our yoga and meditation classes, led by experienced instructors. Whether you're a beginner or an advanced practitioner, our classes cater to all levels and offer a peaceful retreat from the hustle and bustle of the city. With serene surroundings and expert guidance.",
  },
  {
    icon: icons.eventSpace,
    title: "Event Spaces",
    description:
      "Rejuvenate your body and mind with our yoga and meditation classes, led by experienced instructors. Whether you're a beginner or an advanced practitioner, our classes cater to all levels and offer a peaceful retreat from the hustle and bustle of the city. With serene surroundings and expert guidance.",
  },
  {
    icon: icons.wifi,
    title: "Free Wi-Fi",
    description:
      "Rejuvenate your body and mind with our yoga and meditation classes, led by experienced instructors. Whether you're a beginner or an advanced practitioner, our classes cater to all levels and offer a peaceful retreat from the hustle and bustle of the city. With serene surroundings and expert guidance.",
  },
];

const roomData = [
  {
    name: "Grand Deluxe Rooms",
    price: 269,
    image: "/grand-deluxe-room.jpg",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    details: {
      capacity: "Max person 2",
      beds: "Normal Beds",
      services: "Wifi, Television, Bathroom,...",
      size: "10 ft",
    },
  },
  {
    name: "Sweet Family Room",
    price: 360,
    image: "/sweet-family-room.jpg",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    details: {
      capacity: "Max person 4",
      beds: "Normal Beds",
      services: "Wifi, Television, Bathroom,...",
      size: "10 ft",
    },
  },
  {
    name: "Perfect Double Room",
    price: 450,
    image: "/perfect-double-room.jpg",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    details: {
      capacity: "Max person 2",
      beds: "Normal Beds",
      services: "Wifi, Television, Bathroom,...",
      size: "10 ft",
    },
  },
  {
    name: "Perfect Double Room",
    price: 450,
    image: "/perfect-double-room.jpg",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    details: {
      capacity: "Max person 2",
      beds: "Normal Beds",
      services: "Wifi, Television, Bathroom,...",
      size: "10 ft",
    },
  },
];

function MainPage() {
  return (
    <Container fluid className="p-0">
      <Row className="g-0">
        <Col
          xs={12}
          className="position-relative | px-5 py-5 | vh-50 overflow-hidden "
        >
          <div className="background-style">
            {/* Hero Content */}
            <div>
              <h1 className="display-3 mb-4 fw-bold | title-style">
                Hotel Mellow Your Gateway To Serenity.
              </h1>
              <Button variant="dark" size="lg">
                Explore Rooms
              </Button>
            </div>
          </div>
        </Col>
      </Row>

      <div class="row mx-5 my-5 p-2">
        <div class="col-8">
          <h3>About Me</h3>
          <p>Alittle About Me</p>
        </div>
        <div class="col-4">col-4</div>
      </div>

      <Row className="mt-5">
        <Col xs={12} md={4}>
          <div className="logo-card">
            <img src={icon} alt="React Logo" className="logo-img img-fluid" />
            {/* <h5>React</h5> */}
          </div>
        </Col>
        {/* <Col xs={12} md={4}>
          <div className="logo-card">
            <img
              src="/bootstrap-logo.svg"
              alt="Bootstrap Logo"
              className="logo-img img-fluid"
            />
            <h5>Bootstrap</h5>
          </div>
        </Col>
        <Col xs={12} md={4}>
          <div className="logo-card">
            <img
              src="icons8-netflix.svg"
              alt="React-Bootstrap Logo"
              className="logo-img img-fluid"
            />
            <h5>React-Bootstrap</h5>
          </div>
        </Col> */}
      </Row>

      <div class="row mx-5 my-5 p-2">
        <div class="col-4">
          <h3>About Me</h3>
          <p>Alittle About Me</p>
        </div>
        <div class="col-8">col-4</div>
      </div>

      <h2 className="text-center mb-5">Our Services & Facilities</h2>
      <Row xs={1} md={2} lg={3} className="mx-5 g-4">
        {services.map((service, index) => (
          <Col
            key={index}
            className={`service-card ${service.highlighted ? "highlighted" : ""}`}
          >
            <Card className="h-100">
              <Card.Body className="d-flex flex-column text-center">
                <div className="service-icon mb-3 d-flex justify-content-center">
                  {service.icon}
                </div>
                <Card.Title>{service.title}</Card.Title>
                <Card.Text className="flex-grow-1">
                  {service.description}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <div className="m-5 p-3">
        <h2 className="text-center mb-4">Explore Our Rooms</h2>
        <div className="row">
          {roomData.map((room, index) => (
            <div key={index} className="col-md-3 mb-4">
              <Card className="h-100 shadow-sm border-0">
                <div className="position-relative">
                  <Card.Img
                    variant="top"
                    src={room.image}
                    alt={room.name}
                    className="img-fluid"
                  />
                  <div className="position-absolute bottom-0 start-0 p-2 text-white">
                    <span className="bg-dark bg-opacity-50 px-2 py-1">
                      ${room.price}/night
                    </span>
                  </div>
                </div>
                <Card.Body>
                  <Card.Title className="mb-3">{room.name}</Card.Title>
                  <Card.Text className="text-muted mb-3">
                    {room.description}
                  </Card.Text>
                  <div className="mb-3">
                    <div>Capacity: {room.details.capacity}</div>
                    <div>Beds: {room.details.beds}</div>
                    <div>Services: {room.details.services}</div>
                    <div>Size: {room.details.size}</div>
                  </div>
                  {/* <Button variant="outline-dark" className="w-100">
                    Browse Now
                  </Button> */}
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
        {/* <div className="text-center mt-4">
          <Button variant="dark" size="lg">
            Explore Rooms
          </Button>
        </div> */}
      </div>
    </Container>
  );
}

export default MainPage;

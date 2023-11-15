import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const FooterCompont = () => {
  return (
    <div className="footer">
      <Container className="pt-5">
        <Row>
          <Col>
            <h3 className="fw-bold">ReAww Web</h3>
            <p className="desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit non
              corporis voluptates. Quidem ipsam libero doloribus! Quo
              consequuntur ipsa ex.
            </p>
            <div className="no mb-1 mt-4">
              <Link className="text-decoration-none">
                <i className="fa-brands fa-whatsapp"></i>
                <p className="m-0">+62 xxx-xxxx-xxxx</p>
              </Link>
            </div>
            <div className="mail">
              <Link className="text-decoration-none">
              <i className="fa-regular fa-envelope"></i>
              <p className="m-0">person-email@gmail.com</p>
                </Link>
            </div>
          </Col>
          <Col className="d-flex flex-column col-lg-6 col">
            <h5 className="fw-bold">Menu</h5>
            <Link to="home">Home</Link>
            <Link to="script">Script</Link>
            <Link to="market">Market</Link>
            <Link to="testimonial">Testi</Link>
            <Link to="syaratketen">Syarat & Ketentuan</Link>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </div>
  );
};

export default FooterCompont;

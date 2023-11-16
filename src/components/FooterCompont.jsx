import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const FooterCompont = () => {
  return (
    <div className="footer">
      <Container className="d-flex justify-content-between">
        <Row>
          <Col lg="5">
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
            <div>
              <p className="cprd">
                &copy; Copyright {new Date().getFullYear()} by{" "}
                <span className="fw-bold">Farell Rhezky</span>
              </p>
            </div>
          </Col>
          <Col className="d-flex flex-column col-lg-2 col mt-lg-0 mt-5">
            <h5 className="fw-bold">Menu</h5>
            <Link to="home">Home</Link>
            <Link to="script">Script</Link>
            <Link to="market">Market</Link>
            <Link to="testimonial">Testi</Link>
            <Link to="syaratketen">Syarat & Ketentuan</Link>
          </Col>
          <Col lg="4" className="mt-lg-0 mt-lg-5">
            <h5 className="fw-bold mb-3">Subscribe untuk info menarik</h5>
            <div className="subscribes">
              <input type="text" placeholder="Subscribe..." />
              <button className="btn btn-danger rounded-end rounded-0">
                Subscribe
              </button>
            </div>
            <div className="social mt-3">
              <i className="fa-brands fa-facebook"></i>
              <i className="fa-brands fa-twitter"></i>
              <i className="fa-brands fa-linkedin"></i>
              <i className="fa-brands fa-youtube"></i>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default FooterCompont;

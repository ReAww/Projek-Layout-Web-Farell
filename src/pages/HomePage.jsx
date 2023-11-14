import { Container, Row, Col } from "react-bootstrap";
import ReAwwImage from "../assets/img/ReAww.jpg"


// disini dia menggukankan arrow function, dan saya mengubahnya menggunakan function biasa, dan belum menampilkan eror di console
// dalam artian(bisa)
export default function HomePage() {
  return (
    <div className="homepage">
      <header className="w-100 min-vh-100">
        <Container>
          <Row className="header-box d-flex align-items-center">
            <Col lg="6">
              <h1 className="mb-4"> Judul dan bisa diedit pada Homepage.jsx </h1>
              <p className="mb-4">sekalian belajar menggunakan bootstrap dan react router dom</p>
              <button className="btn btn-danger btn-lg rounded-1 me-2">Kalo perlu button1</button>
              <button className="btn btn-outline-danger btn-lg rounded-1 me-2">Kalo perlu button2</button>
            </Col>
            <Col lg="6" className="pt-lg-0 pt-5">
              <img src={ReAwwImage} alt="hero image" />
            </Col>
          </Row>
        </Container>
      </header>
      <div className="kelas w-100 min-vh-100"></div>
    </div>
  );
};

// export default HomePage;
// ini awal dari yang youtube gunakan
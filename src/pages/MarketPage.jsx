import { Container, Row, Col } from "react-bootstrap";
import { semuaKelas } from "../data/index";

import FaqCompont from "../components/FaqCompont";

function MarketPage() {
  return (
    <div className="market-page">
      <div className="market min-vh-100">
        <Container>
          <Row>
            <Col>
              <h1 className="fw-bold text-center ">Semua Script</h1>
              <p className="text-center">
                remember only this site, everything is safe 100%.
              </p>
            </Col>
          </Row>
          <Row>
            {semuaKelas.map((kelas) => {
              return (
                <Col key={kelas.id} className="shadow">
                  <img
                    src={kelas.image}
                    alt="unsplash.com"
                    className="w-100 mb-3 rounded-top-5"
                  />
                  <div className="star mb-2 px-3">
                    <i className={kelas.star1}></i>
                    <i className={kelas.star2}></i>
                    <i className={kelas.star3}></i>
                    <i className={kelas.star4}></i>
                    <i className={kelas.star5}></i>
                  </div>
                  <h5 className="fw-bold px-3">{kelas.title}</h5>
                  <h7 className="subtitle fw-bold px-3">{kelas.subtitle}</h7>
                  <div className="ket d-flex justify-content-between align-items-center px-3 pb-3 ">
                    <p className="m-0 text-primary fw-bold">{kelas.price}</p>
                    <button className="btn btn-danger rounder-1">
                      {kelas.buy}
                    </button>
                  </div>
                </Col>
              );
            })}
          </Row>
        </Container>
      </div>

      <FaqCompont />
    </div>
  );
}

export default MarketPage;

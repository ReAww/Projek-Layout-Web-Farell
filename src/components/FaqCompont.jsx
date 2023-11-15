import { Container, Row, Col, Accordion } from "react-bootstrap";

import { faq } from "../data/index";

const FaqCompont = () => {
  return (
    <div className="faq">
      <Container>
        <Row>
          <Col>
            <h2 className="judulaccordion text-center fw-bold">
              Text untuk Accordion dibawah
            </h2>
          </Col>
        </Row>
        <Row className="row-cols-lg-2 row-cols-1 g-2 pt-5">
          {faq.map((data) => {
            return (
              <Col key={data.id}>
                <Accordion className="shadow-sm">
                  <Accordion.Item eventKey={data.eventKey}> {/*apapun itu jika ada variable data, maka terletak di ../data/index.js */}
                    <Accordion.Header>
                      {/* ini isi dari Accordion title/judul, terletak pada data/index.js */}
                      {data.title}
                      </Accordion.Header>
                    <Accordion.Body>
                      {/* ini isi dari Accordion body, terletak pada data/index.js */}
                      {data.desc}
                      {/* NOTEE : Lorem isum bla bla.... , adalah random text yang ada pada data index */}
                      </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};

export default FaqCompont;

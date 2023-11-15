import { Container, Row, Col } from "react-bootstrap";
import ReAwwImage from "../assets/img/ReAww.jpg";
import HeroImage from "../assets/img/hero.png";

import { kelasTerbaru, dataSwiper } from "../data/index";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import FaqCompont from "../components/FaqCompont";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";

// disini dia menggukankan arrow function, dan saya mengubahnya menggunakan function biasa, dan belum menampilkan eror di console
// dalam artian(bisa)
export default function HomePage() {
  let navigate = useNavigate();

  return (
    <div className="homepage">
      <header className="w-100 min-vh-100 d-flex align-items-center pt-lg-5">
        <Container>
          <Row className="header-box d-flex align-items-center ">
            <Col lg="6">
              <h1 className="mb-4">
                Ini judul <br /> <span>dan bisa diedit pada</span> <br />
                Homepage.jsx
              </h1>
              <p className="mb-4">
                sekalian belajar menggunakan bootstrap dan react router dom
              </p>
              <button className="btn btn-danger btn-lg rounded-1 me-2 mb-xs-0 mb-2">
                Kalo perlu button1
              </button>
              <button className="btn btn-outline-danger btn-lg rounded-1 mb-xs-0 mb-2">
                Kalo perlu button2
              </button>
            </Col>
            <Col lg="6" className="pt-lg-0 pt-5">
              <img src={ReAwwImage} alt="hero image" />
            </Col>
          </Row>
        </Container>
      </header>
      <div className="kelas w-100 min-vh-100">
        <Container>
          <Row>
            <Col>
              <h1 className="text-center fw-bold">Best Script</h1>
              <p className="text-center">Do it on your own Risk </p>
            </Col>
          </Row>

          <Row>
            {kelasTerbaru.map((kelas) => {
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
          <Row>
            <Col className="text-center">
              <button
                className="btn btn-success rounded-5 btn-lg"
                onClick={() => navigate("/exploit")}
              >
                Lihat Semua Script
                <i className="fa-solid fa-chevron-right ms-2"></i>
              </button>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="testimonial py-5">
        <Container>
          <Row>
            <Col>
              <h1 className="text-center fw-bold my-5">Testimonial</h1>
            </Col>
          </Row>
          <Row>
            <Swiper
              slidesPerView={1}
              spaceBetween={10}
              pagination={{
                clickable: true,
              }}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 40,
                },
                992: {
                  slidesPerView: 2,
                  spaceBetween: 50,
                },
                1200: {
                  slidesPerView: 3,
                  spaceBetween: 50,
                },
              }}
              modules={[Pagination]}
              className="mySwiper"
            >
              {dataSwiper.map((data) => {
                return (
                  <SwiperSlide key={data.id} className="shadow">
                    <p className="desc">{data.desc}</p>
                    <div className="fototesti">
                      <img src={data.image} alt="" />
                      <div>
                        <h5 className="mb-1">{data.name}</h5>
                        <p className="m-0 fw-bold">{data.skill}</p>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </Row>
        </Container>
      </div>
      {/* =================SECTION FAQ */}
      <FaqCompont />
    </div>
  );
}

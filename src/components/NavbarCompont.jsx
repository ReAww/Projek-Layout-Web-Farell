import { useState, useEffect } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";

// menggunakan tanda kurung kurawal yang digunakan impor bernama
import { navLinks } from "../data/index";
import { NavLink } from "react-router-dom";

const NavbarCompont = () => {
  const [changeColor, setChangeColor] = useState(false);

  const changeBackgroundColor = () => {
    if (window.scrollY > 10) {
      setChangeColor(true);
    } else {
      setChangeColor(false);
    }
  };

  useEffect(() => {
    changeBackgroundColor();

    window.addEventListener("scroll", changeBackgroundColor);
  });

  return (
    <div>
      <Navbar
        expand="lg"
        id="navbg"
        className={changeColor ? "color-active" : ""}
      >
        <Container>
          {/* hampir sama cara penggunaan nya seperti menggunakan tailwinds css, tapi saya menggunakan
          bootstrap di sini,  */}
          <Navbar.Brand href="#home" className="fs-3 fw-bold">
            <div>
              <a href="https://www.youtube.com/@ReAwwReL" target="_blank">
                <img className="imgnavbar" src="ReAww.jpg" alt="" />
              </a>
            </div>
            <a className="navbrand" href="/">
              <h1 className="fw-bold">ReAwwWeb</h1>
            </a>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="m-auto">
              {navLinks.map((link) => {
                return (
                  <div className="nav-link" key={link.id}>
                    <NavLink
                      to={link.path}
                      className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "active" : ""
                      }
                      end
                    >
                      {link.text}
                    </NavLink>
                  </div>
                );
              })}
            </Nav>
            <div>
              {/* // jadi disni saya membuat button yang langsung menuju ke tombol subscribe. */}
              <button className="btn btn-outline-danger rounder-1">
                <a
                  className="buttonsub"
                  href="https://accounts.google.com/ServiceLogin?service=youtube&uilel=3&passive=true&continue=https%3A%2F%2Fwww.youtube.com%2Fsignin%3Faction_handle_signin%3Dtrue%26app%3Ddesktop%26hl%3Den%26next%3D%252Fresults%253Fsearch_query%253Dreaww%26continue_action%3DQUFFLUhqa015bDlFOUtZZlYwc1FlSGpoZzNoN3hTYUh2UXxBQ3Jtc0trcWUyYy02THNrRW1nc1hKdUpEWjQ1ZWZqbHhadDgtSGRkTHpmRVBseTM0dFhGVUxyd2lkM3JqMXpDdWtIVGplQS1IZk1iZENvcVZNb0x2Y0ZFczk3cDJDSEJneDFyOWlVS2tadjlkMEpPcmVoOGpKYTVzWUV3YU04SXVqejlCVHJDYXE0aEdDLWx5VDAtQmU1anowNzN5WWpKUUExeTRlOWVCaTctT3lzSHR3WnJQRDRFSHlVUWhidGx1QUZTUTlMUHV5ZGY&hl=en"
                  target="_blank"
                >
                  Subscribe Here!
                </a>
              </button>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarCompont;

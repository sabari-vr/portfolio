import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import {
  // AiFillStar,
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineContacts,
} from "react-icons/ai";
import { GiSkills } from "react-icons/gi";
import { CgFileDocument } from "react-icons/cg";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="lg"
      className={navColour ? "sticky p-0" : "navbar p-0"}
    >
      <Container>
        <Navbar.Brand className="d-flex">
          <Link to="/">
            <svg
              width="280"
              height="70"
              viewBox="0 0 370 88.42068053848587"
              class="css-1j8o68f"
            >
              <defs id="SvgjsDefs1540">
                <linearGradient id="SvgjsLinearGradient1545">
                  <stop
                    id="SvgjsStop1546"
                    stop-color="#8f5e25"
                    offset="0"
                  ></stop>
                  <stop
                    id="SvgjsStop1547"
                    stop-color="#fbf4a1"
                    offset="0.5"
                  ></stop>
                  <stop
                    id="SvgjsStop1548"
                    stop-color="#8f5e25"
                    offset="1"
                  ></stop>
                </linearGradient>
                <linearGradient id="SvgjsLinearGradient1549">
                  <stop
                    id="SvgjsStop1550"
                    stop-color="#8f5e25"
                    offset="0"
                  ></stop>
                  <stop
                    id="SvgjsStop1551"
                    stop-color="#fbf4a1"
                    offset="0.5"
                  ></stop>
                  <stop
                    id="SvgjsStop1552"
                    stop-color="#8f5e25"
                    offset="1"
                  ></stop>
                </linearGradient>
              </defs>
              <g
                id="SvgjsG1541"
                featurekey="symbolFeature-0"
                transform="matrix(0.8842068053848586,0,0,0.8842068053848586,0,0)"
                fill="url(#SvgjsLinearGradient1545)"
              >
                <path
                  xmlns="http://www.w3.org/2000/svg"
                  fill="url(#SvgjsLinearGradient1545)"
                  d="M79.167,10.416C79.167,4.671,74.494,0,68.75,0c-5.744,0-10.417,4.671-10.417,10.416  c0,5.029,3.585,9.237,8.333,10.205v15.865l-25,19.642v-18.84C46.416,36.319,50,32.112,50,27.083c0-5.745-4.674-10.417-10.417-10.417  s-10.417,4.672-10.417,10.417c0,5.029,3.584,9.236,8.333,10.205v18.84l-25-19.642V20.621c4.749-0.968,8.333-5.176,8.333-10.205  C20.833,4.671,16.16,0,10.417,0C4.673,0,0,4.671,0,10.416c0,5.029,3.585,9.237,8.333,10.205v17.892L37.5,61.426v17.952  c-4.749,0.964-8.333,5.176-8.333,10.205c0,5.741,4.673,10.417,10.417,10.417S50,95.324,50,89.583c0-5.029-3.585-9.241-8.333-10.205  V61.426l29.167-22.913V20.621C75.583,19.653,79.167,15.445,79.167,10.416z M4.167,10.416c0-3.446,2.803-6.25,6.25-6.25  c3.446,0,6.25,2.804,6.25,6.25s-2.804,6.25-6.25,6.25C6.97,16.666,4.167,13.862,4.167,10.416z M68.75,16.666  c-3.447,0-6.25-2.804-6.25-6.25s2.803-6.25,6.25-6.25c3.446,0,6.25,2.804,6.25,6.25S72.197,16.666,68.75,16.666z"
                ></path>
              </g>
              <g
                id="SvgjsG1542"
                featurekey="nameFeature-0"
                transform="matrix(0.888099470578869,0,0,0.888099470578869,90.00000338783062,21.378332838871387)"
                fill="url(#SvgjsLinearGradient1549)"
              >
                <path d="M23.48 27.560000000000002 c-15.88 0 -16.12 -0.04 -16.32 -0.04 l-0.08 0 c-4 -0.32 -7.08 -3.72 -7.08 -7.76 c0 -4.32 3.48 -7.8 7.8 -7.8 l16.8 0 c3.36 0 6.08 2.72 6.08 6.12 l0 3.24 l-22.76 0 l-0.04 0 l-0.04 0 c-0.92 -0.04 -1.52 -0.72 -1.52 -1.56 s0.64 -1.52 1.48 -1.56 l19.76 0 l0 -0.08 c0 -1.72 -1.32 -3.04 -3.04 -3.04 l-16.72 0 c-2.56 0 -4.68 2.08 -4.68 4.68 c0 2.4 1.8 4.32 4.08 4.64 c15.96 0 16.12 0.04 16.4 0.04 c4 0.32 7.08 3.76 7.08 7.76 c0 4.32 -3.48 7.8 -7.76 7.8 l-16.84 0 c-3.36 0 -6.08 -2.72 -6.08 -6.08 l0 -3.28 l22.92 0 c1.96 0.12 1.96 3 0 3.12 l-19.8 0 l0 0.08 c0 1.72 1.32 3.04 3.04 3.04 l16.76 0 c2.52 0 4.68 -2 4.68 -4.68 c0 -2.4 -1.8 -4.32 -4.12 -4.64 z M56.040000000000006 30.64 l1.8 -3.12 l5.44 9.36 l3.6 0 c-0.8 -1.28 -8.4 -14.28 -9.04 -15.56 l-7.84 13.6 l-2.92 5.08 l-10.8 0 c0.6 -1 4.64 -8.04 8.52 -14.8 c2.28 -3.96 4.8 -8.4 7.64 -13.24 l3.6 0 l-7.44 12.88 l-6.92 12.04 l3.6 0 c4.92 -8.68 8 -13.8 12.56 -21.8 c0.28 0.48 14.36 24.88 14.44 24.92 l-10.8 0 z M102.88 26 c1.92 1.4 3.12 3.64 3.12 6.2 c0 4.32 -3.48 7.8 -7.8 7.8 l-22.8 0 l0 -15.6 l9.32 0 l0 0.04 l0 6.2 l13.48 0 c0.84 0.04 1.48 0.72 1.48 1.56 s-0.64 1.52 -1.48 1.56 l-16.56 0 l0 -6.24 l-3.12 0 l0 9.36 l19.68 0 l0.04 0 c2.56 0 4.64 -2.08 4.64 -4.68 c0 -2.44 -1.96 -4.52 -4.4 -4.64 l-10.64 0 l0 -3.12 l10.52 0 c2.52 -0.12 4.52 -2.12 4.52 -4.68 c0 -2.6 -2.08 -4.68 -4.64 -4.68 l-0.04 0 l-19.68 0 l0 3.12 l19.68 0 c0.84 0.04 1.48 0.72 1.48 1.56 s-0.64 1.52 -1.48 1.56 l-22.8 0 l0 -9.36 l22.8 0 c4.32 0 7.8 3.48 7.8 7.8 c0 2.56 -1.2 4.8 -3.12 6.24 z M131.35999999999999 30.64 l1.8 -3.12 l5.44 9.36 l3.6 0 c-0.8 -1.28 -8.4 -14.28 -9.04 -15.56 l-7.84 13.6 l-2.92 5.08 l-10.8 0 c0.6 -1 4.64 -8.04 8.52 -14.8 c2.28 -3.96 4.8 -8.4 7.64 -13.24 l3.6 0 l-7.44 12.88 l-6.92 12.04 l3.6 0 c4.92 -8.68 8 -13.8 12.56 -21.8 c0.28 0.48 14.36 24.88 14.44 24.92 l-10.8 0 z M183.95999999999998 40 l-10.8 0 l-3.64 -6.28 l-7 0 l0 6.28 l-9.32 0 l0 -15.6 l22.88 0.04 c2.6 0 4.68 -2.12 4.68 -4.68 c0 -2.6 -2.08 -4.68 -4.68 -4.68 l-19.76 0 l0 3.12 l19.76 0 c0.84 0.04 1.48 0.72 1.48 1.56 s-0.64 1.52 -1.48 1.56 l-0.04 0 l-0.04 0 l-22.8 0 l0 -9.36 l22.88 0 c4.32 0 7.8 3.48 7.8 7.8 c0 4.28 -3.48 7.8 -7.8 7.8 l-19.76 -0.04 l0 9.36 l3.12 0 l0 -6.28 l11.88 0 c1.28 2.32 3.44 5.88 3.64 6.28 l3.6 0 c-0.32 -0.44 -2.16 -3.72 -3.64 -6.28 l3.6 0 c1.32 2.28 2.64 4.64 3.72 6.4 z M198.92000000000002 40 l-9.36 0 l0 -28.04 l9.36 0 l0 21.8 l-3.12 0 l0 -18.68 l-3.12 0 l0 21.8 l6.24 0 l0 3.12 z M249.72 11.96 l10.8 0 c-0.6 1 -4.64 8.04 -8.52 14.8 c-2.28 3.96 -4.8 8.4 -7.64 13.24 l-3.6 0 c0.32 -0.52 3.88 -6.8 7.4 -12.88 c2.04 -3.56 4.36 -7.6 6.96 -12.04 l-3.6 0 c-5.04 8.64 -7.96 13.8 -12.56 21.8 c-0.28 -0.48 -14.48 -24.88 -14.44 -24.92 l10.8 0 l5.44 9.36 l-1.8 3.12 l-5.44 -9.36 l-3.6 0 c0.8 1.28 8.28 14.32 9.04 15.56 l7.84 -13.6 z M315.28 40 l-10.8 0 l-3.64 -6.28 l-7 0 l0 6.28 l-9.32 0 l0 -15.6 l22.88 0.04 c2.6 0 4.68 -2.12 4.68 -4.68 c0 -2.6 -2.08 -4.68 -4.68 -4.68 l-19.76 0 l0 3.12 l19.76 0 c0.84 0.04 1.48 0.72 1.48 1.56 s-0.64 1.52 -1.48 1.56 l-0.04 0 l-0.04 0 l-22.8 0 l0 -9.36 l22.88 0 c4.32 0 7.8 3.48 7.8 7.8 c0 4.28 -3.48 7.8 -7.8 7.8 l-19.76 -0.04 l0 9.36 l3.12 0 l0 -6.28 l11.88 0 c1.28 2.32 3.44 5.88 3.64 6.28 l3.6 0 c-0.32 -0.44 -2.16 -3.72 -3.64 -6.28 l3.6 0 c1.32 2.28 2.64 4.64 3.72 6.4 z"></path>
              </g>
            </svg>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)}>
                <AiOutlineHome style={{ marginBottom: "2px" }} /> Home
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/skillset"
                onClick={() => updateExpanded(false)}
              >
                <GiSkills style={{ marginBottom: "2px" }} /> Skillset
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/project"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineFundProjectionScreen
                  style={{ marginBottom: "2px" }}
                />{" "}
                Projects
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/resume"
                onClick={() => updateExpanded(false)}
              >
                <CgFileDocument style={{ marginBottom: "2px" }} /> Resume
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/contact"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineContacts style={{ marginBottom: "2px" }} /> Contact Me
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;

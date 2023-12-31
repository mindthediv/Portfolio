"use client";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import { Container, Col, Row } from "react-bootstrap";
import NavBar from "./(components)/NavBar";
const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Gabriele Pagliaricci",
//   description: "Gabriele Pagliaricci's Webfolio ",
//   openGraph: {
//     images: [
//       {
//         url: "/assets/cvphoto.jpg",
//       },
//     ],
//   },
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Container fluid>
          <Row>
            {/* LEFT COL */}
            <Col
              xs={1}
              className="d-none d-sm-flex l-col align-items-center justify-content-center "
            >
              <Link href={"/about"}>
                <img
                  src="assets/linkBgGreen.png"
                  className="w-100 linkBg d-inline"
                  style={{ top: -25 + "%" }}
                />
                ABOUT
              </Link>
            </Col>
            {/* CENTER COL, TopBar + MainWrap*/}
            <Col xs={12} sm={10} className="d-flex flex-column c-col ">
              {/* TOP BAR */}
              <Row className="top-col">
                <Col className="d-none d-sm-flex justify-content-center my-3 ">
                  <span className="linkWrap">
                    <img
                      src="assets/linkBgOrange.png"
                      className="w-100 linkBg d-inline"
                      style={{ top: -75 + "%" }}
                    />
                    <Link href={"/"}>CONTACTS</Link>
                  </span>
                </Col>
                <Col className="d-sm-none">
                  <NavBar />
                </Col>
              </Row>
              {/* MAIN */}
              <Row>
                <Container>
                  <Row>
                    <Col className="p-0 ">
                      <main className="pt-4">{children}</main>
                    </Col>
                  </Row>
                </Container>
              </Row>
            </Col>
            {/* RIGHT COL*/}
            <Col
              xs={1}
              className="d-none d-sm-flex r-col align-items-center justify-content-center"
            >
              <Link href={"/works"}>
                WORKS
                <img
                  src="assets/linkBgBlue.png"
                  className="w-100 linkBg d-inline"
                  style={{ top: -50 + "%" }}
                />
              </Link>
            </Col>
          </Row>
          <Row className="py-4">
            <footer className="text-center">
              <span>© 2023 Gabriele Pagliaricci</span>
            </footer>
          </Row>
        </Container>
      </body>
    </html>
  );
}

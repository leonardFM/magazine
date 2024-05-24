import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Featured from './component/home/Featured';
import Section from './component/home/Section';

import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
  return (
    <>
    <style>
        {`
          .section-name {
            font-size: 16px;
            font-weight: bold;

          }

          .see-all {
            font-size: 15px;
            font-weight: 300;

          }
        `}
      </style>
      <Container>
        <Row>
          <Col xs={12}>
            <Featured />
          </Col>
        </Row>

        <Row className="mt-4">
          <Col xs={6} className="px-3">
            <h2>
              <span className='section-name'>Popular</span>
            </h2>
          </Col>
          <Col xs={6} className="px-3 text-end">
            <h2>
              <span className='see-all'>See All &gt; </span>
            </h2>
          </Col>
        </Row>

        <Row>
          <Col xs={12}>
            <Section />
          </Col>
        </Row>

        <Row className="mt-4">
          <Col xs={6} className="px-3">
            <h2>
              <span className='section-name'>New</span>
            </h2>
          </Col>
          <Col xs={6} className="px-3 text-end">
            <h2>
              <span className='see-all'>See All &gt;</span>
            </h2>
          </Col>
        </Row>

        <Row>
          <Col xs={12}>
            <Section />
          </Col>
        </Row>

        <Row className="mt-4">
          <Col xs={6} className="px-3">
            <h2>
              <span className='section-name'>Best Series</span>
            </h2>
          </Col>
          <Col xs={6} className="px-3 text-end">
            <h2>
              <span className='see-all'>See All &gt;</span>
            </h2>
          </Col>
        </Row>

        <Row>
          <Col xs={12}>
            <Section />
          </Col>
        </Row>

        <Row className="mt-4">
          <Col xs={6} className="px-3">
            <h2>
              <span className='section-name'>Recomended</span>
            </h2>
          </Col>
          <Col xs={6} className="px-3 text-end">
            <h2>
              <span className='see-all'>See All &gt;</span>
            </h2>
          </Col>
        </Row>

        <Row>
          <Col xs={12}>
            <Section />
          </Col>
        </Row>
      </Container>
    </>
  );
}

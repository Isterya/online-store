import { Col, Container, Row } from 'react-bootstrap';
import TypeBar from '../components/TypeBar';

const Store = () => {
  return (
    <Container>
      <Row className="mt-3">
        <Col md={3}>
          <TypeBar />
        </Col>
        <Col md={9}></Col>
      </Row>
    </Container>
  );
};

export default Store;
